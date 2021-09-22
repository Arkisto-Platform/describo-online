import { BadRequestError } from "restify-errors";
import { getLogger } from "../common/logger";

const log = getLogger();

export function assembleOwncloudConfiguration({ params }) {
    return {
        url: params.url,
        folder: params.folder,
        access_token: params.access_token,
        refresh_token: params.refresh_token,
        user_id: params.user_id,
    };
}

export async function getOwncloudOauthToken({ service, code }) {
    let url = service.internalUrl ? service.internalUrl : service.url;
    url = `${url}${service.oauthTokenEndpoint}?grant_type=authorization_code`;
    url += `&code=${code}`;
    url += `&redirect_uri=${service.redirectUri}`;
    url += `&client_id=${service.clientId}`;
    url += `&client_secret=${service.clientSecret}`;
    let auth = Buffer.from(`${service.clientId}:${service.clientSecret}`).toString("base64");

    let config = await fetchToken({ url, auth });
    url = service.internalUrl ? service.internalUrl : service.url;
    config.url = `${url}${service.webdavEndpoint}`;
    return config;
}

export async function refreshOwncloudOauthToken({ service, refresh_token }) {
    let url = service.internalUrl ? service.internalUrl : config.url;
    url = `${url}${service.oauthTokenEndpoint}?grant_type=refresh_token`;
    url += `&refresh_token=${refresh_token}`;
    url += `&redirect_uri=${service.redirectUri}`;
    url += `&client_id=${service.clientId}`;
    url += `&client_secret=${service.clientSecret}`;
    let auth = Buffer.from(`${service.clientId}:${service.clientSecret}`).toString("base64");

    let config = await fetchToken({ url, auth });
    url = service.internalUrl ? service.internalUrl : service.url;
    config.url = `${url}${service.webdavEndpoint}`;
    return config;
}

export async function fetchToken({ url, auth }) {
    let response = await global.fetch(url, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${auth}`,
        },
    });

    if (response.status !== 200) {
        log.error(`refreshOwncloudOauthToken: ${await response.text()}`);
        throw new BadRequestError(`Unable to refresh token`);
    }
    let token = await response.json();
    let config = {
        url,
        ...token,
        date: new Date(),
        expires_at: new Date(new Date().getTime() + token.expires_in * 1000),
    };
    return config;
}
