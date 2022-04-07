import "regenerator-runtime";
import fetch from "node-fetch";
import { removeCollection, insertCollection } from "../lib/collections";
import { Crate } from "../lib/crate";
import { createSessionForTest } from "../common";
import { updateUserSession } from "../lib/user";
import { ensureDir, remove, readJSON, readdir } from "fs-extra";
import models from "../models";
import Chance from "chance";
const chance = new Chance();
import path from "path";

const profile = {
    name: "schema.org",
    version: "latest",
    description: "All of schema.org",
    file: "schema.org",
};
const api = "http://localhost:8080";
describe("Test entity and property route operations", () => {
    let sessionId, user;
    beforeEach(async () => {
        ({ user, sessionId } = await createSessionForTest());
    });
    afterAll(async () => {
        // await models.sequelize.close();
    });
    test("it should get the root dataset and all of its properties", async () => {
        let collection = await loadData({ name: chance.sentence() });
        await updateUserSession({
            sessionId,
            data: { current: { collectionId: collection.id }, profile },
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
        expect(entity.eid);

        await removeCollection({ id: collection.id });
        await removeUser({ email: user.email });
    });
    test("it should get the entity with the given UUID", async () => {
        let collection = await loadData({ name: chance.sentence() });
        await updateUserSession({
            sessionId,
            data: { current: { collectionId: collection.id }, profile },
        });

        let response = await fetch(`${api}/entity/RootDataset/properties`, {
            method: "GET",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
            },
        });
        let entity;
        let { properties } = await response.json();

        const target = properties.filter((p) => p.tgtEntityId).pop().tgtEntityId;
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
    test("it should be able to find an entity by id", async () => {
        let collection = await loadData({ name: chance.sentence() });
        await updateUserSession({
            sessionId,
            data: { current: { collectionId: collection.id }, profile },
        });

        // lookup an id
        let response = await fetch(`${api}/entity/lookup`, {
            method: "POST",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                etype: "Person",
                eid: "person",
            }),
        });
        let { entities } = await response.json();
        expect(entities.length).toBe(1);

        // lookup a type
        response = await fetch(`${api}/entity/lookup`, {
            method: "POST",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ etype: "Dataset" }),
        });
        ({ entities } = await response.json());
        expect(entities.length).toBe(1);

        // lookup all in collectionId
        response = await fetch(`${api}/entity/lookup`, {
            method: "POST",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
            },
        });
        ({ entities } = await response.json());
        expect(entities.length).toBe(2);

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
        expect(response.status).toBe(403);
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
            data: { current: { collectionId: collection.id }, profile },
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
                "X-Testing": true,
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
            data: { current: { collectionId: collection.id }, profile },
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
                "X-Testing": true,
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
                "X-Testing": true,
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
            data: { current: { collectionId: collection.id }, profile },
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
                "X-Testing": true,
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
                "X-Testing": true,
            },
        });
        expect(response.status).toBe(200);
        entity = await models.entity.findOne({ where: { id: entity.id } });
        expect(entity).toBeNull;
        await removeCollection({ id: collection.id });
        await removeUser({ email: user.email });
    });
    test("it should be able to add a simple property with a value", async () => {
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

        let property = {
            property: "collaborator",
            value: chance.name(),
        };
        response = await fetch(`${api}/entity/${entity.id}/property`, {
            method: "POST",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
                "X-Testing": true,
            },
            body: JSON.stringify(property),
        });
        expect(response.status).toBe(200);
        ({ property } = await response.json());

        response = await fetch(`${api}/entity/RootDataset/properties`, {
            method: "GET",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
            },
        });
        let { properties } = await response.json();
        let p = properties.filter((p) => p.name === property.name);
        expect(p.length).toBe(1);
        expect(p[0].value).toBe(property.value);

        await removeCollection({ id: collection.id });
        await removeProperty({ id: property.id });
        await removeUser({ email: user.email });
    });
    test("it should be able to update a simple property with a value", async () => {
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
        let property = {
            property: "collaborator",
            value: chance.name(),
        };
        response = await fetch(`${api}/entity/${entity.id}/property`, {
            method: "POST",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
                "X-Testing": true,
            },
            body: JSON.stringify(property),
        });
        expect(response.status).toBe(200);
        ({ property } = await response.json());
        let update = {
            value: chance.name(),
        };
        response = await fetch(`${api}/entity/${entity.id}/property/${property.id}`, {
            method: "PUT",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
                "X-Testing": true,
            },
            body: JSON.stringify(update),
        });
        expect(response.status).toBe(200);
        ({ property } = await response.json());
        response = await fetch(`${api}/entity/RootDataset/properties`, {
            method: "GET",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
            },
        });
        let { properties } = await response.json();
        let p = properties.filter((p) => p.name === property.name);
        expect(p.length).toBe(1);
        expect(p[0].value).toBe(property.value);
        await removeCollection({ id: collection.id });
        await removeProperty({ id: property.id });
        await removeUser({ email: user.email });
    });
    test("it should be able to remove a property", async () => {
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
        let property = {
            property: "collaborator",
            value: chance.name(),
        };
        response = await fetch(`${api}/entity/${entity.id}/property`, {
            method: "POST",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
                "X-Testing": true,
            },
            body: JSON.stringify(property),
        });
        expect(response.status).toBe(200);
        ({ property } = await response.json());

        response = await fetch(`${api}/entity/${entity.id}/property/${property.id}`, {
            method: "DELETE",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
                "X-Testing": true,
            },
        });
        expect(response.status).toBe(200);

        response = await fetch(`${api}/entity/RootDataset/properties`, {
            method: "GET",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
            },
        });
        let { properties } = await response.json();
        let p = properties.filter((p) => p.name === property.name);
        expect(p.length).toBe(0);

        await removeCollection({ id: collection.id });
        await removeProperty({ id: property.id });
        await removeUser({ email: user.email });
    });
    test("it should associate two entities", async () => {
        let collection = await loadData({ name: chance.sentence() });
        await updateUserSession({
            sessionId,
            data: { current: { collectionId: collection.id } },
        });
        let entity = await fetch(`${api}/entity/RootDataset`, {
            method: "GET",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
            },
        });
        ({ entity } = await entity.json());

        let entityB = await fetch(`${api}/entity/lookup`, {
            method: "POST",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
                "X-Testing": true,
            },
            body: JSON.stringify({ eid: "person1" }),
        });
        let { entities } = await entityB.json();
        entityB = entities.pop();

        let association = {
            property: "collaborator",
            tgtEntityId: entityB.id,
        };
        let response = await fetch(`${api}/entity/${entity.id}/associate`, {
            method: "PUT",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
                "X-Testing": true,
            },
            body: JSON.stringify(association),
        });
        expect(response.status).toBe(200);

        entity = await fetch(`${api}/entity/${entity.id}/properties`, {
            method: "GET",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
            },
        });
        let { properties } = await entity.json();
        let p = properties.filter((p) => p.name === "collaborator");
        expect(p.length).toBe(1);

        await removeCollection({ id: collection.id });
        await removeUser({ email: user.email });
    });
});

describe("Test adding entities to the graph from external service", () => {
    let sessionId, user;
    let testFolder = "/tmp/test-crate";
    beforeAll(async () => {
        await ensureDir(testFolder);
    });
    beforeEach(async () => {
        ({ user, sessionId } = await createSessionForTest());
    });
    afterEach(async () => {
        await models.session.destroy({ where: { id: sessionId } });
    });
    afterAll(async () => {
        await models.sequelize.close();
        await remove(testFolder);
    });
    test("it should fail to add entities - no valid session found", async () => {
        await models.session.destroy({ where: { id: sessionId } });
        let response = await fetch(`${api}/session/entities`, {
            method: "POST",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(),
        });
        expect(response.status).toEqual(401);
    });
    test("it should fail to add entities - no collection loaded", async () => {
        let session = await models.session.findOne({ where: { id: sessionId } });
        session = await session.update({
            data: {
                service: {
                    local: { provider: "local", folder: testFolder },
                },
            },
        });
        let response = await fetch(`${api}/session/entities`, {
            method: "POST",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(),
        });
        expect(response.status).toEqual(400);
        let { message } = await response.json();
        expect(message).toEqual("No current collection loaded for calling session");
    });
    test("it should fail to add entities - no profile loaded", async () => {
        let session = await models.session.findOne({ where: { id: sessionId } });
        session = await session.update({
            data: {
                service: {
                    local: { provider: "local", folder: testFolder },
                },
            },
        });
        // load the crate - which happens to be empty
        let response = await fetch(`${api}/load`, {
            method: "POST",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ resource: "local", folder: testFolder }),
        });
        expect(response.status).toEqual(200);
        let { collection } = await response.json();

        response = await fetch(`${api}/session/entities`, {
            method: "POST",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(),
        });
        expect(response.status).toEqual(400);
        let { message } = await response.json();
        expect(message).toEqual("No profile defined for calling session");

        await models.collection.destroy({ where: { id: collection.id } });
    });
    test("it should be able to load a collection for use in this session", async () => {
        let { collection } = await setupCollectionForTestingExternalUpdates({
            sessionId,
            testFolder,
        });

        // submit data to the graph
        let response = await fetch(`${api}/session/entities`, {
            method: "POST",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify([
                {
                    "@id": "http://schema.org/Person",
                    "@type": "Person",
                    name: "a person",
                },
            ]),
        });
        expect(response.status).toEqual(200);
        await new Promise((resolve) => setTimeout(resolve, 500));

        let crateFile = await readJSON(path.join(testFolder, "ro-crate-metadata.json"));
        let entity = crateFile["@graph"].filter((e) => e["@id"] === "http://schema.org/Person");
        expect(entity.length).toEqual(1);

        await models.collection.destroy({ where: { id: collection.id } });
    });
    test("update collection - test 1", async () => {
        let { collection } = await setupCollectionForTestingExternalUpdates({
            sessionId,
            testFolder,
        });

        // submit data to the graph
        let response = await fetch(`${api}/session/entities`, {
            method: "POST",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify([
                {
                    "@id": "http://schema.org/Person",
                    "@type": "Person",
                    name: "a person",
                },
            ]),
        });
        expect(response.status).toEqual(200);
        await new Promise((resolve) => setTimeout(resolve, 500));

        let crateFile = await readJSON(path.join(testFolder, "ro-crate-metadata.json"));
        // console.log(crateFile);
        let entity = crateFile["@graph"].filter((e) => e["@id"] === "http://schema.org/Person");
        expect(entity.length).toEqual(1);

        // attach person to root dataset as author
        //  and to 'something' in addition to a text value
        response = await fetch(`${api}/session/entities`, {
            method: "POST",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify([
                {
                    "@id": "./",
                    "@type": "Dataset",
                    author: { "@id": "http://schema.org/Person" },
                    something: ["now", { "@id": "http://schema.org/Person" }],
                },
            ]),
        });
        await new Promise((resolve) => setTimeout(resolve, 500));

        crateFile = await readJSON(path.join(testFolder, "ro-crate-metadata.json"));
        // console.log(JSON.stringify(crateFile, null, 2));
        entity = crateFile["@graph"].filter((e) => e["@id"] === "./");
        expect(entity.length).toEqual(1);
        expect(entity[0].author.length).toEqual(1);
        expect(entity[0].something.length).toEqual(2);

        await models.collection.destroy({ where: { id: collection.id } });
    });
    test("update collection - test 2", async () => {
        let { collection } = await setupCollectionForTestingExternalUpdates({
            sessionId,
            testFolder,
        });

        // submit data to the graph
        let response = await fetch(`${api}/session/entities`, {
            method: "POST",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify([
                {
                    "@id": "http://schema.org/Person",
                    "@type": "Person",
                    name: "a person",
                },
                {
                    "@id": "http://schema.org/Person",
                    "@type": "Url",
                    name: "a person",
                },
            ]),
        });
        expect(response.status).toEqual(200);
        await new Promise((resolve) => setTimeout(resolve, 500));
        let { insertions } = await response.json();
        expect(insertions.good.length).toEqual(1);
        expect(insertions.bad.length).toEqual(1);

        let crateFile = await readJSON(path.join(testFolder, "ro-crate-metadata.json"));
        // console.log(crateFile);
        let entity = crateFile["@graph"].filter((e) => e["@id"] === "http://schema.org/Person");
        expect(entity.length).toEqual(1);

        await models.collection.destroy({ where: { id: collection.id } });
    });
    test("update collection - test 3", async () => {
        let { collection } = await setupCollectionForTestingExternalUpdates({
            sessionId,
            testFolder,
        });

        // submit data to the graph
        let response = await fetch(`${api}/session/entities`, {
            method: "POST",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify([
                {
                    "@id": "http://schema.org/Person",
                    "@type": "Person",
                    name: "a person",
                },
            ]),
        });
        expect(response.status).toEqual(200);
        await new Promise((resolve) => setTimeout(resolve, 500));

        let crateFile = await readJSON(path.join(testFolder, "ro-crate-metadata.json"));
        // console.log(crateFile);
        let entity = crateFile["@graph"].filter((e) => e["@id"] === "http://schema.org/Person");
        expect(entity.length).toEqual(1);

        // attach person to root dataset as author
        //  and to 'something' in addition to a text value
        response = await fetch(`${api}/session/entities`, {
            method: "POST",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify([
                {
                    "@id": "./",
                    "@type": "Dataset",
                    author: { "@id": "http://schema.org/Person" },
                    something: ["now", { "@id": "http://schema.org/Person" }],
                },
            ]),
        });
        await new Promise((resolve) => setTimeout(resolve, 500));

        // attach an org to the person and dataset entities
        response = await fetch(`${api}/session/entities`, {
            method: "POST",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify([
                {
                    "@id": "http://organization.com",
                    "@type": "Organization",
                    name: "an organization",
                },
                {
                    "@id": "./",
                    "@type": "Dataset",
                    participant: { "@id": "http://organization.com" },
                },
                {
                    "@id": "http://schema.org/Person",
                    "@type": "Person",
                    organization: { "@id": "http://organization.com" },
                },
            ]),
        });
        await new Promise((resolve) => setTimeout(resolve, 500));

        crateFile = await readJSON(path.join(testFolder, "ro-crate-metadata.json"));
        // console.log(JSON.stringify(crateFile, null, 2));

        entity = crateFile["@graph"].filter((e) => e["@id"] === "./");
        expect(entity.length).toEqual(1);
        expect(entity[0].participant).toEqual([{ "@id": "http://organization.com" }]);

        entity = crateFile["@graph"].filter((e) => e["@id"] === "http://schema.org/Person");
        expect(entity.length).toEqual(1);
        expect(entity[0].organization).toEqual([{ "@id": "http://organization.com" }]);

        entity = crateFile["@graph"].filter((e) => e["@id"] === "http://organization.com");
        expect(entity.length).toEqual(1);
        expect(entity[0]["@reverse"]).toEqual({
            participant: [
                {
                    "@id": "./",
                },
            ],
            organization: [
                {
                    "@id": "http://schema.org/Person",
                },
            ],
        });

        await models.collection.destroy({ where: { id: collection.id } });
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
    let crateManager = new Crate({ profile });
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
async function removeProperty({ id }) {
    await models.property.destroy({ where: { id } });
}
async function setupCollectionForTestingExternalUpdates({ sessionId, testFolder }) {
    let session = await models.session.findOne({ where: { id: sessionId } });

    // set up a local session for testing
    session = await session.update({
        data: {
            service: {
                local: { provider: "local", folder: testFolder },
            },
            profile: {
                file: "schema.org",
            },
        },
    });

    // load the crate - which happens to be empty
    let response = await fetch(`${api}/load`, {
        method: "POST",
        headers: {
            Authorization: `sid ${sessionId}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ resource: "local", folder: testFolder }),
    });
    expect(response.status).toEqual(200);
    let { collection } = await response.json();

    // pause
    await new Promise((resolve) => setTimeout(resolve, 500));

    return { collection };
}
