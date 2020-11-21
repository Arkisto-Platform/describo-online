import "regenerator-runtime";
import { loadTypeDefinition } from "./types";

describe("Test type definitions", () => {
    afterAll(async () => {
        await models.sequelize.close();
    });
    test("it should not find an input of type DontKnow", async () => {
        let definition = await loadTypeDefinition({ name: "DontKnow" });
        expect(definition).toBeUndefined;
    });
    test("it should be able to load a LoseAction type definition", async () => {
        let definition = await loadTypeDefinition({ name: "LoseAction" });
        expect(definition.inputs.length).toBe(24);
        expect(definition.metadata).toEqual({
            allowAdditionalProperties: false,
            help: "The act of being defeated in a competitive activity.",
            "@id": "http://schema.org/LoseAction",
            name: "LoseAction",
            subClassOf: ["AchieveAction"],
        });
        const properties = definition.inputs.map((i) => i.property);
        expect(properties).toEqual([
            "actionStatus",
            "additionalType",
            "agent",
            "alternateName",
            "description",
            "disambiguatingDescription",
            "endTime",
            "error",
            "identifier",
            "image",
            "instrument",
            "location",
            "mainEntityOfPage",
            "name",
            "object",
            "participant",
            "potentialAction",
            "result",
            "sameAs",
            "startTime",
            "subjectOf",
            "target",
            "url",
            "winner",
        ]);
    });
    test("it should be able to load a Person type definition", async () => {
        let definition = await loadTypeDefinition({ name: "Person" });
        expect(definition.inputs.length).toBe(74);
        const properties = definition.inputs.map((i) => i.property);
    });
});
