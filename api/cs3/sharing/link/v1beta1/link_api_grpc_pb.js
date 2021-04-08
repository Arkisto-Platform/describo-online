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
var cs3_sharing_link_v1beta1_link_api_pb = require('../../../../cs3/sharing/link/v1beta1/link_api_pb.js');
var cs3_identity_user_v1beta1_resources_pb = require('../../../../cs3/identity/user/v1beta1/resources_pb.js');
var cs3_rpc_v1beta1_status_pb = require('../../../../cs3/rpc/v1beta1/status_pb.js');
var cs3_sharing_link_v1beta1_resources_pb = require('../../../../cs3/sharing/link/v1beta1/resources_pb.js');
var cs3_storage_provider_v1beta1_resources_pb = require('../../../../cs3/storage/provider/v1beta1/resources_pb.js');
var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js');

function serialize_cs3_sharing_link_v1beta1_CreatePublicShareRequest(arg) {
  if (!(arg instanceof cs3_sharing_link_v1beta1_link_api_pb.CreatePublicShareRequest)) {
    throw new Error('Expected argument of type cs3.sharing.link.v1beta1.CreatePublicShareRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_link_v1beta1_CreatePublicShareRequest(buffer_arg) {
  return cs3_sharing_link_v1beta1_link_api_pb.CreatePublicShareRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_link_v1beta1_CreatePublicShareResponse(arg) {
  if (!(arg instanceof cs3_sharing_link_v1beta1_link_api_pb.CreatePublicShareResponse)) {
    throw new Error('Expected argument of type cs3.sharing.link.v1beta1.CreatePublicShareResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_link_v1beta1_CreatePublicShareResponse(buffer_arg) {
  return cs3_sharing_link_v1beta1_link_api_pb.CreatePublicShareResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_link_v1beta1_GetPublicShareByTokenRequest(arg) {
  if (!(arg instanceof cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareByTokenRequest)) {
    throw new Error('Expected argument of type cs3.sharing.link.v1beta1.GetPublicShareByTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_link_v1beta1_GetPublicShareByTokenRequest(buffer_arg) {
  return cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareByTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_link_v1beta1_GetPublicShareByTokenResponse(arg) {
  if (!(arg instanceof cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareByTokenResponse)) {
    throw new Error('Expected argument of type cs3.sharing.link.v1beta1.GetPublicShareByTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_link_v1beta1_GetPublicShareByTokenResponse(buffer_arg) {
  return cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareByTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_link_v1beta1_GetPublicShareRequest(arg) {
  if (!(arg instanceof cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareRequest)) {
    throw new Error('Expected argument of type cs3.sharing.link.v1beta1.GetPublicShareRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_link_v1beta1_GetPublicShareRequest(buffer_arg) {
  return cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_link_v1beta1_GetPublicShareResponse(arg) {
  if (!(arg instanceof cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareResponse)) {
    throw new Error('Expected argument of type cs3.sharing.link.v1beta1.GetPublicShareResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_link_v1beta1_GetPublicShareResponse(buffer_arg) {
  return cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_link_v1beta1_ListPublicSharesRequest(arg) {
  if (!(arg instanceof cs3_sharing_link_v1beta1_link_api_pb.ListPublicSharesRequest)) {
    throw new Error('Expected argument of type cs3.sharing.link.v1beta1.ListPublicSharesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_link_v1beta1_ListPublicSharesRequest(buffer_arg) {
  return cs3_sharing_link_v1beta1_link_api_pb.ListPublicSharesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_link_v1beta1_ListPublicSharesResponse(arg) {
  if (!(arg instanceof cs3_sharing_link_v1beta1_link_api_pb.ListPublicSharesResponse)) {
    throw new Error('Expected argument of type cs3.sharing.link.v1beta1.ListPublicSharesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_link_v1beta1_ListPublicSharesResponse(buffer_arg) {
  return cs3_sharing_link_v1beta1_link_api_pb.ListPublicSharesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_link_v1beta1_RemovePublicShareRequest(arg) {
  if (!(arg instanceof cs3_sharing_link_v1beta1_link_api_pb.RemovePublicShareRequest)) {
    throw new Error('Expected argument of type cs3.sharing.link.v1beta1.RemovePublicShareRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_link_v1beta1_RemovePublicShareRequest(buffer_arg) {
  return cs3_sharing_link_v1beta1_link_api_pb.RemovePublicShareRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_link_v1beta1_RemovePublicShareResponse(arg) {
  if (!(arg instanceof cs3_sharing_link_v1beta1_link_api_pb.RemovePublicShareResponse)) {
    throw new Error('Expected argument of type cs3.sharing.link.v1beta1.RemovePublicShareResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_link_v1beta1_RemovePublicShareResponse(buffer_arg) {
  return cs3_sharing_link_v1beta1_link_api_pb.RemovePublicShareResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_link_v1beta1_UpdatePublicShareRequest(arg) {
  if (!(arg instanceof cs3_sharing_link_v1beta1_link_api_pb.UpdatePublicShareRequest)) {
    throw new Error('Expected argument of type cs3.sharing.link.v1beta1.UpdatePublicShareRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_link_v1beta1_UpdatePublicShareRequest(buffer_arg) {
  return cs3_sharing_link_v1beta1_link_api_pb.UpdatePublicShareRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_link_v1beta1_UpdatePublicShareResponse(arg) {
  if (!(arg instanceof cs3_sharing_link_v1beta1_link_api_pb.UpdatePublicShareResponse)) {
    throw new Error('Expected argument of type cs3.sharing.link.v1beta1.UpdatePublicShareResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_link_v1beta1_UpdatePublicShareResponse(buffer_arg) {
  return cs3_sharing_link_v1beta1_link_api_pb.UpdatePublicShareResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// PublicShare Provider API
// 
// The Public Share Provider API is meant to manipulate public shares
// also called public links.
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
var LinkAPIService = exports.LinkAPIService = {
  // Creates a new share.
// MUST return CODE_NOT_FOUND if the resource reference does not exist.
// MUST return CODE_ALREADY_EXISTS if the share already exists for the 4-tuple consisting of
// (owner, shared_resource, grantee).
// New shares MUST be created in the state SHARE_STATE_PENDING.
createPublicShare: {
    path: '/cs3.sharing.link.v1beta1.LinkAPI/CreatePublicShare',
    requestStream: false,
    responseStream: false,
    requestType: cs3_sharing_link_v1beta1_link_api_pb.CreatePublicShareRequest,
    responseType: cs3_sharing_link_v1beta1_link_api_pb.CreatePublicShareResponse,
    requestSerialize: serialize_cs3_sharing_link_v1beta1_CreatePublicShareRequest,
    requestDeserialize: deserialize_cs3_sharing_link_v1beta1_CreatePublicShareRequest,
    responseSerialize: serialize_cs3_sharing_link_v1beta1_CreatePublicShareResponse,
    responseDeserialize: deserialize_cs3_sharing_link_v1beta1_CreatePublicShareResponse,
  },
  // Removes a share.
// MUST return CODE_NOT_FOUND if the share reference does not exist.
removePublicShare: {
    path: '/cs3.sharing.link.v1beta1.LinkAPI/RemovePublicShare',
    requestStream: false,
    responseStream: false,
    requestType: cs3_sharing_link_v1beta1_link_api_pb.RemovePublicShareRequest,
    responseType: cs3_sharing_link_v1beta1_link_api_pb.RemovePublicShareResponse,
    requestSerialize: serialize_cs3_sharing_link_v1beta1_RemovePublicShareRequest,
    requestDeserialize: deserialize_cs3_sharing_link_v1beta1_RemovePublicShareRequest,
    responseSerialize: serialize_cs3_sharing_link_v1beta1_RemovePublicShareResponse,
    responseDeserialize: deserialize_cs3_sharing_link_v1beta1_RemovePublicShareResponse,
  },
  // Gets share information for a single share.
// MUST return CODE_NOT_FOUND if the share reference does not exist.
getPublicShare: {
    path: '/cs3.sharing.link.v1beta1.LinkAPI/GetPublicShare',
    requestStream: false,
    responseStream: false,
    requestType: cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareRequest,
    responseType: cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareResponse,
    requestSerialize: serialize_cs3_sharing_link_v1beta1_GetPublicShareRequest,
    requestDeserialize: deserialize_cs3_sharing_link_v1beta1_GetPublicShareRequest,
    responseSerialize: serialize_cs3_sharing_link_v1beta1_GetPublicShareResponse,
    responseDeserialize: deserialize_cs3_sharing_link_v1beta1_GetPublicShareResponse,
  },
  // Gets share information for a single share by its unlisted token.
// MUST return CODE_NOT_FOUND if the share does not exist.
getPublicShareByToken: {
    path: '/cs3.sharing.link.v1beta1.LinkAPI/GetPublicShareByToken',
    requestStream: false,
    responseStream: false,
    requestType: cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareByTokenRequest,
    responseType: cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareByTokenResponse,
    requestSerialize: serialize_cs3_sharing_link_v1beta1_GetPublicShareByTokenRequest,
    requestDeserialize: deserialize_cs3_sharing_link_v1beta1_GetPublicShareByTokenRequest,
    responseSerialize: serialize_cs3_sharing_link_v1beta1_GetPublicShareByTokenResponse,
    responseDeserialize: deserialize_cs3_sharing_link_v1beta1_GetPublicShareByTokenResponse,
  },
  // List the shares the authenticated principal has created,
// both as owner and creator. If a filter is specified, only
// shares satisfying the filter MUST be returned.
listPublicShares: {
    path: '/cs3.sharing.link.v1beta1.LinkAPI/ListPublicShares',
    requestStream: false,
    responseStream: false,
    requestType: cs3_sharing_link_v1beta1_link_api_pb.ListPublicSharesRequest,
    responseType: cs3_sharing_link_v1beta1_link_api_pb.ListPublicSharesResponse,
    requestSerialize: serialize_cs3_sharing_link_v1beta1_ListPublicSharesRequest,
    requestDeserialize: deserialize_cs3_sharing_link_v1beta1_ListPublicSharesRequest,
    responseSerialize: serialize_cs3_sharing_link_v1beta1_ListPublicSharesResponse,
    responseDeserialize: deserialize_cs3_sharing_link_v1beta1_ListPublicSharesResponse,
  },
  // Updates a share.
// MUST return CODE_NOT_FOUND if the share reference does not exist.
updatePublicShare: {
    path: '/cs3.sharing.link.v1beta1.LinkAPI/UpdatePublicShare',
    requestStream: false,
    responseStream: false,
    requestType: cs3_sharing_link_v1beta1_link_api_pb.UpdatePublicShareRequest,
    responseType: cs3_sharing_link_v1beta1_link_api_pb.UpdatePublicShareResponse,
    requestSerialize: serialize_cs3_sharing_link_v1beta1_UpdatePublicShareRequest,
    requestDeserialize: deserialize_cs3_sharing_link_v1beta1_UpdatePublicShareRequest,
    responseSerialize: serialize_cs3_sharing_link_v1beta1_UpdatePublicShareResponse,
    responseDeserialize: deserialize_cs3_sharing_link_v1beta1_UpdatePublicShareResponse,
  },
};

exports.LinkAPIClient = grpc.makeGenericClientConstructor(LinkAPIService);
