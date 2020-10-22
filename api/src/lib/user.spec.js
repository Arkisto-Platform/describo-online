import "regenerator-runtime";
import {
    getUser,
    createUser,
    getUserSession,
    createUserSession,
    destroyUserSession,
} from "./user";
import models from "../models";
import { isMatch } from "lodash";

describe("Test user management operations", () => {
    afterAll(async () => {
        await models.sequelize.close();
    });
    test("it should be able to create a user", async () => {
        const email = "test@test.com";
        const name = "test user";

        let user = await createUser({ email, name });
        let u = (await models.user.findOne({ where: { email } })).get();
        expect(isMatch(user, u)).toBeTrue;

        await models.user.destroy({ where: { email } });
    });
    test("it should be able to find an existing user", async () => {
        const email = "test2@test.com";
        const name = "test user 2";

        let user = await createUser({ email, name });
        let u = await getUser({ email });
        expect(isMatch(user, u)).toBeTrue;

        u = await getUser({ id: user.id });
        expect(isMatch(user, u)).toBeTrue;

        await models.user.destroy({ where: { email } });
    });
    test("it should be able to create a session for a user", async () => {
        const email = "test3@test.com";
        const name = "test user 3";
        const session = {
            a: "b",
        };

        let user = await createUser({ email, name });
        let s = await createUserSession({ email, data: session });
        expect(s.data).toEqual(session);

        await models.user.destroy({ where: { email } });
    });
    test("it should be able to destroy a session for a user", async () => {
        const email = "test4@test.com";
        const name = "test user 4";
        const session = {
            a: "b",
        };

        let user = await createUser({ email, name });
        let s = await createUserSession({ email, data: session });
        expect(s.data).toEqual(session);

        await destroyUserSession({ email });

        await models.user.destroy({ where: { email } });
    });
    test("it should find an existing user session", async () => {
        const email = "test5@test.com";
        const name = "test user 5";
        const session = {
            a: "b",
        };

        let user = await createUser({ email, name });
        let s = await createUserSession({ email, data: session });
        expect(s.data).toEqual(session);

        s = await getUserSession({ email });
        expect(s.session.data).toEqual(session);

        await models.user.destroy({ where: { email } });
    });
    test("it should not find a session for a user", async () => {
        const email = "test6@test.com";
        const name = "test user 6";
        const session = {
            a: "b",
        };

        let user = await createUser({ email, name });
        let s = await getUserSession({ email });
        expect(s.session.data).toEqual(null);

        await models.user.destroy({ where: { email } });
    });
});
