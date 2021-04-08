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
var cs3_auth_registry_v1beta1_registry_api_pb = require('../../../../cs3/auth/registry/v1beta1/registry_api_pb.js');
var cs3_auth_registry_v1beta1_resources_pb = require('../../../../cs3/auth/registry/v1beta1/resources_pb.js');
var cs3_rpc_v1beta1_status_pb = require('../../../../cs3/rpc/v1beta1/status_pb.js');
var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js');

function serialize_cs3_auth_registry_v1beta1_GetAuthProviderRequest(arg) {
  if (!(arg instanceof cs3_auth_registry_v1beta1_registry_api_pb.GetAuthProviderRequest)) {
    throw new Error('Expected argument of type cs3.auth.registry.v1beta1.GetAuthProviderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_auth_registry_v1beta1_GetAuthProviderRequest(buffer_arg) {
  return cs3_auth_registry_v1beta1_registry_api_pb.GetAuthProviderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_auth_registry_v1beta1_GetAuthProviderResponse(arg) {
  if (!(arg instanceof cs3_auth_registry_v1beta1_registry_api_pb.GetAuthProviderResponse)) {
    throw new Error('Expected argument of type cs3.auth.registry.v1beta1.GetAuthProviderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_auth_registry_v1beta1_GetAuthProviderResponse(buffer_arg) {
  return cs3_auth_registry_v1beta1_registry_api_pb.GetAuthProviderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_auth_registry_v1beta1_ListAuthProvidersRequest(arg) {
  if (!(arg instanceof cs3_auth_registry_v1beta1_registry_api_pb.ListAuthProvidersRequest)) {
    throw new Error('Expected argument of type cs3.auth.registry.v1beta1.ListAuthProvidersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_auth_registry_v1beta1_ListAuthProvidersRequest(buffer_arg) {
  return cs3_auth_registry_v1beta1_registry_api_pb.ListAuthProvidersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_auth_registry_v1beta1_ListAuthProvidersResponse(arg) {
  if (!(arg instanceof cs3_auth_registry_v1beta1_registry_api_pb.ListAuthProvidersResponse)) {
    throw new Error('Expected argument of type cs3.auth.registry.v1beta1.ListAuthProvidersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_auth_registry_v1beta1_ListAuthProvidersResponse(buffer_arg) {
  return cs3_auth_registry_v1beta1_registry_api_pb.ListAuthProvidersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Auth Registry API
// 
// The Auth Registry API is meant to as registry to obtain
// information of available auth providers.
// For example, to use OIDC or Kerberos for authentication.
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
var RegistryAPIService = exports.RegistryAPIService = {
  // Returns the auth provider that is reponsible for the given
// resource reference.
// MUST return CODE_NOT_FOUND if the reference does not exist.
getAuthProvider: {
    path: '/cs3.auth.registry.v1beta1.RegistryAPI/GetAuthProvider',
    requestStream: false,
    responseStream: false,
    requestType: cs3_auth_registry_v1beta1_registry_api_pb.GetAuthProviderRequest,
    responseType: cs3_auth_registry_v1beta1_registry_api_pb.GetAuthProviderResponse,
    requestSerialize: serialize_cs3_auth_registry_v1beta1_GetAuthProviderRequest,
    requestDeserialize: deserialize_cs3_auth_registry_v1beta1_GetAuthProviderRequest,
    responseSerialize: serialize_cs3_auth_registry_v1beta1_GetAuthProviderResponse,
    responseDeserialize: deserialize_cs3_auth_registry_v1beta1_GetAuthProviderResponse,
  },
  // Returns a list of the available auth providers known by this registry.
listAuthProviders: {
    path: '/cs3.auth.registry.v1beta1.RegistryAPI/ListAuthProviders',
    requestStream: false,
    responseStream: false,
    requestType: cs3_auth_registry_v1beta1_registry_api_pb.ListAuthProvidersRequest,
    responseType: cs3_auth_registry_v1beta1_registry_api_pb.ListAuthProvidersResponse,
    requestSerialize: serialize_cs3_auth_registry_v1beta1_ListAuthProvidersRequest,
    requestDeserialize: deserialize_cs3_auth_registry_v1beta1_ListAuthProvidersRequest,
    responseSerialize: serialize_cs3_auth_registry_v1beta1_ListAuthProvidersResponse,
    responseDeserialize: deserialize_cs3_auth_registry_v1beta1_ListAuthProvidersResponse,
  },
};

exports.RegistryAPIClient = grpc.makeGenericClientConstructor(RegistryAPIService);
