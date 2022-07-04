import { SignJWT, jwtVerify } from "jose";
import { createSecretKey } from "crypto";
import { add, isAfter, parseISO } from "date-fns";

export async function generateToken({ configuration, user }) {
    const key = createSecretKey(Buffer.from(configuration.api.session.secret, "utf-8"));
    const expiry = add(new Date(), configuration.api.session.lifetime);
    const token = await new SignJWT({
        id: user.id,
        email: user.email,
        name: user.name,
        expiry,
    })
        .setProtectedHeader({ alg: "HS256" })
        .sign(key);

    return { token, expiry };
}

export async function verifyToken({ token, configuration }) {
    const key = createSecretKey(Buffer.from(configuration.api.session.secret, "utf-8"));
    let { payload } = await jwtVerify(token, key, {});

    if (isAfter(new Date(), parseISO(payload.expiry))) {
        // token expired
        throw new Error(`token expired`);
    }
    return payload;
}
