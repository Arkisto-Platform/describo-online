import { getSessionSID } from "./auth.service";
import Vue from "vue";

export default class HTTPService {
    constructor({ $auth }) {
        this.$auth = $auth ? $auth : Vue.prototype.$auth;
    }

    async getHeaders() {
        let accessToken = getSessionSID();
        let authorization;
        if (accessToken) {
            authorization = `sid ${accessToken}`;
        } else {
            accessToken = await this.$auth.getAccessToken();
            authorization = `okta ${accessToken}`;
        }
        return {
            authorization,
            "Content-Type": "application/json",
        };
    }

    async get({ route }) {
        let headers = await this.getHeaders();
        let response = await fetch(`/api${route}`, {
            method: "GET",
            headers,
        });
        return response;
    }

    async post({ route, body }) {
        let response = await fetch(`/api${route}`, {
            method: "POST",
            headers: await this.getHeaders(),
            body: JSON.stringify(body),
        });
        return response;
    }

    async put({ route, body }) {
        let response = await fetch(`/api${route}`, {
            method: "PUT",
            headers: await this.getHeaders(),
            body: JSON.stringify(body),
        });
        return response;
    }

    async delete({ route }) {
        let response = await fetch(`/api${route}`, {
            method: "delete",
            headers: await this.getHeaders(),
        });
        return response;
    }
}
