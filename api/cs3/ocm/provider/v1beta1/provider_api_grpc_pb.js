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
var cs3_ocm_provider_v1beta1_provider_api_pb = require('../../../../cs3/ocm/provider/v1beta1/provider_api_pb.js');
var cs3_ocm_provider_v1beta1_resources_pb = require('../../../../cs3/ocm/provider/v1beta1/resources_pb.js');
var cs3_rpc_v1beta1_status_pb = require('../../../../cs3/rpc/v1beta1/status_pb.js');
var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js');

function serialize_cs3_ocm_provider_v1beta1_GetInfoByDomainRequest(arg) {
  if (!(arg instanceof cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainRequest)) {
    throw new Error('Expected argument of type cs3.ocm.provider.v1beta1.GetInfoByDomainRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_provider_v1beta1_GetInfoByDomainRequest(buffer_arg) {
  return cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_provider_v1beta1_GetInfoByDomainResponse(arg) {
  if (!(arg instanceof cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainResponse)) {
    throw new Error('Expected argument of type cs3.ocm.provider.v1beta1.GetInfoByDomainResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_provider_v1beta1_GetInfoByDomainResponse(buffer_arg) {
  return cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_provider_v1beta1_IsProviderAllowedRequest(arg) {
  if (!(arg instanceof cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedRequest)) {
    throw new Error('Expected argument of type cs3.ocm.provider.v1beta1.IsProviderAllowedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_provider_v1beta1_IsProviderAllowedRequest(buffer_arg) {
  return cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_provider_v1beta1_IsProviderAllowedResponse(arg) {
  if (!(arg instanceof cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedResponse)) {
    throw new Error('Expected argument of type cs3.ocm.provider.v1beta1.IsProviderAllowedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_provider_v1beta1_IsProviderAllowedResponse(buffer_arg) {
  return cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_provider_v1beta1_ListAllProvidersRequest(arg) {
  if (!(arg instanceof cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersRequest)) {
    throw new Error('Expected argument of type cs3.ocm.provider.v1beta1.ListAllProvidersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_provider_v1beta1_ListAllProvidersRequest(buffer_arg) {
  return cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_provider_v1beta1_ListAllProvidersResponse(arg) {
  if (!(arg instanceof cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersResponse)) {
    throw new Error('Expected argument of type cs3.ocm.provider.v1beta1.ListAllProvidersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_provider_v1beta1_ListAllProvidersResponse(buffer_arg) {
  return cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// OCM Auth Provider API
// 
// The Auth Provider API is meant to authenticate a sync'n'share provider regsistered in the mesh.
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
  // Check if a given system provider is registered in the mesh or not.
// MUST return CODE_UNAUTHENTICATED if the system is not registered
isProviderAllowed: {
    path: '/cs3.ocm.provider.v1beta1.ProviderAPI/IsProviderAllowed',
    requestStream: false,
    responseStream: false,
    requestType: cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedRequest,
    responseType: cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedResponse,
    requestSerialize: serialize_cs3_ocm_provider_v1beta1_IsProviderAllowedRequest,
    requestDeserialize: deserialize_cs3_ocm_provider_v1beta1_IsProviderAllowedRequest,
    responseSerialize: serialize_cs3_ocm_provider_v1beta1_IsProviderAllowedResponse,
    responseDeserialize: deserialize_cs3_ocm_provider_v1beta1_IsProviderAllowedResponse,
  },
  // Get the information of the provider identified by a specific domain.
// MUST return CODE_NOT_FOUND if the sync'n'share system provider does not exist.
getInfoByDomain: {
    path: '/cs3.ocm.provider.v1beta1.ProviderAPI/GetInfoByDomain',
    requestStream: false,
    responseStream: false,
    requestType: cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainRequest,
    responseType: cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainResponse,
    requestSerialize: serialize_cs3_ocm_provider_v1beta1_GetInfoByDomainRequest,
    requestDeserialize: deserialize_cs3_ocm_provider_v1beta1_GetInfoByDomainRequest,
    responseSerialize: serialize_cs3_ocm_provider_v1beta1_GetInfoByDomainResponse,
    responseDeserialize: deserialize_cs3_ocm_provider_v1beta1_GetInfoByDomainResponse,
  },
  // Get the information of all the providers registered in the mesh.
listAllProviders: {
    path: '/cs3.ocm.provider.v1beta1.ProviderAPI/ListAllProviders',
    requestStream: false,
    responseStream: false,
    requestType: cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersRequest,
    responseType: cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersResponse,
    requestSerialize: serialize_cs3_ocm_provider_v1beta1_ListAllProvidersRequest,
    requestDeserialize: deserialize_cs3_ocm_provider_v1beta1_ListAllProvidersRequest,
    responseSerialize: serialize_cs3_ocm_provider_v1beta1_ListAllProvidersResponse,
    responseDeserialize: deserialize_cs3_ocm_provider_v1beta1_ListAllProvidersResponse,
  },
};

exports.ProviderAPIClient = grpc.makeGenericClientConstructor(ProviderAPIService);
