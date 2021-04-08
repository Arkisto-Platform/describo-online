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
var cs3_storage_registry_v1beta1_registry_api_pb = require('../../../../cs3/storage/registry/v1beta1/registry_api_pb.js');
var cs3_rpc_v1beta1_status_pb = require('../../../../cs3/rpc/v1beta1/status_pb.js');
var cs3_storage_provider_v1beta1_resources_pb = require('../../../../cs3/storage/provider/v1beta1/resources_pb.js');
var cs3_storage_registry_v1beta1_resources_pb = require('../../../../cs3/storage/registry/v1beta1/resources_pb.js');
var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js');

function serialize_cs3_storage_registry_v1beta1_GetHomeRequest(arg) {
  if (!(arg instanceof cs3_storage_registry_v1beta1_registry_api_pb.GetHomeRequest)) {
    throw new Error('Expected argument of type cs3.storage.registry.v1beta1.GetHomeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_registry_v1beta1_GetHomeRequest(buffer_arg) {
  return cs3_storage_registry_v1beta1_registry_api_pb.GetHomeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_registry_v1beta1_GetHomeResponse(arg) {
  if (!(arg instanceof cs3_storage_registry_v1beta1_registry_api_pb.GetHomeResponse)) {
    throw new Error('Expected argument of type cs3.storage.registry.v1beta1.GetHomeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_registry_v1beta1_GetHomeResponse(buffer_arg) {
  return cs3_storage_registry_v1beta1_registry_api_pb.GetHomeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_registry_v1beta1_GetStorageProviderRequest(arg) {
  if (!(arg instanceof cs3_storage_registry_v1beta1_registry_api_pb.GetStorageProviderRequest)) {
    throw new Error('Expected argument of type cs3.storage.registry.v1beta1.GetStorageProviderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_registry_v1beta1_GetStorageProviderRequest(buffer_arg) {
  return cs3_storage_registry_v1beta1_registry_api_pb.GetStorageProviderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_registry_v1beta1_GetStorageProviderResponse(arg) {
  if (!(arg instanceof cs3_storage_registry_v1beta1_registry_api_pb.GetStorageProviderResponse)) {
    throw new Error('Expected argument of type cs3.storage.registry.v1beta1.GetStorageProviderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_registry_v1beta1_GetStorageProviderResponse(buffer_arg) {
  return cs3_storage_registry_v1beta1_registry_api_pb.GetStorageProviderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_registry_v1beta1_ListStorageProvidersRequest(arg) {
  if (!(arg instanceof cs3_storage_registry_v1beta1_registry_api_pb.ListStorageProvidersRequest)) {
    throw new Error('Expected argument of type cs3.storage.registry.v1beta1.ListStorageProvidersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_registry_v1beta1_ListStorageProvidersRequest(buffer_arg) {
  return cs3_storage_registry_v1beta1_registry_api_pb.ListStorageProvidersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_registry_v1beta1_ListStorageProvidersResponse(arg) {
  if (!(arg instanceof cs3_storage_registry_v1beta1_registry_api_pb.ListStorageProvidersResponse)) {
    throw new Error('Expected argument of type cs3.storage.registry.v1beta1.ListStorageProvidersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_registry_v1beta1_ListStorageProvidersResponse(buffer_arg) {
  return cs3_storage_registry_v1beta1_registry_api_pb.ListStorageProvidersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Storage Registry API
// 
// The Storage Registry API is meant to as registry to obtain
// information of available storage providers.
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
  // Returns the storage provider that is reponsible for the given
// resource reference.
// MUST return CODE_NOT_FOUND if the reference does not exist.
getStorageProvider: {
    path: '/cs3.storage.registry.v1beta1.RegistryAPI/GetStorageProvider',
    requestStream: false,
    responseStream: false,
    requestType: cs3_storage_registry_v1beta1_registry_api_pb.GetStorageProviderRequest,
    responseType: cs3_storage_registry_v1beta1_registry_api_pb.GetStorageProviderResponse,
    requestSerialize: serialize_cs3_storage_registry_v1beta1_GetStorageProviderRequest,
    requestDeserialize: deserialize_cs3_storage_registry_v1beta1_GetStorageProviderRequest,
    responseSerialize: serialize_cs3_storage_registry_v1beta1_GetStorageProviderResponse,
    responseDeserialize: deserialize_cs3_storage_registry_v1beta1_GetStorageProviderResponse,
  },
  // Returns a list of the available storage providers known by this registry.
listStorageProviders: {
    path: '/cs3.storage.registry.v1beta1.RegistryAPI/ListStorageProviders',
    requestStream: false,
    responseStream: false,
    requestType: cs3_storage_registry_v1beta1_registry_api_pb.ListStorageProvidersRequest,
    responseType: cs3_storage_registry_v1beta1_registry_api_pb.ListStorageProvidersResponse,
    requestSerialize: serialize_cs3_storage_registry_v1beta1_ListStorageProvidersRequest,
    requestDeserialize: deserialize_cs3_storage_registry_v1beta1_ListStorageProvidersRequest,
    responseSerialize: serialize_cs3_storage_registry_v1beta1_ListStorageProvidersResponse,
    responseDeserialize: deserialize_cs3_storage_registry_v1beta1_ListStorageProvidersResponse,
  },
  // Gets the user home storage provider.
getHome: {
    path: '/cs3.storage.registry.v1beta1.RegistryAPI/GetHome',
    requestStream: false,
    responseStream: false,
    requestType: cs3_storage_registry_v1beta1_registry_api_pb.GetHomeRequest,
    responseType: cs3_storage_registry_v1beta1_registry_api_pb.GetHomeResponse,
    requestSerialize: serialize_cs3_storage_registry_v1beta1_GetHomeRequest,
    requestDeserialize: deserialize_cs3_storage_registry_v1beta1_GetHomeRequest,
    responseSerialize: serialize_cs3_storage_registry_v1beta1_GetHomeResponse,
    responseDeserialize: deserialize_cs3_storage_registry_v1beta1_GetHomeResponse,
  },
  // TODO(labkode): missing methods for adding and removing a storage provider
// with different visibility levels (system-wide, user-wide, group-wide)...
};

exports.RegistryAPIClient = grpc.makeGenericClientConstructor(RegistryAPIService);
