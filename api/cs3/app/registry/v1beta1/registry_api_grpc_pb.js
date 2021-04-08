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
var cs3_app_registry_v1beta1_registry_api_pb = require('../../../../cs3/app/registry/v1beta1/registry_api_pb.js');
var cs3_app_registry_v1beta1_resources_pb = require('../../../../cs3/app/registry/v1beta1/resources_pb.js');
var cs3_rpc_v1beta1_status_pb = require('../../../../cs3/rpc/v1beta1/status_pb.js');
var cs3_storage_provider_v1beta1_resources_pb = require('../../../../cs3/storage/provider/v1beta1/resources_pb.js');
var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js');

function serialize_cs3_app_registry_v1beta1_GetAppProvidersRequest(arg) {
  if (!(arg instanceof cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersRequest)) {
    throw new Error('Expected argument of type cs3.app.registry.v1beta1.GetAppProvidersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_app_registry_v1beta1_GetAppProvidersRequest(buffer_arg) {
  return cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_app_registry_v1beta1_GetAppProvidersResponse(arg) {
  if (!(arg instanceof cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersResponse)) {
    throw new Error('Expected argument of type cs3.app.registry.v1beta1.GetAppProvidersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_app_registry_v1beta1_GetAppProvidersResponse(buffer_arg) {
  return cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_app_registry_v1beta1_ListAppProvidersRequest(arg) {
  if (!(arg instanceof cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersRequest)) {
    throw new Error('Expected argument of type cs3.app.registry.v1beta1.ListAppProvidersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_app_registry_v1beta1_ListAppProvidersRequest(buffer_arg) {
  return cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_app_registry_v1beta1_ListAppProvidersResponse(arg) {
  if (!(arg instanceof cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersResponse)) {
    throw new Error('Expected argument of type cs3.app.registry.v1beta1.ListAppProvidersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_app_registry_v1beta1_ListAppProvidersResponse(buffer_arg) {
  return cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// App Registry API
// 
// The App Registry API is meant to as registry that
// contains mappings between mime types and app providers.
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
  // Returns the app providers that are capable of handling this resource info.
// MUST return CODE_NOT_FOUND if no providers are available.
getAppProviders: {
    path: '/cs3.app.registry.v1beta1.RegistryAPI/GetAppProviders',
    requestStream: false,
    responseStream: false,
    requestType: cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersRequest,
    responseType: cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersResponse,
    requestSerialize: serialize_cs3_app_registry_v1beta1_GetAppProvidersRequest,
    requestDeserialize: deserialize_cs3_app_registry_v1beta1_GetAppProvidersRequest,
    responseSerialize: serialize_cs3_app_registry_v1beta1_GetAppProvidersResponse,
    responseDeserialize: deserialize_cs3_app_registry_v1beta1_GetAppProvidersResponse,
  },
  // Returns a list of the available app providers known by this registry.
listAppProviders: {
    path: '/cs3.app.registry.v1beta1.RegistryAPI/ListAppProviders',
    requestStream: false,
    responseStream: false,
    requestType: cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersRequest,
    responseType: cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersResponse,
    requestSerialize: serialize_cs3_app_registry_v1beta1_ListAppProvidersRequest,
    requestDeserialize: deserialize_cs3_app_registry_v1beta1_ListAppProvidersRequest,
    responseSerialize: serialize_cs3_app_registry_v1beta1_ListAppProvidersResponse,
    responseDeserialize: deserialize_cs3_app_registry_v1beta1_ListAppProvidersResponse,
  },
};

exports.RegistryAPIClient = grpc.makeGenericClientConstructor(RegistryAPIService);
