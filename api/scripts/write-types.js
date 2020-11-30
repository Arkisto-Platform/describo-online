const { readJson, writeFile, ensureDir } = require("fs-extra");
const {
    flattenDeep,
    orderBy,
    has,
    isArray,
    uniq,
    isString,
} = require("lodash");
const path = require("path");

const schema = "schema.org.jsonld";
const crateContext = "crate-context.jsonld";
const simpleDataTypes = ["Text", "Date"];
const selectDataTypes = ["Boolean"];
let classes = {};
let properties = [];

(async () => {
    await ensureDir("./types");

    await extractSchemaOrgData();
    let context = await extractCrateContext();
    diffSchemaOrgAndCrateContext({ context });
})();

function stripSchemaPath(text) {
    return text.replace("http://schema.org/", "");
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
    let classIds = {};
    Object.keys(classes).forEach((k) => {
        classIds[classes[k].metadata.id] = true;
    });
    // console.log(classIds);
    // console.log("n classes", Object.keys(classes).length);
    // console.log("n context", Object.keys(context).length);

    let extraClasses = [];
    for (let [key, value] of Object.entries(context)) {
        if (!classIds[value]) extraClasses.push(value);
    }
    // console.log(extraClasses.length);
    // console.log(extraClasses);
    // console.log(classes["Endocrine"]);
}

function extractClassesAndProperties({ graph }) {
    // separate classes and properties
    graph.forEach((entry) => {
        if (entry["@type"] === "rdf:Property") {
            properties.push(entry);
        } else if (entry["@type"] === "rdfs:Class") {
            // if (entry["@id"] === "http://schema.org/PhysicalActivityCategory") {
            //     console.log(JSON.stringify(entry, null, 2));
            // }
            let subClassOf = [];
            try {
                subClassOf = isArray(entry["rdfs:subClassOf"])
                    ? entry["rdfs:subClassOf"].map((e) =>
                          stripSchemaPath(e["@id"])
                      )
                    : [stripSchemaPath(entry["rdfs:subClassOf"]["@id"])];
            } catch (error) {}
            classes[stripSchemaPath(entry["@id"])] = {
                metadata: {
                    allowAdditionalProperties: false,
                    help: entry["rdfs:comment"],
                    id: entry["@id"],
                    name: isString(entry["rdfs:label"])
                        ? entry["rdfs:label"]
                        : entry["rdfs:label"]["@value"],
                    subClassOf,
                },
                inputs: [],
                linksTo: [],
            };
        } else {
            // if (entry["@id"] === "http://schema.org/AerobicActivity") {
            //     console.log(JSON.stringify(entry, null, 2));
            // }
            // console.log(entry);
        }
    });
}

function mapPropertiesToClasses() {
    // map properties back in to classes
    properties.forEach((property) => {
        const foundIn = flattenDeep([
            property["http://schema.org/domainIncludes"],
        ]);
        foundIn.forEach((target) => {
            if (target) {
                target = stripSchemaPath(target["@id"]);

                const allowedTypes = flattenDeep([
                    property["http://schema.org/rangeIncludes"],
                ]).map((t) => stripSchemaPath(t["@id"]));

                const complexTypes = allowedTypes.filter((type) =>
                    has(classes, type)
                );
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
                complexTypes.forEach((type) =>
                    classes[type].linksTo.push(target)
                );
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

        const typeDefinition = path.join(
            "types",
            stripSchemaPath(item.metadata["id"])
        );
        index[stripSchemaPath(item.metadata["id"])] = item;

        searchableIndex.push({
            name: c,
            help: item.metadata.help,
        });
    });
    await writeFile(
        path.join("types", "type-definitions.json"),
        JSON.stringify(index, null, 2)
    );
    // console.log(JSON.stringify(index, null, 2));
    await writeFile(
        path.join("types", "type-definitions-lookup.json"),
        JSON.stringify(searchableIndex)
    );
}
