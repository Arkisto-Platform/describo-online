import "regenerator-runtime";
import fetch from "node-fetch";
import { removeCollection, insertCollection } from "../lib/collections";
import { Crate } from "../lib/crate";
import { createSessionForTest } from "../common";
import { updateUserSession } from "../lib/user";
import models from "../models";
import Chance from "chance";
const chance = new Chance();

const api = "http://localhost:8080";
describe("Test entity route operations", () => {
    let sessionId, user;
    beforeEach(async () => {
        ({ user, sessionId } = await createSessionForTest());
    });
    afterAll(async () => {
        await models.sequelize.close();
    });
    test("it should get the root dataset and all of its properties", async () => {
        let collection = await loadData({ name: chance.sentence() });
        await updateUserSession({
            sessionId,
            data: { current: { collectionId: collection.id } },
        });

        let response = await fetch(`${api}/entity/RootDataset`, {
            method: "GET",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
            },
        });
        let { entity } = await response.json();
        expect(entity.eid).toEqual("./");
        expect(entity.etype).toEqual("Dataset");
        // expect(entity.eid);

        await removeCollection({ id: collection.id });
        await removeUser({ email: user.email });
    });
    test("it should get the entity with the given UUID", async () => {
        let collection = await loadData({ name: chance.sentence() });
        await updateUserSession({
            sessionId,
            data: { current: { collectionId: collection.id } },
        });

        let response = await fetch(`${api}/entity/RootDataset`, {
            method: "GET",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
            },
        });
        let { entity } = await response.json();
        let properties = entity.properties;

        const target = properties.filter((p) => p.tgtEntityId).pop()
            .tgtEntityId;
        response = await fetch(`${api}/entity/${target}`, {
            method: "GET",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
            },
        });
        ({ entity } = await response.json());
        expect(entity.eid).toEqual("person1");
        expect(entity.etype).toEqual("Person");

        await removeCollection({ id: collection.id });
        await removeUser({ email: user.email });
    });
    test("it should fail - no entity defined", async () => {
        let response = await fetch(`${api}/entity`, {
            method: "GET",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
            },
        });
        expect(response.status).toBe(405);
        await removeUser({ email: user.email });
    });
    test("it should fail - no collection defined in session", async () => {
        let response = await fetch(`${api}/entity/RootDataset`, {
            method: "GET",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
            },
        });
        expect(response.status).toBe(403);
        await removeUser({ email: user.email });
    });
    test("it should be able to create a new entity in the collection", async () => {
        let collection = await loadData({ name: chance.sentence() });
        await updateUserSession({
            sessionId,
            data: { current: { collectionId: collection.id } },
        });
        const entity = {
            name: chance.name(),
            etype: "Person",
        };
        let response = await fetch(`${api}/entity`, {
            method: "POST",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ entity }),
        });
        expect(response.status).toBe(200);
        await removeCollection({ id: collection.id });
        await removeUser({ email: user.email });
    });
    test("it should be able to update an entities data", async () => {
        let collection = await loadData({ name: chance.sentence() });
        await updateUserSession({
            sessionId,
            data: { current: { collectionId: collection.id } },
        });
        let entity = {
            name: chance.name(),
            etype: "Person",
        };
        let response = await fetch(`${api}/entity`, {
            method: "POST",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ entity }),
        });
        expect(response.status).toBe(200);
        ({ entity } = await response.json());

        let update = { name: chance.name(), eid: chance.word() };
        response = await fetch(`${api}/entity/${entity.id}`, {
            method: "PUT",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(update),
        });
        expect(response.status).toBe(200);
        response = await response.json();
        expect(response.entity.name).toEqual(update.name);
        expect(response.entity.eid).toEqual(update.eid);
        await removeCollection({ id: collection.id });
        await removeUser({ email: user.email });
    });
    test("it should be able to delete an entity", async () => {
        let collection = await loadData({ name: chance.sentence() });
        await updateUserSession({
            sessionId,
            data: { current: { collectionId: collection.id } },
        });
        let entity = {
            name: chance.name(),
            etype: "Person",
        };
        let response = await fetch(`${api}/entity`, {
            method: "POST",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ entity }),
        });
        expect(response.status).toBe(200);
        ({ entity } = await response.json());

        response = await fetch(`${api}/entity/${entity.id}`, {
            method: "DELETE",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
            },
        });
        expect(response.status).toBe(200);
        entity = await models.entity.findOne({ where: { id: entity.id } });
        expect(entity).toBeNull;
        await removeCollection({ id: collection.id });
        await removeUser({ email: user.email });
    });
});

async function loadData({ name }) {
    const crate = {
        "@context": ["https://w3id.org/ro/crate/1.1/context"],
        "@graph": [
            {
                "@type": "CreativeWork",
                "@id": "ro-crate-metadata.json",
                conformsTo: {
                    "@id": "https://w3id.org/ro/crate/1.1",
                },
                about: { "@id": "./" },
            },
            {
                "@id": "./",
                "@type": "Dataset",
                name: "dataset",
                author: "Person",
                contributor: [{ "@id": "person1" }],
            },
            {
                "@id": "person1",
                "@type": "Person",
                name: "a person",
            },
        ],
    };
    const collection = await insertCollection({ name });
    let crateManager = new Crate();
    await crateManager.importCrateIntoDatabase({
        collection,
        crate,
        sync: true,
    });
    return collection;
}

async function removeUser({ email }) {
    await models.user.destroy({ where: { email } });
}
