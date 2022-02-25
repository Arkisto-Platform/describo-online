import "regenerator-runtime";
import {
    loadInstalledProfiles,
    loadProfile,
    validateProfile,
    loadClassDefinition,
} from "./profile";
import models from "../models";
import path from "path";
import { readJSON, readdir } from "fs-extra";
import fetchMock from "jest-fetch-mock";
fetchMock.enableMocks();

describe("Test profile management operations", () => {
    beforeEach(async () => {
        await models.profile.truncate({ cascade: true });
        await models.collection.truncate({ cascade: true });
    });
    afterAll(async () => {
        await models.sequelize.close();
    });
    test("it should be able to load all installed profiles", async () => {
        let profiles = await loadInstalledProfiles({
            profilePath: path.join("/srv", "testing-profiles"),
        });
        let valid = profiles.filter((p) => p.file.match(/valid-root-dataset-definition.json/));
        let profileCount = (await readdir("/srv/testing-profiles")).length;
        expect(valid.length).toEqual(1);
        expect(profiles.length).toEqual(profileCount + 1);
    });
    test("it should be able to load a specified profile", async () => {
        let profile = await loadProfile({ file: "schema.org" });
        expect(Object.keys(profile.classes).length).toEqual(895);

        profile = await loadProfile({
            profilePath: path.join("/srv", "testing-profiles"),
            file: "valid-inherit-class-configuration.json",
        });
        expect(Object.keys(profile.classes)).toEqual(["Dataset"]);
    });
});

describe("Test profile validation", () => {
    beforeEach(() => {
        fetch.resetMocks();
    });
    const profilePath = path.join("/srv", "testing-profiles");
    test(`it should be able to validate 'valid-define-select-multiple.json'`, async () => {
        let profile = await readJSON(path.join(profilePath, "valid-define-select-multiple.json"));
        let result = await validateProfile({ profile });
        expect(result.valid).toBe(true);
    });
    test(`it should not validate 'valid-define-select-multiple.json'`, async () => {
        let profile = await readJSON(path.join(profilePath, "valid-define-select-multiple.json"));
        profile.monkeys = {};
        let result = await validateProfile({ profile });
        expect(result.valid).toBe(false);

        delete profile.monkeys;
        delete profile.classes;
        result = await validateProfile({ profile });
        expect(result.valid).toBe(false);
    });
    test(`it should be able to validate enabled class definitions`, async () => {
        let profile = await readJSON(
            path.join(profilePath, "valid-inherit-class-configuration-define-enabled-classes.json")
        );
        let result = await validateProfile({ profile });
        expect(result.valid).toBe(true);
    });
    test(`it should be able to validate all of the inbuilt profile examples`, async () => {
        let examples = await readdir(profilePath);
        examples = examples.filter((e) => e.match(/^valid-/));
        fetch.mockResponse(JSON.stringify({}));
        for (let example of examples) {
            let profile = await readJSON(path.join(profilePath, example));
            let result = await validateProfile({ profile });
            if (!result.valid) {
                console.log(example);
            }
            expect(result.valid).toBe(true);
        }
    });
    test(`it should find validation errors in bad class definitions`, async () => {
        let profiles = [
            { name: "invalid-enabled-classes-example1.json", errors: 1 },
            { name: "invalid-enabled-classes-example2.json", errors: 2 },
            { name: "invalid-enabled-classes-example3.json", errors: 2 },
            { name: "invalid-enabled-classes-example4.json", errors: 1 },
            { name: "invalid-enabled-classes-example5.json", errors: 1 },
        ];
        for (let profile of profiles) {
            let data = await readJSON(path.join(profilePath, profile.name));
            fetch.mockResponse(JSON.stringify({}));
            let result = await validateProfile({ profile: data });
            expect(result.valid).toBe(false);
            expect(result.errors.length).toEqual(profile.errors);
        }
    });
    test(`it should be able to retrieve type definitions`, async () => {
        let profile = await readJSON(
            path.join(profilePath, "valid-define-type-definitions-to-load.json")
        );
        fetch.mockResponse(
            JSON.stringify({
                PlanAction: {
                    id: "http://schema.org/PlanAction",
                    name: "PlanAction",
                    help: "The act of planning the execution of an event/task/action/reservation/plan to a future date.",
                    subClassOf: ["OrganizeAction"],
                    allowAdditionalProperties: false,
                    inputs: [
                        {
                            id: "http://schema.org/scheduledTime",
                            name: "scheduledTime",
                            help: "The time the object is scheduled to.",
                            multiple: true,
                            type: ["DateTime"],
                        },
                    ],
                    linksTo: [],
                    hierarchy: ["PlanAction", "OrganizeAction", "Action", "Thing"],
                },
            })
        );

        let result = await validateProfile({ profile });
        expect(result.valid).toBe(true);
        expect(Object.keys(result.typeDefinitions).length).toEqual(1);
        expect(result.typeDefinitionsLookup.length).toEqual(1);
    });
});

describe("Test profile definition lookups", () => {
    test("Load a profile and get an inherited Dataset definition from it", async () => {
        const profile = await readJSON(
            path.join("/srv", "testing-profiles", "valid-inherit-class-configuration.json")
        );

        let { inputs } = await loadClassDefinition({ classNames: ["Dataset"], profile });
        expect(inputs.length).toEqual(133);
    });
    test("Load a profile and get an override Dataset definition from it", async () => {
        const profile = await readJSON(
            path.join("/srv", "testing-profiles", "valid-override-class-configuration.json")
        );
        let classInputs = await loadClassDefinition({ classNames: ["Dataset"], profile });
        expect(classInputs.inputs.length).toEqual(1);
    });
});
