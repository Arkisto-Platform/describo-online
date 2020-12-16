import HTTPService from "./http.service";
const sidProperty = "describoOnlineSID";

export default class AuthService {
    constructor({ $auth }) {
        this.$auth = $auth;
    }

    async isAuthenticated() {
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

    logout() {
        window.localStorage.removeItem("vuex");
        removeSessionSID();
        this.$auth.logout();
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
