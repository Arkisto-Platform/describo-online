import HTTPService from "./http.service";
const sidProperty = "describoOnlineSID";
const revaProperty  = "revaSID";

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
    let sid, revaSID;

    revaSID = window.sessionStorage.getItem(revaProperty);
    if (revaSID !== null) {
        return {
            type: 'reva',
            sid: revaSID
        };
    }

    sid = Number(window.sessionStorage.getItem(sidProperty));
    if (!isNaN(sid) && sid > 0) {
        return {
            type: 'sid',
            sid: sid
        }
    }

    return {
        type: 'okta',
        sid: null
    }
}

export function removeSessionSID() {
    window.sessionStorage.removeItem(sidProperty);
}
