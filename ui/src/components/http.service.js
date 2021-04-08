import { getSessionSID } from "./auth.service";
import Vue from "vue";

export default class HTTPService {
    constructor({ $auth }) {
        this.$auth = $auth ? $auth : Vue.prototype.$auth;
    }

    async getHeaders() {
        let accessToken = getSessionSID();
        let authorization;
        switch (accessToken.type) {
            case 'okta':
                accessToken = await this.$auth.getAccessToken();
                authorization = `okta ${accessToken}`;
                break;
            case 'reva': authorization =  `reva ${accessToken.sid}`; break;
            case 'sid': authorization =`sid ${accessToken.sid}`; break;
        }
        //
        // if (accessToken.type === 'okta') {
        //     accessToken = await this.$auth.getAccessToken();
        //     authorization = `okta ${accessToken.sid}`;
        // } else if (accessToken.type === 'reva') {
        //     authorization =  `reva ${accessToken.sid}`;
        // } else {
        //     authorization =`sid ${accessToken.sid}`;
        // }

        console.log(authorization);
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
