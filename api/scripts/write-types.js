const { readJson, writeFile, ensureDir } = require("fs-extra");
const { flattenDeep, orderBy, has, isArray, uniq, isString, cloneDeep } = require("lodash");
const path = require("path");

const schema = "schema.org.jsonld";
const crateContext = "crate-context.jsonld";
const simpleDataTypes = ["Text", "Date", "Number", "Integer"];
const selectDataTypes = ["Boolean"];
let classes = {};
let properties = {};
let other = {};

const rename = { MediaObject: "File" };
const addTypesToProperty = {
    hasPart: {
        types: [
            "Dataset",
            "File",
            "File, ImageObject",
            "File, SoftwareSourceCode",
            "File, SoftwareSourceCode, ComputationalWorkflow",
            "RepositoryCollection",
            "RepositoryObject",
            "RepositoryObject, ImageObject",
            "ComputerLanguage, SoftwareApplication",
            "File, SoftwareSourceCode, ComputationalWorkflow",
            "FormalParameter",
        ],
    },
};
(async () => {
    await ensureDir("./types");

    await extractSchemaOrgData();
    let context = await extractCrateContext();
    diffSchemaOrgAndCrateContext({ context });
})();

function stripSchemaPath(text) {
    return text.replace("schema:", "");
}

async function extractSchemaOrgData() {
    const jsonld = await readJson(schema);

    extractClassesAndProperties({ graph: jsonld["@graph"] });
    mapPropertiesToClasses();
    await writeTypeDefinitions();
}

async function extractCrateContext() {
    const jsonld = await readJson(crateContext);
    return jsonld["@context"];
}

function diffSchemaOrgAndCrateContext({ context }) {
    let extra = {};
    const stats = {
        classes: Object.keys(classes).length,
        properties: Object.keys(properties).length,
        other: Object.keys(other).length,
        context: Object.keys(context).length,
    };
    const diff = stats.context - stats.classes - stats.properties - stats.other;
    console.log(`n classes ${stats.classes}`);
    console.log(`n properties: ${stats.properties}`);
    console.log(`n other things ${stats.other}`);
    console.log(`n context: ${stats.context}`);
    console.log(`Entries without definition: ${diff}`);
    console.log("");

    for (let [key, value] of Object.entries(context)) {
        if (!classes[key] && !other[key] && !properties[key]) extra[key] = value;
    }
    console.log("Crate context entries without definitions in schema.org");
    console.log(extra);
}

function extractClassesAndProperties({ graph }) {
    // separate classes and properties
    graph.forEach((entry) => {
        entry["@id"] = stripSchemaPath(entry["@id"]);
        // console.log(entry["@id"]);
        if (entry["@type"] === "rdf:Property") {
            let range = entry["schema:rangeIncludes"];
            if (range) {
                range = flattenDeep([range]);
                entry.types = range.map((t) => stripSchemaPath(t["@id"]));
                if (addTypesToProperty[entry["@id"]]) {
                    entry.types = [...entry.types, ...addTypesToProperty[entry["@id"]].types];
                }
            }
            properties[entry["@id"]] = entry;
        } else if (entry["@type"] === "rdfs:Class") {
            let subClassOf = [];
            try {
                subClassOf = flattenDeep([entry["rdfs:subClassOf"]]);
                subClassOf = subClassOf.map((e) => {
                    let className = stripSchemaPath(e["@id"]);
                    if (rename[className]) className = rename[className];
                    return className;
                });
            } catch (error) {}
            let className = entry["@id"];
            if (rename[className]) {
                className = rename[className];
            }
            classes[className] = {
                metadata: {
                    allowAdditionalProperties: false,
                    help: entry["rdfs:comment"],
                    id: `https://schema.org/${className}`,
                    name: className,
                    subClassOf,
                },
                inputs: [],
                linksTo: [],
            };
        } else {
            other[entry["@id"]] = entry;
        }
    });
}

function mapPropertiesToClasses() {
    // map properties back in to classes
    Object.keys(properties).forEach((property) => {
        property = properties[property];
        const foundIn = flattenDeep([property["schema:domainIncludes"]]);
        foundIn.forEach((target) => {
            if (target) {
                target = stripSchemaPath(target["@id"]);
                if (rename[target]) target = rename[target];

                const allowedTypes = property.types;

                const complexTypes = allowedTypes
                    .filter((type) => !simpleDataTypes.includes(type))
                    .filter((type) => !selectDataTypes.includes(type));

                const simpleTypes = allowedTypes
                    .filter((type) => !has(classes, type))
                    .filter((type) => simpleDataTypes.includes(type));

                const selectTypes = allowedTypes
                    .filter((type) => !has(classes, type))
                    .filter((type) => selectDataTypes.includes(type));

                // link this property to the relevant class
                const definition = {
                    id: property["@id"],
                    name: isString(property["rdfs:label"])
                        ? property["rdfs:label"]
                        : property["rdfs:label"]["@value"],
                    help: property["rdfs:comment"],
                };

                let targetTypes = [];
                let input = {};

                if (complexTypes.length) {
                    // complex types like Person and Organization ie Classes
                    targetTypes.push(complexTypes);
                }
                if (selectTypes.length) {
                    // map a boolean to true / false
                    input = {
                        ...definition,
                        "@type": "Select",
                        options: [true, false],
                    };
                }
                if (simpleTypes.length) {
                    // simple types like Date, Text
                    targetTypes.push(simpleTypes);
                }

                if (!selectTypes.length) {
                    targetTypes = flattenDeep(targetTypes);
                    classes[target].inputs.push({
                        ...definition,
                        multiple: true,
                        type: targetTypes.length ? targetTypes : ["Text"],
                    });
                } else {
                    classes[target].inputs.push(input);
                }

                // use the acceptable types for this property
                //  to link the class reverse
                complexTypes.forEach((type) => {
                    if (classes[type]) {
                        classes[type].linksTo.push(target);
                    }
                });
            }
        });
    });
}

async function writeTypeDefinitions() {
    // order class inputs and write to file
    let searchableIndex = [];
    let index = {};
    Object.keys(classes).forEach(async (c) => {
        const item = classes[c];
        item.linksTo = uniq(item.linksTo);
        item.inputs = orderBy(item.inputs, "property");

        index[item.metadata.name] = item;

        searchableIndex.push({
            name: c,
            help: item.metadata.help,
        });
    });
    await writeFile(path.join("types", "type-definitions.json"), JSON.stringify(index, null, 2));
    // console.log(JSON.stringify(index, null, 2));
    await writeFile(
        path.join("types", "type-definitions-lookup.json"),
        JSON.stringify(searchableIndex)
    );
}
