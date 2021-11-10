const sidProperty = "describoOnlineSID";
const tokenProperty = "describoOnlineAuthToken";

export async function isAuthenticated() {
    try {
        const httpService = new HTTPService({});
        let response = await httpService.get({ route: "/authenticated" });
        if (response.status === 200) {
            return true;
        }
        return false;
    } catch (error) {
        console.log("isAuthenticated failure", error);
        return false;
    }
}

export function setSessionSID({ sid }) {
    window.sessionStorage.setItem(sidProperty, sid);
}

export function getSessionSID() {
    let value;
    try {
        value = window.sessionStorage.getItem(sidProperty);
    } catch (error) {
        return null;
    }
    const v = Number(value);
    return !isNaN(v)
        ? v
        : value === "undefined"
        ? undefined
        : value === "null"
        ? null
        : value === "true"
        ? true
        : value === "false"
        ? false
        : value;
}

export function removeSessionSID() {
    window.sessionStorage.removeItem(sidProperty);
}

export function setToken({ token }) {
    window.sessionStorage.setItem(tokenProperty, token);
}

export function getToken() {
    try {
        return window.sessionStorage.getItem(tokenProperty);
    } catch (error) {
        return null;
    }
}

export function removeToken() {
    window.sessionStorage.removeItem(tokenProperty);
}

export default class HTTPService {
    constructor({}) {}

    async getHeaders() {
        let authorization = "";
        let sid = getSessionSID();
        if (sid) {
            authorization = `sid ${sid}`;
        } else {
            authorization = `Bearer ${getToken()}`;
        }
        return {
            authorization,
            "Content-Type": "application/json",
        };
    }

    async get({ route, headers = null }) {
        if (!headers) headers = await this.getHeaders();
        let response = await fetch(`/api${route}`, {
            method: "GET",
            headers,
        });
        return response;
    }

    async post({ route, body, headers = null }) {
        if (!headers) headers = await this.getHeaders();
        let response = await fetch(`/api${route}`, {
            method: "POST",
            headers,
            body: JSON.stringify(body),
        });
        return response;
    }

    async put({ route, body, headers = null }) {
        if (!headers) headers = await this.getHeaders();
        let response = await fetch(`/api${route}`, {
            method: "PUT",
            headers,
            body: JSON.stringify(body),
        });
        return response;
    }

    async delete({ route, headers = null }) {
        if (!headers) headers = await this.getHeaders();
        let response = await fetch(`/api${route}`, {
            method: "delete",
            headers,
        });
        return response;
    }
}
