import models from "../models/index.js";
import { refreshOwncloudOauthToken } from "../lib/backend-owncloud.js";
import { loadConfiguration, getLogger } from "../common/index.js";
const log = getLogger();

// 10 minutes left on token lifetime
const tokenMinTime = 10 * 60;

// oauth services
const oauthServices = ["owncloud"];

export async function refreshOauthTokens() {
    let offset = 0;
    let limit = 10;

    let result = await models.session.findAndCountAll({ limit, offset });
    await processSessions({ sessions: result.rows });
    while (limit + offset < result.total) {
        offset += limit;
        result = await models.session.findAndCountAll({ limit, offset });
        await processSessions({ sessions: result.rows });
    }
}

async function processSessions({ sessions }) {
    const configuration = await loadConfiguration();
    for (let session of sessions) {
        for (let serviceName of oauthServices) {
            const data = session.data?.service?.[serviceName];

            if (!data || !data.refresh_token) continue;

            let timeNow = new Date().getTime();
            let tokenValidTo = new Date(data.expires_at).getTime();
            let timeLeft = (tokenValidTo - timeNow) / 1000;
            let config, service;
            if (timeNow < 0) {
                // token is waaaay old - remove the config from the session
                delete session.data.service[serviceName];
                await session.update({ data: session.data });
            } else if (timeLeft < tokenMinTime) {
                log.debug(`Refreshing owncloud token for user`);
                service = configuration.api.services[serviceName].filter((s) => {
                    return data.url.match(s.url) || data.url.match(s.internalUrl);
                })[0];
                switch (serviceName) {
                    case "owncloud":
                        config = await refreshOwncloudOauthToken({
                            service,
                            refresh_token: data.refresh_token,
                        });
                        break;
                }
                data = {
                    ...session.data,
                    ...{
                        service: {
                            [serviceName]: config,
                        },
                    },
                };
                session = await session.update({ data });
            }
        }
    }
}
