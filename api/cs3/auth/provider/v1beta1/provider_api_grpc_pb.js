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
var cs3_auth_provider_v1beta1_provider_api_pb = require('../../../../cs3/auth/provider/v1beta1/provider_api_pb.js');
var cs3_identity_user_v1beta1_resources_pb = require('../../../../cs3/identity/user/v1beta1/resources_pb.js');
var cs3_rpc_v1beta1_status_pb = require('../../../../cs3/rpc/v1beta1/status_pb.js');
var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js');

function serialize_cs3_auth_provider_v1beta1_AuthenticateRequest(arg) {
  if (!(arg instanceof cs3_auth_provider_v1beta1_provider_api_pb.AuthenticateRequest)) {
    throw new Error('Expected argument of type cs3.auth.provider.v1beta1.AuthenticateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_auth_provider_v1beta1_AuthenticateRequest(buffer_arg) {
  return cs3_auth_provider_v1beta1_provider_api_pb.AuthenticateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_auth_provider_v1beta1_AuthenticateResponse(arg) {
  if (!(arg instanceof cs3_auth_provider_v1beta1_provider_api_pb.AuthenticateResponse)) {
    throw new Error('Expected argument of type cs3.auth.provider.v1beta1.AuthenticateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_auth_provider_v1beta1_AuthenticateResponse(buffer_arg) {
  return cs3_auth_provider_v1beta1_provider_api_pb.AuthenticateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Auth Provider API
// 
// The Auth Provider API is meant to authenticate a client.
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
var ProviderAPIService = exports.ProviderAPIService = {
  // Authenticate authenticates a client.
authenticate: {
    path: '/cs3.auth.provider.v1beta1.ProviderAPI/Authenticate',
    requestStream: false,
    responseStream: false,
    requestType: cs3_auth_provider_v1beta1_provider_api_pb.AuthenticateRequest,
    responseType: cs3_auth_provider_v1beta1_provider_api_pb.AuthenticateResponse,
    requestSerialize: serialize_cs3_auth_provider_v1beta1_AuthenticateRequest,
    requestDeserialize: deserialize_cs3_auth_provider_v1beta1_AuthenticateRequest,
    responseSerialize: serialize_cs3_auth_provider_v1beta1_AuthenticateResponse,
    responseDeserialize: deserialize_cs3_auth_provider_v1beta1_AuthenticateResponse,
  },
};

exports.ProviderAPIClient = grpc.makeGenericClientConstructor(ProviderAPIService);
