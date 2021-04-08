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
var cs3_identity_user_v1beta1_user_api_pb = require('../../../../cs3/identity/user/v1beta1/user_api_pb.js');
var cs3_identity_user_v1beta1_resources_pb = require('../../../../cs3/identity/user/v1beta1/resources_pb.js');
var cs3_rpc_v1beta1_status_pb = require('../../../../cs3/rpc/v1beta1/status_pb.js');
var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js');

function serialize_cs3_identity_user_v1beta1_FindGroupsRequest(arg) {
  if (!(arg instanceof cs3_identity_user_v1beta1_user_api_pb.FindGroupsRequest)) {
    throw new Error('Expected argument of type cs3.identity.user.v1beta1.FindGroupsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_identity_user_v1beta1_FindGroupsRequest(buffer_arg) {
  return cs3_identity_user_v1beta1_user_api_pb.FindGroupsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_identity_user_v1beta1_FindGroupsResponse(arg) {
  if (!(arg instanceof cs3_identity_user_v1beta1_user_api_pb.FindGroupsResponse)) {
    throw new Error('Expected argument of type cs3.identity.user.v1beta1.FindGroupsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_identity_user_v1beta1_FindGroupsResponse(buffer_arg) {
  return cs3_identity_user_v1beta1_user_api_pb.FindGroupsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_identity_user_v1beta1_FindUsersRequest(arg) {
  if (!(arg instanceof cs3_identity_user_v1beta1_user_api_pb.FindUsersRequest)) {
    throw new Error('Expected argument of type cs3.identity.user.v1beta1.FindUsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_identity_user_v1beta1_FindUsersRequest(buffer_arg) {
  return cs3_identity_user_v1beta1_user_api_pb.FindUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_identity_user_v1beta1_FindUsersResponse(arg) {
  if (!(arg instanceof cs3_identity_user_v1beta1_user_api_pb.FindUsersResponse)) {
    throw new Error('Expected argument of type cs3.identity.user.v1beta1.FindUsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_identity_user_v1beta1_FindUsersResponse(buffer_arg) {
  return cs3_identity_user_v1beta1_user_api_pb.FindUsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_identity_user_v1beta1_GetUserByClaimRequest(arg) {
  if (!(arg instanceof cs3_identity_user_v1beta1_user_api_pb.GetUserByClaimRequest)) {
    throw new Error('Expected argument of type cs3.identity.user.v1beta1.GetUserByClaimRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_identity_user_v1beta1_GetUserByClaimRequest(buffer_arg) {
  return cs3_identity_user_v1beta1_user_api_pb.GetUserByClaimRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_identity_user_v1beta1_GetUserByClaimResponse(arg) {
  if (!(arg instanceof cs3_identity_user_v1beta1_user_api_pb.GetUserByClaimResponse)) {
    throw new Error('Expected argument of type cs3.identity.user.v1beta1.GetUserByClaimResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_identity_user_v1beta1_GetUserByClaimResponse(buffer_arg) {
  return cs3_identity_user_v1beta1_user_api_pb.GetUserByClaimResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_identity_user_v1beta1_GetUserGroupsRequest(arg) {
  if (!(arg instanceof cs3_identity_user_v1beta1_user_api_pb.GetUserGroupsRequest)) {
    throw new Error('Expected argument of type cs3.identity.user.v1beta1.GetUserGroupsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_identity_user_v1beta1_GetUserGroupsRequest(buffer_arg) {
  return cs3_identity_user_v1beta1_user_api_pb.GetUserGroupsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_identity_user_v1beta1_GetUserGroupsResponse(arg) {
  if (!(arg instanceof cs3_identity_user_v1beta1_user_api_pb.GetUserGroupsResponse)) {
    throw new Error('Expected argument of type cs3.identity.user.v1beta1.GetUserGroupsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_identity_user_v1beta1_GetUserGroupsResponse(buffer_arg) {
  return cs3_identity_user_v1beta1_user_api_pb.GetUserGroupsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_identity_user_v1beta1_GetUserRequest(arg) {
  if (!(arg instanceof cs3_identity_user_v1beta1_user_api_pb.GetUserRequest)) {
    throw new Error('Expected argument of type cs3.identity.user.v1beta1.GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_identity_user_v1beta1_GetUserRequest(buffer_arg) {
  return cs3_identity_user_v1beta1_user_api_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_identity_user_v1beta1_GetUserResponse(arg) {
  if (!(arg instanceof cs3_identity_user_v1beta1_user_api_pb.GetUserResponse)) {
    throw new Error('Expected argument of type cs3.identity.user.v1beta1.GetUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_identity_user_v1beta1_GetUserResponse(buffer_arg) {
  return cs3_identity_user_v1beta1_user_api_pb.GetUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_identity_user_v1beta1_IsInGroupRequest(arg) {
  if (!(arg instanceof cs3_identity_user_v1beta1_user_api_pb.IsInGroupRequest)) {
    throw new Error('Expected argument of type cs3.identity.user.v1beta1.IsInGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_identity_user_v1beta1_IsInGroupRequest(buffer_arg) {
  return cs3_identity_user_v1beta1_user_api_pb.IsInGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_identity_user_v1beta1_IsInGroupResponse(arg) {
  if (!(arg instanceof cs3_identity_user_v1beta1_user_api_pb.IsInGroupResponse)) {
    throw new Error('Expected argument of type cs3.identity.user.v1beta1.IsInGroupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_identity_user_v1beta1_IsInGroupResponse(buffer_arg) {
  return cs3_identity_user_v1beta1_user_api_pb.IsInGroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// UserProvider API.
// 
// The UserProvider API is responsible for creating
// a key-value map according to user userprovider.
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
//
// Provides an API for managing users.
var UserAPIService = exports.UserAPIService = {
  // Gets the information about a user by the user id.
getUser: {
    path: '/cs3.identity.user.v1beta1.UserAPI/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: cs3_identity_user_v1beta1_user_api_pb.GetUserRequest,
    responseType: cs3_identity_user_v1beta1_user_api_pb.GetUserResponse,
    requestSerialize: serialize_cs3_identity_user_v1beta1_GetUserRequest,
    requestDeserialize: deserialize_cs3_identity_user_v1beta1_GetUserRequest,
    responseSerialize: serialize_cs3_identity_user_v1beta1_GetUserResponse,
    responseDeserialize: deserialize_cs3_identity_user_v1beta1_GetUserResponse,
  },
  // Gets the information about a user based on a specified claim.
getUserByClaim: {
    path: '/cs3.identity.user.v1beta1.UserAPI/GetUserByClaim',
    requestStream: false,
    responseStream: false,
    requestType: cs3_identity_user_v1beta1_user_api_pb.GetUserByClaimRequest,
    responseType: cs3_identity_user_v1beta1_user_api_pb.GetUserByClaimResponse,
    requestSerialize: serialize_cs3_identity_user_v1beta1_GetUserByClaimRequest,
    requestDeserialize: deserialize_cs3_identity_user_v1beta1_GetUserByClaimRequest,
    responseSerialize: serialize_cs3_identity_user_v1beta1_GetUserByClaimResponse,
    responseDeserialize: deserialize_cs3_identity_user_v1beta1_GetUserByClaimResponse,
  },
  // Gets the groups of a user.
getUserGroups: {
    path: '/cs3.identity.user.v1beta1.UserAPI/GetUserGroups',
    requestStream: false,
    responseStream: false,
    requestType: cs3_identity_user_v1beta1_user_api_pb.GetUserGroupsRequest,
    responseType: cs3_identity_user_v1beta1_user_api_pb.GetUserGroupsResponse,
    requestSerialize: serialize_cs3_identity_user_v1beta1_GetUserGroupsRequest,
    requestDeserialize: deserialize_cs3_identity_user_v1beta1_GetUserGroupsRequest,
    responseSerialize: serialize_cs3_identity_user_v1beta1_GetUserGroupsResponse,
    responseDeserialize: deserialize_cs3_identity_user_v1beta1_GetUserGroupsResponse,
  },
  // Tells if the user is in a certain group.
isInGroup: {
    path: '/cs3.identity.user.v1beta1.UserAPI/IsInGroup',
    requestStream: false,
    responseStream: false,
    requestType: cs3_identity_user_v1beta1_user_api_pb.IsInGroupRequest,
    responseType: cs3_identity_user_v1beta1_user_api_pb.IsInGroupResponse,
    requestSerialize: serialize_cs3_identity_user_v1beta1_IsInGroupRequest,
    requestDeserialize: deserialize_cs3_identity_user_v1beta1_IsInGroupRequest,
    responseSerialize: serialize_cs3_identity_user_v1beta1_IsInGroupResponse,
    responseDeserialize: deserialize_cs3_identity_user_v1beta1_IsInGroupResponse,
  },
  // Finds users by any attribute of the user.
// TODO(labkode): to define the filters that make more sense.
findUsers: {
    path: '/cs3.identity.user.v1beta1.UserAPI/FindUsers',
    requestStream: false,
    responseStream: false,
    requestType: cs3_identity_user_v1beta1_user_api_pb.FindUsersRequest,
    responseType: cs3_identity_user_v1beta1_user_api_pb.FindUsersResponse,
    requestSerialize: serialize_cs3_identity_user_v1beta1_FindUsersRequest,
    requestDeserialize: deserialize_cs3_identity_user_v1beta1_FindUsersRequest,
    responseSerialize: serialize_cs3_identity_user_v1beta1_FindUsersResponse,
    responseDeserialize: deserialize_cs3_identity_user_v1beta1_FindUsersResponse,
  },
  // Finds groups whose names match the specified filter.
findGroups: {
    path: '/cs3.identity.user.v1beta1.UserAPI/FindGroups',
    requestStream: false,
    responseStream: false,
    requestType: cs3_identity_user_v1beta1_user_api_pb.FindGroupsRequest,
    responseType: cs3_identity_user_v1beta1_user_api_pb.FindGroupsResponse,
    requestSerialize: serialize_cs3_identity_user_v1beta1_FindGroupsRequest,
    requestDeserialize: deserialize_cs3_identity_user_v1beta1_FindGroupsRequest,
    responseSerialize: serialize_cs3_identity_user_v1beta1_FindGroupsResponse,
    responseDeserialize: deserialize_cs3_identity_user_v1beta1_FindGroupsResponse,
  },
};

exports.UserAPIClient = grpc.makeGenericClientConstructor(UserAPIService);
