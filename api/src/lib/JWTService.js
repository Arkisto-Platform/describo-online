import jwt from 'jsonwebtoken';
import { getGateway, whoAmI } from './RevaConnector';
import {loadConfiguration} from "../common";

export async function createToken (token, path = '/home') {
    let config = (await loadConfiguration());
    return jwt.sign(
        {
            token: token,
            path: path
        },
        config.api.applications[0].secret
    );
}

export async function verifyToken (authToken) {
    let config = (await loadConfiguration());

    try {
        const {token} = jwt.verify(authToken, config.api.applications[0].secret);
        const {code} = await whoAmI(getGateway(), token.toString());
        return {
            revaToken: token,
            code: code
        }
    } catch (e) {
        return {
            revaToken: null,
            code: 0
        }
    }
}
