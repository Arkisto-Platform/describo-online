const { readJson, writeFile, ensureDir } = require("fs-extra");
const { flattenDeep, orderBy, has, isArray, uniq } = require("lodash");
const path = require("path");

const schema = "schema.org.jsonld";
const classes = {};
const properties = [];
const simpleDataTypes = ["Text", "Date"];
const selectDataTypes = ["Boolean"];

(async () => {
    await ensureDir("./types");
    const jsonld = await readJson(schema);

    // separate classes and properties
    jsonld["@graph"].forEach((entry) => {
        if (entry["@type"] === "rdf:Property") {
            properties.push(entry);
        } else if (entry["@type"] === "rdfs:Class") {
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
                    "@id": entry["@id"],
                    name: entry["rdfs:label"],
                    subClassOf,
                },
                inputs: [],
                linksTo: [],
            };
        }
    });

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
                    property: property["rdfs:label"],
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
                        "@type": targetTypes.length ? targetTypes : ["Text"],
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

    // order class inputs and write to file
    let searchableIndex = [];
    let index = {};
    Object.keys(classes).forEach(async (c) => {
        const item = classes[c];
        item.linksTo = uniq(item.linksTo);
        item.inputs = orderBy(item.inputs, "property");

        const typeDefinition = path.join(
            "types",
            stripSchemaPath(item.metadata["@id"])
        );
        index[stripSchemaPath(item.metadata["@id"])] = item;

        searchableIndex.push({
            name: c,
            help: item.metadata.help,
        });
        // await writeFile(
        //     `${typeDefinition}.json`,
        //     JSON.stringify(item, null, 2)
        // );
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
})();

function stripSchemaPath(text) {
    return text.replace("http://schema.org/", "");
}
