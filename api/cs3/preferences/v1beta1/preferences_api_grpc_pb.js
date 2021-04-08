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
var cs3_preferences_v1beta1_preferences_api_pb = require('../../../cs3/preferences/v1beta1/preferences_api_pb.js');
var cs3_rpc_v1beta1_status_pb = require('../../../cs3/rpc/v1beta1/status_pb.js');

function serialize_cs3_preferences_v1beta1_GetKeyRequest(arg) {
  if (!(arg instanceof cs3_preferences_v1beta1_preferences_api_pb.GetKeyRequest)) {
    throw new Error('Expected argument of type cs3.preferences.v1beta1.GetKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_preferences_v1beta1_GetKeyRequest(buffer_arg) {
  return cs3_preferences_v1beta1_preferences_api_pb.GetKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_preferences_v1beta1_GetKeyResponse(arg) {
  if (!(arg instanceof cs3_preferences_v1beta1_preferences_api_pb.GetKeyResponse)) {
    throw new Error('Expected argument of type cs3.preferences.v1beta1.GetKeyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_preferences_v1beta1_GetKeyResponse(buffer_arg) {
  return cs3_preferences_v1beta1_preferences_api_pb.GetKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_preferences_v1beta1_SetKeyRequest(arg) {
  if (!(arg instanceof cs3_preferences_v1beta1_preferences_api_pb.SetKeyRequest)) {
    throw new Error('Expected argument of type cs3.preferences.v1beta1.SetKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_preferences_v1beta1_SetKeyRequest(buffer_arg) {
  return cs3_preferences_v1beta1_preferences_api_pb.SetKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_preferences_v1beta1_SetKeyResponse(arg) {
  if (!(arg instanceof cs3_preferences_v1beta1_preferences_api_pb.SetKeyResponse)) {
    throw new Error('Expected argument of type cs3.preferences.v1beta1.SetKeyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_preferences_v1beta1_SetKeyResponse(buffer_arg) {
  return cs3_preferences_v1beta1_preferences_api_pb.SetKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Preferences API.
// 
// The Preferences API is responsible for creating
// a key-value map according to user preferences.
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
var PreferencesAPIService = exports.PreferencesAPIService = {
  // Maps the key-value pair.
setKey: {
    path: '/cs3.preferences.v1beta1.PreferencesAPI/SetKey',
    requestStream: false,
    responseStream: false,
    requestType: cs3_preferences_v1beta1_preferences_api_pb.SetKeyRequest,
    responseType: cs3_preferences_v1beta1_preferences_api_pb.SetKeyResponse,
    requestSerialize: serialize_cs3_preferences_v1beta1_SetKeyRequest,
    requestDeserialize: deserialize_cs3_preferences_v1beta1_SetKeyRequest,
    responseSerialize: serialize_cs3_preferences_v1beta1_SetKeyResponse,
    responseDeserialize: deserialize_cs3_preferences_v1beta1_SetKeyResponse,
  },
  // Returns the value associated with the
// requested key.
getKey: {
    path: '/cs3.preferences.v1beta1.PreferencesAPI/GetKey',
    requestStream: false,
    responseStream: false,
    requestType: cs3_preferences_v1beta1_preferences_api_pb.GetKeyRequest,
    responseType: cs3_preferences_v1beta1_preferences_api_pb.GetKeyResponse,
    requestSerialize: serialize_cs3_preferences_v1beta1_GetKeyRequest,
    requestDeserialize: deserialize_cs3_preferences_v1beta1_GetKeyRequest,
    responseSerialize: serialize_cs3_preferences_v1beta1_GetKeyResponse,
    responseDeserialize: deserialize_cs3_preferences_v1beta1_GetKeyResponse,
  },
};

exports.PreferencesAPIClient = grpc.makeGenericClientConstructor(PreferencesAPIService);
