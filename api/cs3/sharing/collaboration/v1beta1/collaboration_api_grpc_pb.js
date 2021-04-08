// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2018-2019 CERN
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// 
// In applying this license, CERN does not waive the privileges and immunities
// granted to it by virtue of its status as an Intergovernmental Organization
// or submit itself to any jurisdiction.
//
'use strict';
var grpc = require('grpc');
var cs3_sharing_collaboration_v1beta1_collaboration_api_pb = require('../../../../cs3/sharing/collaboration/v1beta1/collaboration_api_pb.js');
var cs3_identity_user_v1beta1_resources_pb = require('../../../../cs3/identity/user/v1beta1/resources_pb.js');
var cs3_rpc_v1beta1_status_pb = require('../../../../cs3/rpc/v1beta1/status_pb.js');
var cs3_sharing_collaboration_v1beta1_resources_pb = require('../../../../cs3/sharing/collaboration/v1beta1/resources_pb.js');
var cs3_storage_provider_v1beta1_resources_pb = require('../../../../cs3/storage/provider/v1beta1/resources_pb.js');
var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js');

function serialize_cs3_sharing_collaboration_v1beta1_CreateShareRequest(arg) {
  if (!(arg instanceof cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareRequest)) {
    throw new Error('Expected argument of type cs3.sharing.collaboration.v1beta1.CreateShareRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_collaboration_v1beta1_CreateShareRequest(buffer_arg) {
  return cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_collaboration_v1beta1_CreateShareResponse(arg) {
  if (!(arg instanceof cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareResponse)) {
    throw new Error('Expected argument of type cs3.sharing.collaboration.v1beta1.CreateShareResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_collaboration_v1beta1_CreateShareResponse(buffer_arg) {
  return cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_collaboration_v1beta1_GetReceivedShareRequest(arg) {
  if (!(arg instanceof cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareRequest)) {
    throw new Error('Expected argument of type cs3.sharing.collaboration.v1beta1.GetReceivedShareRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_collaboration_v1beta1_GetReceivedShareRequest(buffer_arg) {
  return cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_collaboration_v1beta1_GetReceivedShareResponse(arg) {
  if (!(arg instanceof cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareResponse)) {
    throw new Error('Expected argument of type cs3.sharing.collaboration.v1beta1.GetReceivedShareResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_collaboration_v1beta1_GetReceivedShareResponse(buffer_arg) {
  return cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_collaboration_v1beta1_GetShareRequest(arg) {
  if (!(arg instanceof cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareRequest)) {
    throw new Error('Expected argument of type cs3.sharing.collaboration.v1beta1.GetShareRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_collaboration_v1beta1_GetShareRequest(buffer_arg) {
  return cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_collaboration_v1beta1_GetShareResponse(arg) {
  if (!(arg instanceof cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareResponse)) {
    throw new Error('Expected argument of type cs3.sharing.collaboration.v1beta1.GetShareResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_collaboration_v1beta1_GetShareResponse(buffer_arg) {
  return cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_collaboration_v1beta1_ListReceivedSharesRequest(arg) {
  if (!(arg instanceof cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesRequest)) {
    throw new Error('Expected argument of type cs3.sharing.collaboration.v1beta1.ListReceivedSharesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_collaboration_v1beta1_ListReceivedSharesRequest(buffer_arg) {
  return cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_collaboration_v1beta1_ListReceivedSharesResponse(arg) {
  if (!(arg instanceof cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesResponse)) {
    throw new Error('Expected argument of type cs3.sharing.collaboration.v1beta1.ListReceivedSharesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_collaboration_v1beta1_ListReceivedSharesResponse(buffer_arg) {
  return cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_collaboration_v1beta1_ListSharesRequest(arg) {
  if (!(arg instanceof cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesRequest)) {
    throw new Error('Expected argument of type cs3.sharing.collaboration.v1beta1.ListSharesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_collaboration_v1beta1_ListSharesRequest(buffer_arg) {
  return cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_collaboration_v1beta1_ListSharesResponse(arg) {
  if (!(arg instanceof cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesResponse)) {
    throw new Error('Expected argument of type cs3.sharing.collaboration.v1beta1.ListSharesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_collaboration_v1beta1_ListSharesResponse(buffer_arg) {
  return cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_collaboration_v1beta1_RemoveShareRequest(arg) {
  if (!(arg instanceof cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareRequest)) {
    throw new Error('Expected argument of type cs3.sharing.collaboration.v1beta1.RemoveShareRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_collaboration_v1beta1_RemoveShareRequest(buffer_arg) {
  return cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_collaboration_v1beta1_RemoveShareResponse(arg) {
  if (!(arg instanceof cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareResponse)) {
    throw new Error('Expected argument of type cs3.sharing.collaboration.v1beta1.RemoveShareResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_collaboration_v1beta1_RemoveShareResponse(buffer_arg) {
  return cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_collaboration_v1beta1_UpdateReceivedShareRequest(arg) {
  if (!(arg instanceof cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareRequest)) {
    throw new Error('Expected argument of type cs3.sharing.collaboration.v1beta1.UpdateReceivedShareRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_collaboration_v1beta1_UpdateReceivedShareRequest(buffer_arg) {
  return cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_collaboration_v1beta1_UpdateReceivedShareResponse(arg) {
  if (!(arg instanceof cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareResponse)) {
    throw new Error('Expected argument of type cs3.sharing.collaboration.v1beta1.UpdateReceivedShareResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_collaboration_v1beta1_UpdateReceivedShareResponse(buffer_arg) {
  return cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_collaboration_v1beta1_UpdateShareRequest(arg) {
  if (!(arg instanceof cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareRequest)) {
    throw new Error('Expected argument of type cs3.sharing.collaboration.v1beta1.UpdateShareRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_collaboration_v1beta1_UpdateShareRequest(buffer_arg) {
  return cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_collaboration_v1beta1_UpdateShareResponse(arg) {
  if (!(arg instanceof cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareResponse)) {
    throw new Error('Expected argument of type cs3.sharing.collaboration.v1beta1.UpdateShareResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_collaboration_v1beta1_UpdateShareResponse(buffer_arg) {
  return cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// User Share Provider API
// 
// The User Share Provider API is meant to manipulate share
// resources for a specific share type (user, group, ocm, ...)
// from the perspective of the creator or the share and
// from the perspective of the receiver of the share.
// 
// The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL
// NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED",  "MAY", and
// "OPTIONAL" in this document are to be interpreted as described in
// RFC 2119.
// 
// The following are global requirements that apply to all methods:
// Any method MUST return CODE_OK on a succesful operation.
// Any method MAY return NOT_IMPLEMENTED.
// Any method MAY return INTERNAL.
// Any method MAY return UNKNOWN.
// Any method MAY return UNAUTHENTICATED.
var CollaborationAPIService = exports.CollaborationAPIService = {
  // Creates a new share.
// MUST return CODE_NOT_FOUND if the resource reference does not exist.
// MUST return CODE_ALREADY_EXISTS if the share already exists for the 4-tuple consisting of
// (owner, shared_resource, grantee).
// New shares MUST be created in the state SHARE_STATE_PENDING.
createShare: {
    path: '/cs3.sharing.collaboration.v1beta1.CollaborationAPI/CreateShare',
    requestStream: false,
    responseStream: false,
    requestType: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareRequest,
    responseType: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareResponse,
    requestSerialize: serialize_cs3_sharing_collaboration_v1beta1_CreateShareRequest,
    requestDeserialize: deserialize_cs3_sharing_collaboration_v1beta1_CreateShareRequest,
    responseSerialize: serialize_cs3_sharing_collaboration_v1beta1_CreateShareResponse,
    responseDeserialize: deserialize_cs3_sharing_collaboration_v1beta1_CreateShareResponse,
  },
  // Removes a share.
// MUST return CODE_NOT_FOUND if the share reference does not exist.
removeShare: {
    path: '/cs3.sharing.collaboration.v1beta1.CollaborationAPI/RemoveShare',
    requestStream: false,
    responseStream: false,
    requestType: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareRequest,
    responseType: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareResponse,
    requestSerialize: serialize_cs3_sharing_collaboration_v1beta1_RemoveShareRequest,
    requestDeserialize: deserialize_cs3_sharing_collaboration_v1beta1_RemoveShareRequest,
    responseSerialize: serialize_cs3_sharing_collaboration_v1beta1_RemoveShareResponse,
    responseDeserialize: deserialize_cs3_sharing_collaboration_v1beta1_RemoveShareResponse,
  },
  // Gets share information for a single share.
// MUST return CODE_NOT_FOUND if the share reference does not exist.
getShare: {
    path: '/cs3.sharing.collaboration.v1beta1.CollaborationAPI/GetShare',
    requestStream: false,
    responseStream: false,
    requestType: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareRequest,
    responseType: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareResponse,
    requestSerialize: serialize_cs3_sharing_collaboration_v1beta1_GetShareRequest,
    requestDeserialize: deserialize_cs3_sharing_collaboration_v1beta1_GetShareRequest,
    responseSerialize: serialize_cs3_sharing_collaboration_v1beta1_GetShareResponse,
    responseDeserialize: deserialize_cs3_sharing_collaboration_v1beta1_GetShareResponse,
  },
  // List the shares the authenticated principal has created,
// both as owner and creator. If a filter is specified, only
// shares satisfying the filter MUST be returned.
listShares: {
    path: '/cs3.sharing.collaboration.v1beta1.CollaborationAPI/ListShares',
    requestStream: false,
    responseStream: false,
    requestType: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesRequest,
    responseType: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesResponse,
    requestSerialize: serialize_cs3_sharing_collaboration_v1beta1_ListSharesRequest,
    requestDeserialize: deserialize_cs3_sharing_collaboration_v1beta1_ListSharesRequest,
    responseSerialize: serialize_cs3_sharing_collaboration_v1beta1_ListSharesResponse,
    responseDeserialize: deserialize_cs3_sharing_collaboration_v1beta1_ListSharesResponse,
  },
  // Updates a share.
// MUST return CODE_NOT_FOUND if the share reference does not exist.
updateShare: {
    path: '/cs3.sharing.collaboration.v1beta1.CollaborationAPI/UpdateShare',
    requestStream: false,
    responseStream: false,
    requestType: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareRequest,
    responseType: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareResponse,
    requestSerialize: serialize_cs3_sharing_collaboration_v1beta1_UpdateShareRequest,
    requestDeserialize: deserialize_cs3_sharing_collaboration_v1beta1_UpdateShareRequest,
    responseSerialize: serialize_cs3_sharing_collaboration_v1beta1_UpdateShareResponse,
    responseDeserialize: deserialize_cs3_sharing_collaboration_v1beta1_UpdateShareResponse,
  },
  // List all shares the authenticated principal has received.
listReceivedShares: {
    path: '/cs3.sharing.collaboration.v1beta1.CollaborationAPI/ListReceivedShares',
    requestStream: false,
    responseStream: false,
    requestType: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesRequest,
    responseType: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesResponse,
    requestSerialize: serialize_cs3_sharing_collaboration_v1beta1_ListReceivedSharesRequest,
    requestDeserialize: deserialize_cs3_sharing_collaboration_v1beta1_ListReceivedSharesRequest,
    responseSerialize: serialize_cs3_sharing_collaboration_v1beta1_ListReceivedSharesResponse,
    responseDeserialize: deserialize_cs3_sharing_collaboration_v1beta1_ListReceivedSharesResponse,
  },
  // Update the received share to change the share state or the display name.
// MUST return CODE_NOT_FOUND if the share reference does not exist.
updateReceivedShare: {
    path: '/cs3.sharing.collaboration.v1beta1.CollaborationAPI/UpdateReceivedShare',
    requestStream: false,
    responseStream: false,
    requestType: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareRequest,
    responseType: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareResponse,
    requestSerialize: serialize_cs3_sharing_collaboration_v1beta1_UpdateReceivedShareRequest,
    requestDeserialize: deserialize_cs3_sharing_collaboration_v1beta1_UpdateReceivedShareRequest,
    responseSerialize: serialize_cs3_sharing_collaboration_v1beta1_UpdateReceivedShareResponse,
    responseDeserialize: deserialize_cs3_sharing_collaboration_v1beta1_UpdateReceivedShareResponse,
  },
  // Get the information for the given received share reference.
// MUST return CODE_NOT_FOUND if the received share reference does not exist.
getReceivedShare: {
    path: '/cs3.sharing.collaboration.v1beta1.CollaborationAPI/GetReceivedShare',
    requestStream: false,
    responseStream: false,
    requestType: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareRequest,
    responseType: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareResponse,
    requestSerialize: serialize_cs3_sharing_collaboration_v1beta1_GetReceivedShareRequest,
    requestDeserialize: deserialize_cs3_sharing_collaboration_v1beta1_GetReceivedShareRequest,
    responseSerialize: serialize_cs3_sharing_collaboration_v1beta1_GetReceivedShareResponse,
    responseDeserialize: deserialize_cs3_sharing_collaboration_v1beta1_GetReceivedShareResponse,
  },
};

exports.CollaborationAPIClient = grpc.makeGenericClientConstructor(CollaborationAPIService);
