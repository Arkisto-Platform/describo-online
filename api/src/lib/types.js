import { readJSON } from "fs-extra";
import { cloneDeep, flattenDeep, orderBy } from "lodash";
import path from "path";

export async function loadTypeDefinition({ name }) {
    const definitions = await readJSON(
        path.join(__dirname, "..", "common", "type-definitions.json")
    );

    let typeDefinition = definitions[name];
    if (!typeDefinition) return undefined;
    let inputs = cloneDeep(typeDefinition.inputs);

    inputs = typeDefinition.metadata.subClassOf.map((name) => {
        return (inputs = joinInputs(inputs, definitions, name));
    });
    inputs = flattenDeep(inputs);
    inputs = orderBy(inputs, "property");

    typeDefinition.inputs = inputs;
    return typeDefinition;

    function joinInputs(inputs, definitions, name) {
        let def = definitions[name];
        inputs = [...inputs, ...def.inputs];
        if (def.metadata.subClassOf.length) {
            return def.metadata.subClassOf.map((name) => {
                return joinInputs(inputs, definitions, name);
            });
        }
        return inputs;
    }
}
