const models = require("../models");
import { readJSON, readdir } from "fs-extra";
import {
    cloneDeep,
    flattenDeep,
    orderBy,
    compact,
    uniq,
    uniqBy,
    difference,
    isEmpty,
    startCase,
    merge,
} from "lodash";
import path from "path";
// import Ajv2019 from "ajv/dist/2019";
import Ajv from "ajv";
const typeDefinitions = "/srv/type-definitions.json";
const typeDefinitionsLookup = "/srv/type-definitions-lookup.json";
const profileSchema = "profile.schema.json";
const SimpleDataTypes = [
    "Text",
    "TextArea",
    "Date",
    "DateTime",
    "Time",
    "Number",
    "Float",
    "Integer",
    "Boolean",
    "Select",
    "Value",
];

export async function loadInstalledProfiles({ profilePath }) {
    const profilesFolder = profilePath ? profilePath : path.join("/srv", "profiles");
    let profiles = await readdir(profilesFolder);

    let profileMetadata = [];
    for (let profile of profiles) {
        let file = path.join(profilesFolder, profile);
        let metadata = (await readJSON(file)).metadata;
        profileMetadata.push({ ...metadata, file: profile });
    }
    return [
        {
            name: "schema.org",
            version: "latest",
            description: "All of schema.org",
            file: "schema.org",
        },
        ...profileMetadata,
    ];
}

export async function loadProfile({ profilePath, file }) {
    if (file === "schema.org") {
        let schemaOrgTypeDefinitions = await readJSON(typeDefinitions);
        return {
            classes: schemaOrgTypeDefinitions,
        };
    } else {
        if (profilePath) {
            return await readJSON(path.join(profilePath, file));
        } else {
            return await readJSON(path.join("/srv", "profiles", file));
        }
    }
}

export async function validateProfile({ profile }) {
    const ajv = new Ajv();
    const schema = await readJSON(path.join(__dirname, profileSchema));
    const validate = ajv.compile(schema);
    let valid = validate(profile);
    if (!valid) {
        // validate.errors.forEach((error) => {
        //     log.error(error.message, error.params);
        // });
        return { valid, errors: validate.errors };
    }

    // the profile validates against the schema but is it consistent?

    // check that enabled classes has all required classes in it
    let errors = [];
    let typeDefinitions = {};
    valid = true;
    if (profile?.enabledClasses?.length) {
        profile.enabledClasses.forEach((c) => {
            if (!profile.classes[c]) {
                errors.push({
                    message: `When using 'enabledClasses' there must be a class definition for each in the profile`,
                    params: { classname: c },
                });
                return;
            }

            const { definition, inputs } = profile.classes[c];
            if (definition !== "override") {
                errors.push({
                    message: `'enabledClass' class definition found in profile set to 'inherit'; must be 'override'`,
                    params: { classname: c, definition },
                });
            }

            inputs.forEach((input) => {
                if (!input.type && !input.value && !input.values) {
                    errors.push({
                        message: `Input with id '${input.id}' in class '${c}' has none of [ 'type' || 'value' || 'values' ] defined`,
                    });
                    return;
                }
                if (input?.type?.length) {
                    const diff = difference(input.type, SimpleDataTypes);
                    diff.forEach((ca) => {
                        if (!profile.enabledClasses.includes(ca)) {
                            errors.push({
                                message: `Input with id '${input.id}' in class '${c}' has a value '${ca}' but it is not listed as an enabled class`,
                                params: { classname: ca },
                            });
                        }
                        if (!profile.classes[ca]) {
                            errors.push({
                                message: `Input with id '${input.id}' in class '${c}' has a value '${ca}' but there is no class definition for it`,
                                params: { classname: ca },
                            });
                        }
                    });
                }
            });
        });
    }

    // if there are any type definitions defined - confirm we can retrieve them
    if (profile?.typeDefinitions?.length) {
        for (let definition of profile.typeDefinitions) {
            let response = await global.fetch(definition);
            if (response.status !== 200) {
                errors.push({
                    message: `Error retrieving type definitions'`,
                    params: { definition },
                });
                continue;
            }
            // console.log(await response.json());
            typeDefinitions = { ...typeDefinitions, ...(await response.json()) };
        }
    }

    // the profile is invalid if both enabled classes and type definitions are defined
    if (profile?.enabledClasses?.length && profile?.typeDefinitions?.length) {
        errors.push({
            message: `When using 'enabledClasses' you must define all of your types. Using 'typeDefinitions' is invalid`,
            params: {},
        });
    }

    let typeDefinitionsLookup;
    if (!isEmpty(typeDefinitions)) {
        typeDefinitionsLookup = Object.keys(typeDefinitions).map((c) => {
            return {
                name: c,
                help: typeDefinitions[c].help,
            };
        });
    }
    return { valid: errors.length ? false : true, errors, typeDefinitions, typeDefinitionsLookup };
}

export async function loadTypeDefinitions() {
    return await readJSON(typeDefinitions);
}

export async function loadClassDefinition({ className, profile }) {
    if (profile.file) {
        profile = await loadProfile({ file: profile.file });
    }
    const typeDefinitions = await loadTypeDefinitions();
    let schemaClassDefinition = typeDefinitions[className];
    let profileClassDefinition = profile.classes[className];

    let inputs = [];
    let classes = [];
    let classDefinitionType = profileClassDefinition?.definition;
    if (!schemaClassDefinition && !profileClassDefinition && !classDefinitionType) {
        classes = ["Thing"];
    } else if (!classDefinitionType || classDefinitionType === "inherit") {
        // determine the class hierarchy
        classes = uniq([
            className,
            ...schemaClassDefinition.subClassOf,
            ...profileClassDefinition.subClassOf,
        ]);
        classes = uniq(compact(flattenDeep(mapClassHierarchies(classes))));
    } else if (classDefinitionType === "override") {
        // determine the class hierarchy
        let subClassOf = profileClassDefinition.subClassOf;
        classes = uniq([className, ...subClassOf]);

        // filter out itself so we don't end up with the type definitions from schema.org
        classes = classes.filter((c) => c !== className);
    }

    // get inputs from all the class definitions in the hierarchy
    inputs = classes.map((className) => typeDefinitions[className].inputs);
    inputs = flattenDeep([inputs, profileClassDefinition?.inputs]);
    inputs = compact(inputs);
    inputs = uniqBy(inputs, "id");
    inputs = inputs.map((input) => {
        if (!input.label) {
            return { ...input, label: startCase(input.name) };
        } else {
            return input;
        }
    });
    inputs = orderBy(inputs, ["required", "label"]);

    let hierarchy = classes.length ? classes : [className];
    return { inputs, hierarchy, classDefinitionType };

    function mapClassHierarchies(classes) {
        return classes.map((className) => {
            if (typeDefinitions[className].subClassOf.length) {
                return [className, mapClassHierarchies(typeDefinitions[className].subClassOf)];
            } else {
                return className;
            }
        });
    }
}
