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
var cs3_sharing_ocm_v1beta1_ocm_api_pb = require('../../../../cs3/sharing/ocm/v1beta1/ocm_api_pb.js');
var cs3_identity_user_v1beta1_resources_pb = require('../../../../cs3/identity/user/v1beta1/resources_pb.js');
var cs3_ocm_provider_v1beta1_resources_pb = require('../../../../cs3/ocm/provider/v1beta1/resources_pb.js');
var cs3_rpc_v1beta1_status_pb = require('../../../../cs3/rpc/v1beta1/status_pb.js');
var cs3_sharing_ocm_v1beta1_resources_pb = require('../../../../cs3/sharing/ocm/v1beta1/resources_pb.js');
var cs3_storage_provider_v1beta1_resources_pb = require('../../../../cs3/storage/provider/v1beta1/resources_pb.js');
var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js');

function serialize_cs3_sharing_ocm_v1beta1_CreateOCMShareRequest(arg) {
  if (!(arg instanceof cs3_sharing_ocm_v1beta1_ocm_api_pb.CreateOCMShareRequest)) {
    throw new Error('Expected argument of type cs3.sharing.ocm.v1beta1.CreateOCMShareRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_ocm_v1beta1_CreateOCMShareRequest(buffer_arg) {
  return cs3_sharing_ocm_v1beta1_ocm_api_pb.CreateOCMShareRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_ocm_v1beta1_CreateOCMShareResponse(arg) {
  if (!(arg instanceof cs3_sharing_ocm_v1beta1_ocm_api_pb.CreateOCMShareResponse)) {
    throw new Error('Expected argument of type cs3.sharing.ocm.v1beta1.CreateOCMShareResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_ocm_v1beta1_CreateOCMShareResponse(buffer_arg) {
  return cs3_sharing_ocm_v1beta1_ocm_api_pb.CreateOCMShareResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_ocm_v1beta1_GetOCMShareRequest(arg) {
  if (!(arg instanceof cs3_sharing_ocm_v1beta1_ocm_api_pb.GetOCMShareRequest)) {
    throw new Error('Expected argument of type cs3.sharing.ocm.v1beta1.GetOCMShareRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_ocm_v1beta1_GetOCMShareRequest(buffer_arg) {
  return cs3_sharing_ocm_v1beta1_ocm_api_pb.GetOCMShareRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_ocm_v1beta1_GetOCMShareResponse(arg) {
  if (!(arg instanceof cs3_sharing_ocm_v1beta1_ocm_api_pb.GetOCMShareResponse)) {
    throw new Error('Expected argument of type cs3.sharing.ocm.v1beta1.GetOCMShareResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_ocm_v1beta1_GetOCMShareResponse(buffer_arg) {
  return cs3_sharing_ocm_v1beta1_ocm_api_pb.GetOCMShareResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_ocm_v1beta1_GetReceivedOCMShareRequest(arg) {
  if (!(arg instanceof cs3_sharing_ocm_v1beta1_ocm_api_pb.GetReceivedOCMShareRequest)) {
    throw new Error('Expected argument of type cs3.sharing.ocm.v1beta1.GetReceivedOCMShareRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_ocm_v1beta1_GetReceivedOCMShareRequest(buffer_arg) {
  return cs3_sharing_ocm_v1beta1_ocm_api_pb.GetReceivedOCMShareRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_ocm_v1beta1_GetReceivedOCMShareResponse(arg) {
  if (!(arg instanceof cs3_sharing_ocm_v1beta1_ocm_api_pb.GetReceivedOCMShareResponse)) {
    throw new Error('Expected argument of type cs3.sharing.ocm.v1beta1.GetReceivedOCMShareResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_ocm_v1beta1_GetReceivedOCMShareResponse(buffer_arg) {
  return cs3_sharing_ocm_v1beta1_ocm_api_pb.GetReceivedOCMShareResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_ocm_v1beta1_ListOCMSharesRequest(arg) {
  if (!(arg instanceof cs3_sharing_ocm_v1beta1_ocm_api_pb.ListOCMSharesRequest)) {
    throw new Error('Expected argument of type cs3.sharing.ocm.v1beta1.ListOCMSharesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_ocm_v1beta1_ListOCMSharesRequest(buffer_arg) {
  return cs3_sharing_ocm_v1beta1_ocm_api_pb.ListOCMSharesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_ocm_v1beta1_ListOCMSharesResponse(arg) {
  if (!(arg instanceof cs3_sharing_ocm_v1beta1_ocm_api_pb.ListOCMSharesResponse)) {
    throw new Error('Expected argument of type cs3.sharing.ocm.v1beta1.ListOCMSharesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_ocm_v1beta1_ListOCMSharesResponse(buffer_arg) {
  return cs3_sharing_ocm_v1beta1_ocm_api_pb.ListOCMSharesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_ocm_v1beta1_ListReceivedOCMSharesRequest(arg) {
  if (!(arg instanceof cs3_sharing_ocm_v1beta1_ocm_api_pb.ListReceivedOCMSharesRequest)) {
    throw new Error('Expected argument of type cs3.sharing.ocm.v1beta1.ListReceivedOCMSharesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_ocm_v1beta1_ListReceivedOCMSharesRequest(buffer_arg) {
  return cs3_sharing_ocm_v1beta1_ocm_api_pb.ListReceivedOCMSharesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_ocm_v1beta1_ListReceivedOCMSharesResponse(arg) {
  if (!(arg instanceof cs3_sharing_ocm_v1beta1_ocm_api_pb.ListReceivedOCMSharesResponse)) {
    throw new Error('Expected argument of type cs3.sharing.ocm.v1beta1.ListReceivedOCMSharesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_ocm_v1beta1_ListReceivedOCMSharesResponse(buffer_arg) {
  return cs3_sharing_ocm_v1beta1_ocm_api_pb.ListReceivedOCMSharesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_ocm_v1beta1_RemoveOCMShareRequest(arg) {
  if (!(arg instanceof cs3_sharing_ocm_v1beta1_ocm_api_pb.RemoveOCMShareRequest)) {
    throw new Error('Expected argument of type cs3.sharing.ocm.v1beta1.RemoveOCMShareRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_ocm_v1beta1_RemoveOCMShareRequest(buffer_arg) {
  return cs3_sharing_ocm_v1beta1_ocm_api_pb.RemoveOCMShareRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_ocm_v1beta1_RemoveOCMShareResponse(arg) {
  if (!(arg instanceof cs3_sharing_ocm_v1beta1_ocm_api_pb.RemoveOCMShareResponse)) {
    throw new Error('Expected argument of type cs3.sharing.ocm.v1beta1.RemoveOCMShareResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_ocm_v1beta1_RemoveOCMShareResponse(buffer_arg) {
  return cs3_sharing_ocm_v1beta1_ocm_api_pb.RemoveOCMShareResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_ocm_v1beta1_UpdateOCMShareRequest(arg) {
  if (!(arg instanceof cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateOCMShareRequest)) {
    throw new Error('Expected argument of type cs3.sharing.ocm.v1beta1.UpdateOCMShareRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_ocm_v1beta1_UpdateOCMShareRequest(buffer_arg) {
  return cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateOCMShareRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_ocm_v1beta1_UpdateOCMShareResponse(arg) {
  if (!(arg instanceof cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateOCMShareResponse)) {
    throw new Error('Expected argument of type cs3.sharing.ocm.v1beta1.UpdateOCMShareResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_ocm_v1beta1_UpdateOCMShareResponse(buffer_arg) {
  return cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateOCMShareResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_ocm_v1beta1_UpdateReceivedOCMShareRequest(arg) {
  if (!(arg instanceof cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateReceivedOCMShareRequest)) {
    throw new Error('Expected argument of type cs3.sharing.ocm.v1beta1.UpdateReceivedOCMShareRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_ocm_v1beta1_UpdateReceivedOCMShareRequest(buffer_arg) {
  return cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateReceivedOCMShareRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_ocm_v1beta1_UpdateReceivedOCMShareResponse(arg) {
  if (!(arg instanceof cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateReceivedOCMShareResponse)) {
    throw new Error('Expected argument of type cs3.sharing.ocm.v1beta1.UpdateReceivedOCMShareResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_ocm_v1beta1_UpdateReceivedOCMShareResponse(buffer_arg) {
  return cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateReceivedOCMShareResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// OCM Share Provider API
// 
// The OCM Share Provider API is meant to manipulate share
// resources from the perspective of the creator or the share and
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
var OcmAPIService = exports.OcmAPIService = {
  // Creates a new ocm share.
// MUST return CODE_NOT_FOUND if the resource reference does not exist.
// MUST return CODE_ALREADY_EXISTS if the share already exists for the 4-tuple consisting of
// (owner, shared_resource, grantee).
// New shares MUST be created in the state SHARE_STATE_PENDING.
createOCMShare: {
    path: '/cs3.sharing.ocm.v1beta1.OcmAPI/CreateOCMShare',
    requestStream: false,
    responseStream: false,
    requestType: cs3_sharing_ocm_v1beta1_ocm_api_pb.CreateOCMShareRequest,
    responseType: cs3_sharing_ocm_v1beta1_ocm_api_pb.CreateOCMShareResponse,
    requestSerialize: serialize_cs3_sharing_ocm_v1beta1_CreateOCMShareRequest,
    requestDeserialize: deserialize_cs3_sharing_ocm_v1beta1_CreateOCMShareRequest,
    responseSerialize: serialize_cs3_sharing_ocm_v1beta1_CreateOCMShareResponse,
    responseDeserialize: deserialize_cs3_sharing_ocm_v1beta1_CreateOCMShareResponse,
  },
  // Removes a share.
// MUST return CODE_NOT_FOUND if the share reference does not exist.
removeOCMShare: {
    path: '/cs3.sharing.ocm.v1beta1.OcmAPI/RemoveOCMShare',
    requestStream: false,
    responseStream: false,
    requestType: cs3_sharing_ocm_v1beta1_ocm_api_pb.RemoveOCMShareRequest,
    responseType: cs3_sharing_ocm_v1beta1_ocm_api_pb.RemoveOCMShareResponse,
    requestSerialize: serialize_cs3_sharing_ocm_v1beta1_RemoveOCMShareRequest,
    requestDeserialize: deserialize_cs3_sharing_ocm_v1beta1_RemoveOCMShareRequest,
    responseSerialize: serialize_cs3_sharing_ocm_v1beta1_RemoveOCMShareResponse,
    responseDeserialize: deserialize_cs3_sharing_ocm_v1beta1_RemoveOCMShareResponse,
  },
  // Gets share information for a single share.
// MUST return CODE_NOT_FOUND if the share reference does not exist.
getOCMShare: {
    path: '/cs3.sharing.ocm.v1beta1.OcmAPI/GetOCMShare',
    requestStream: false,
    responseStream: false,
    requestType: cs3_sharing_ocm_v1beta1_ocm_api_pb.GetOCMShareRequest,
    responseType: cs3_sharing_ocm_v1beta1_ocm_api_pb.GetOCMShareResponse,
    requestSerialize: serialize_cs3_sharing_ocm_v1beta1_GetOCMShareRequest,
    requestDeserialize: deserialize_cs3_sharing_ocm_v1beta1_GetOCMShareRequest,
    responseSerialize: serialize_cs3_sharing_ocm_v1beta1_GetOCMShareResponse,
    responseDeserialize: deserialize_cs3_sharing_ocm_v1beta1_GetOCMShareResponse,
  },
  // List the shares the authenticated principal has created,
// both as owner and creator. If a filter is specified, only
// shares satisfying the filter MUST be returned.
listOCMShares: {
    path: '/cs3.sharing.ocm.v1beta1.OcmAPI/ListOCMShares',
    requestStream: false,
    responseStream: false,
    requestType: cs3_sharing_ocm_v1beta1_ocm_api_pb.ListOCMSharesRequest,
    responseType: cs3_sharing_ocm_v1beta1_ocm_api_pb.ListOCMSharesResponse,
    requestSerialize: serialize_cs3_sharing_ocm_v1beta1_ListOCMSharesRequest,
    requestDeserialize: deserialize_cs3_sharing_ocm_v1beta1_ListOCMSharesRequest,
    responseSerialize: serialize_cs3_sharing_ocm_v1beta1_ListOCMSharesResponse,
    responseDeserialize: deserialize_cs3_sharing_ocm_v1beta1_ListOCMSharesResponse,
  },
  // Updates a share.
// MUST return CODE_NOT_FOUND if the share reference does not exist.
updateOCMShare: {
    path: '/cs3.sharing.ocm.v1beta1.OcmAPI/UpdateOCMShare',
    requestStream: false,
    responseStream: false,
    requestType: cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateOCMShareRequest,
    responseType: cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateOCMShareResponse,
    requestSerialize: serialize_cs3_sharing_ocm_v1beta1_UpdateOCMShareRequest,
    requestDeserialize: deserialize_cs3_sharing_ocm_v1beta1_UpdateOCMShareRequest,
    responseSerialize: serialize_cs3_sharing_ocm_v1beta1_UpdateOCMShareResponse,
    responseDeserialize: deserialize_cs3_sharing_ocm_v1beta1_UpdateOCMShareResponse,
  },
  // List all shares the authenticated principal has received.
listReceivedOCMShares: {
    path: '/cs3.sharing.ocm.v1beta1.OcmAPI/ListReceivedOCMShares',
    requestStream: false,
    responseStream: false,
    requestType: cs3_sharing_ocm_v1beta1_ocm_api_pb.ListReceivedOCMSharesRequest,
    responseType: cs3_sharing_ocm_v1beta1_ocm_api_pb.ListReceivedOCMSharesResponse,
    requestSerialize: serialize_cs3_sharing_ocm_v1beta1_ListReceivedOCMSharesRequest,
    requestDeserialize: deserialize_cs3_sharing_ocm_v1beta1_ListReceivedOCMSharesRequest,
    responseSerialize: serialize_cs3_sharing_ocm_v1beta1_ListReceivedOCMSharesResponse,
    responseDeserialize: deserialize_cs3_sharing_ocm_v1beta1_ListReceivedOCMSharesResponse,
  },
  // Update the received share to change the share state or the display name.
// MUST return CODE_NOT_FOUND if the share reference does not exist.
updateReceivedOCMShare: {
    path: '/cs3.sharing.ocm.v1beta1.OcmAPI/UpdateReceivedOCMShare',
    requestStream: false,
    responseStream: false,
    requestType: cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateReceivedOCMShareRequest,
    responseType: cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateReceivedOCMShareResponse,
    requestSerialize: serialize_cs3_sharing_ocm_v1beta1_UpdateReceivedOCMShareRequest,
    requestDeserialize: deserialize_cs3_sharing_ocm_v1beta1_UpdateReceivedOCMShareRequest,
    responseSerialize: serialize_cs3_sharing_ocm_v1beta1_UpdateReceivedOCMShareResponse,
    responseDeserialize: deserialize_cs3_sharing_ocm_v1beta1_UpdateReceivedOCMShareResponse,
  },
  // Get the information for the given received share reference.
// MUST return CODE_NOT_FOUND if the received share reference does not exist.
getReceivedOCMShare: {
    path: '/cs3.sharing.ocm.v1beta1.OcmAPI/GetReceivedOCMShare',
    requestStream: false,
    responseStream: false,
    requestType: cs3_sharing_ocm_v1beta1_ocm_api_pb.GetReceivedOCMShareRequest,
    responseType: cs3_sharing_ocm_v1beta1_ocm_api_pb.GetReceivedOCMShareResponse,
    requestSerialize: serialize_cs3_sharing_ocm_v1beta1_GetReceivedOCMShareRequest,
    requestDeserialize: deserialize_cs3_sharing_ocm_v1beta1_GetReceivedOCMShareRequest,
    responseSerialize: serialize_cs3_sharing_ocm_v1beta1_GetReceivedOCMShareResponse,
    responseDeserialize: deserialize_cs3_sharing_ocm_v1beta1_GetReceivedOCMShareResponse,
  },
};

exports.OcmAPIClient = grpc.makeGenericClientConstructor(OcmAPIService);
