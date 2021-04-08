import {promisify} from 'util';
import grpc from 'grpc';

const { GatewayAPIClient } = require('../../cs3/gateway/v1beta1/gateway_api_grpc_pb');
const gwMessages = require('../../cs3/gateway/v1beta1/gateway_api_pb');
const fsMessages = require('../../cs3/storage/provider/v1beta1/provider_api_pb');
const storageResources = require('../../cs3/storage/provider/v1beta1/resources_pb');

function promisifyAll(client) {
    const to = {};
    for (var k in client) {
        if (typeof client[k] != 'function') continue;
        to[k] = promisify(client[k].bind(client));
    }
    return to;
}

export function getGateway() {
    return new GatewayAPIClient('reva:19000', grpc.credentials.createInsecure(), {});
}

export async function authenticate (client, clientId, clientSecret, type = 'basic') {
    const {authenticate} = promisifyAll(client);
    const authRequest = new gwMessages.AuthenticateRequest();

    authRequest.setClientId(clientId);
    authRequest.setClientSecret(clientSecret);
    authRequest.setType(type);

    const auth = await authenticate(authRequest);

    return {
        token: auth.getToken(),
        code: auth.getStatus().getCode(),
        message: auth.getStatus().getMessage(),
        user: {
            username: auth.getUser().getUsername(),
            email: auth.getUser().getMail()
        }
    };
}

export async function whoAmI (client, authToken) {
    const { whoAmI } = promisifyAll(client);

    const msg1 = new gwMessages.WhoAmIRequest();
    msg1.setToken(authToken)
    const whoAmIResponse = await whoAmI(msg1);

    return {
        code: whoAmIResponse.getStatus().getCode(),
        username: whoAmIResponse.getUser().getUsername(),
        mail: whoAmIResponse.getUser().getMail()
    }
}

export async function listContainer (client, path, authToken) {
    const metadata = new grpc.Metadata();
    metadata.add('x-access-token', authToken);
    const { listContainer } = promisifyAll(client);

    const msg1 = new fsMessages.ListContainerRequest();
    const ref = new storageResources.Reference();
    ref.setPath(path);
    msg1.setRef(ref);

    const container =  await listContainer(msg1, metadata);
    return container.getInfosList();
}

