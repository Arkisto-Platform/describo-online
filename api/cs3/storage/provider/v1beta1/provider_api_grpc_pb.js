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
var cs3_storage_provider_v1beta1_provider_api_pb = require('../../../../cs3/storage/provider/v1beta1/provider_api_pb.js');
var cs3_rpc_v1beta1_status_pb = require('../../../../cs3/rpc/v1beta1/status_pb.js');
var cs3_storage_provider_v1beta1_resources_pb = require('../../../../cs3/storage/provider/v1beta1/resources_pb.js');
var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js');

function serialize_cs3_storage_provider_v1beta1_AddGrantRequest(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.AddGrantRequest)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.AddGrantRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_AddGrantRequest(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.AddGrantRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_AddGrantResponse(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.AddGrantResponse)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.AddGrantResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_AddGrantResponse(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.AddGrantResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_CreateContainerRequest(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerRequest)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.CreateContainerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_CreateContainerRequest(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_CreateContainerResponse(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerResponse)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.CreateContainerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_CreateContainerResponse(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_CreateHomeRequest(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeRequest)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.CreateHomeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_CreateHomeRequest(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_CreateHomeResponse(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeResponse)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.CreateHomeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_CreateHomeResponse(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_CreateReferenceRequest(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.CreateReferenceRequest)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.CreateReferenceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_CreateReferenceRequest(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.CreateReferenceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_CreateReferenceResponse(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.CreateReferenceResponse)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.CreateReferenceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_CreateReferenceResponse(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.CreateReferenceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_CreateSymlinkRequest(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkRequest)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.CreateSymlinkRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_CreateSymlinkRequest(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_CreateSymlinkResponse(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkResponse)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.CreateSymlinkResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_CreateSymlinkResponse(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_DeleteRequest(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.DeleteRequest)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.DeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_DeleteRequest(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.DeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_DeleteResponse(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.DeleteResponse)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.DeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_DeleteResponse(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.DeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_GetHomeRequest(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.GetHomeRequest)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.GetHomeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_GetHomeRequest(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.GetHomeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_GetHomeResponse(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.GetHomeResponse)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.GetHomeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_GetHomeResponse(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.GetHomeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_GetPathRequest(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.GetPathRequest)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.GetPathRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_GetPathRequest(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.GetPathRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_GetPathResponse(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.GetPathResponse)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.GetPathResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_GetPathResponse(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.GetPathResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_GetQuotaRequest(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.GetQuotaRequest)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.GetQuotaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_GetQuotaRequest(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.GetQuotaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_GetQuotaResponse(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.GetQuotaResponse)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.GetQuotaResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_GetQuotaResponse(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.GetQuotaResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_InitiateFileDownloadRequest(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileDownloadRequest)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.InitiateFileDownloadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_InitiateFileDownloadRequest(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileDownloadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_InitiateFileDownloadResponse(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileDownloadResponse)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.InitiateFileDownloadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_InitiateFileDownloadResponse(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileDownloadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_InitiateFileUploadRequest(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileUploadRequest)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.InitiateFileUploadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_InitiateFileUploadRequest(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileUploadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_InitiateFileUploadResponse(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileUploadResponse)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.InitiateFileUploadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_InitiateFileUploadResponse(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileUploadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_ListContainerRequest(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.ListContainerRequest)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.ListContainerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_ListContainerRequest(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.ListContainerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_ListContainerResponse(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.ListContainerResponse)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.ListContainerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_ListContainerResponse(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.ListContainerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_ListContainerStreamRequest(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamRequest)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.ListContainerStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_ListContainerStreamRequest(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_ListContainerStreamResponse(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamResponse)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.ListContainerStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_ListContainerStreamResponse(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_ListFileVersionsRequest(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsRequest)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.ListFileVersionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_ListFileVersionsRequest(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_ListFileVersionsResponse(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsResponse)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.ListFileVersionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_ListFileVersionsResponse(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_ListGrantsRequest(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.ListGrantsRequest)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.ListGrantsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_ListGrantsRequest(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.ListGrantsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_ListGrantsResponse(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.ListGrantsResponse)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.ListGrantsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_ListGrantsResponse(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.ListGrantsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_ListRecycleRequest(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleRequest)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.ListRecycleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_ListRecycleRequest(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_ListRecycleResponse(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleResponse)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.ListRecycleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_ListRecycleResponse(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_ListRecycleStreamRequest(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleStreamRequest)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.ListRecycleStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_ListRecycleStreamRequest(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_ListRecycleStreamResponse(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleStreamResponse)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.ListRecycleStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_ListRecycleStreamResponse(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_MoveRequest(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.MoveRequest)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.MoveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_MoveRequest(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.MoveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_MoveResponse(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.MoveResponse)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.MoveResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_MoveResponse(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.MoveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_PurgeRecycleRequest(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleRequest)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.PurgeRecycleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_PurgeRecycleRequest(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_PurgeRecycleResponse(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleResponse)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.PurgeRecycleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_PurgeRecycleResponse(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_RemoveGrantRequest(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.RemoveGrantRequest)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.RemoveGrantRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_RemoveGrantRequest(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.RemoveGrantRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_RemoveGrantResponse(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.RemoveGrantResponse)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.RemoveGrantResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_RemoveGrantResponse(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.RemoveGrantResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_RestoreFileVersionRequest(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionRequest)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.RestoreFileVersionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_RestoreFileVersionRequest(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_RestoreFileVersionResponse(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionResponse)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.RestoreFileVersionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_RestoreFileVersionResponse(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_RestoreRecycleItemRequest(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemRequest)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.RestoreRecycleItemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_RestoreRecycleItemRequest(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_RestoreRecycleItemResponse(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemResponse)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.RestoreRecycleItemResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_RestoreRecycleItemResponse(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_SetArbitraryMetadataRequest(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataRequest)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_SetArbitraryMetadataRequest(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_SetArbitraryMetadataResponse(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataResponse)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_SetArbitraryMetadataResponse(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_StatRequest(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.StatRequest)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.StatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_StatRequest(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.StatRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_StatResponse(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.StatResponse)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.StatResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_StatResponse(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.StatResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_UnsetArbitraryMetadataRequest(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataRequest)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_UnsetArbitraryMetadataRequest(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_UnsetArbitraryMetadataResponse(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataResponse)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_UnsetArbitraryMetadataResponse(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_UpdateGrantRequest(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.UpdateGrantRequest)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.UpdateGrantRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_UpdateGrantRequest(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.UpdateGrantRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_storage_provider_v1beta1_UpdateGrantResponse(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.UpdateGrantResponse)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.UpdateGrantResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_UpdateGrantResponse(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.UpdateGrantResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Storage Provider API
// 
// The Storage Provider API is meant to manipulate storage
// resources in the underlying storage system behind the service.
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
  // Adds a new grant for the provided reference.
// MUST return CODE_NOT_FOUND if the reference does not exist
addGrant: {
    path: '/cs3.storage.provider.v1beta1.ProviderAPI/AddGrant',
    requestStream: false,
    responseStream: false,
    requestType: cs3_storage_provider_v1beta1_provider_api_pb.AddGrantRequest,
    responseType: cs3_storage_provider_v1beta1_provider_api_pb.AddGrantResponse,
    requestSerialize: serialize_cs3_storage_provider_v1beta1_AddGrantRequest,
    requestDeserialize: deserialize_cs3_storage_provider_v1beta1_AddGrantRequest,
    responseSerialize: serialize_cs3_storage_provider_v1beta1_AddGrantResponse,
    responseDeserialize: deserialize_cs3_storage_provider_v1beta1_AddGrantResponse,
  },
  // Creates a new resource of type container.
// MUST return CODE_PRECONDITION_FAILED if the container
// cannot be created at the specified reference.
createContainer: {
    path: '/cs3.storage.provider.v1beta1.ProviderAPI/CreateContainer',
    requestStream: false,
    responseStream: false,
    requestType: cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerRequest,
    responseType: cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerResponse,
    requestSerialize: serialize_cs3_storage_provider_v1beta1_CreateContainerRequest,
    requestDeserialize: deserialize_cs3_storage_provider_v1beta1_CreateContainerRequest,
    responseSerialize: serialize_cs3_storage_provider_v1beta1_CreateContainerResponse,
    responseDeserialize: deserialize_cs3_storage_provider_v1beta1_CreateContainerResponse,
  },
  // Deletes a resource.
// If a resource specifies the non-empty container (directory, ...),
// then the entire directory is deleted recursively.
// If a resource specifies a reference or symlink type, only the reference is removed (not the target).
// MUST return CODE_NOT_FOUND if the reference does not exist.
delete: {
    path: '/cs3.storage.provider.v1beta1.ProviderAPI/Delete',
    requestStream: false,
    responseStream: false,
    requestType: cs3_storage_provider_v1beta1_provider_api_pb.DeleteRequest,
    responseType: cs3_storage_provider_v1beta1_provider_api_pb.DeleteResponse,
    requestSerialize: serialize_cs3_storage_provider_v1beta1_DeleteRequest,
    requestDeserialize: deserialize_cs3_storage_provider_v1beta1_DeleteRequest,
    responseSerialize: serialize_cs3_storage_provider_v1beta1_DeleteResponse,
    responseDeserialize: deserialize_cs3_storage_provider_v1beta1_DeleteResponse,
  },
  // Returns the path reference for
// the provided resource id reference.
// MUST return CODE_NOT_FOUND if the reference does not exist
getPath: {
    path: '/cs3.storage.provider.v1beta1.ProviderAPI/GetPath',
    requestStream: false,
    responseStream: false,
    requestType: cs3_storage_provider_v1beta1_provider_api_pb.GetPathRequest,
    responseType: cs3_storage_provider_v1beta1_provider_api_pb.GetPathResponse,
    requestSerialize: serialize_cs3_storage_provider_v1beta1_GetPathRequest,
    requestDeserialize: deserialize_cs3_storage_provider_v1beta1_GetPathRequest,
    responseSerialize: serialize_cs3_storage_provider_v1beta1_GetPathResponse,
    responseDeserialize: deserialize_cs3_storage_provider_v1beta1_GetPathResponse,
  },
  // Returns the quota available under the provided
// reference.
// MUST return CODE_NOT_FOUND if the reference does not exist
// MUST return CODE_RESOURCE_EXHAUSTED on exceeded quota limits.
getQuota: {
    path: '/cs3.storage.provider.v1beta1.ProviderAPI/GetQuota',
    requestStream: false,
    responseStream: false,
    requestType: cs3_storage_provider_v1beta1_provider_api_pb.GetQuotaRequest,
    responseType: cs3_storage_provider_v1beta1_provider_api_pb.GetQuotaResponse,
    requestSerialize: serialize_cs3_storage_provider_v1beta1_GetQuotaRequest,
    requestDeserialize: deserialize_cs3_storage_provider_v1beta1_GetQuotaRequest,
    responseSerialize: serialize_cs3_storage_provider_v1beta1_GetQuotaResponse,
    responseDeserialize: deserialize_cs3_storage_provider_v1beta1_GetQuotaResponse,
  },
  // Initiates the download of a file using an
// out-of-band data transfer mechanism.
initiateFileDownload: {
    path: '/cs3.storage.provider.v1beta1.ProviderAPI/InitiateFileDownload',
    requestStream: false,
    responseStream: false,
    requestType: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileDownloadRequest,
    responseType: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileDownloadResponse,
    requestSerialize: serialize_cs3_storage_provider_v1beta1_InitiateFileDownloadRequest,
    requestDeserialize: deserialize_cs3_storage_provider_v1beta1_InitiateFileDownloadRequest,
    responseSerialize: serialize_cs3_storage_provider_v1beta1_InitiateFileDownloadResponse,
    responseDeserialize: deserialize_cs3_storage_provider_v1beta1_InitiateFileDownloadResponse,
  },
  // Initiates the upload of a file using an
// out-of-band data transfer mechanism.
initiateFileUpload: {
    path: '/cs3.storage.provider.v1beta1.ProviderAPI/InitiateFileUpload',
    requestStream: false,
    responseStream: false,
    requestType: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileUploadRequest,
    responseType: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileUploadResponse,
    requestSerialize: serialize_cs3_storage_provider_v1beta1_InitiateFileUploadRequest,
    requestDeserialize: deserialize_cs3_storage_provider_v1beta1_InitiateFileUploadRequest,
    responseSerialize: serialize_cs3_storage_provider_v1beta1_InitiateFileUploadResponse,
    responseDeserialize: deserialize_cs3_storage_provider_v1beta1_InitiateFileUploadResponse,
  },
  // Returns the list of grants for the provided reference.
// MUST return CODE_NOT_FOUND if the reference does not exists.
listGrants: {
    path: '/cs3.storage.provider.v1beta1.ProviderAPI/ListGrants',
    requestStream: false,
    responseStream: false,
    requestType: cs3_storage_provider_v1beta1_provider_api_pb.ListGrantsRequest,
    responseType: cs3_storage_provider_v1beta1_provider_api_pb.ListGrantsResponse,
    requestSerialize: serialize_cs3_storage_provider_v1beta1_ListGrantsRequest,
    requestDeserialize: deserialize_cs3_storage_provider_v1beta1_ListGrantsRequest,
    responseSerialize: serialize_cs3_storage_provider_v1beta1_ListGrantsResponse,
    responseDeserialize: deserialize_cs3_storage_provider_v1beta1_ListGrantsResponse,
  },
  // Returns a stream of resource informations
// for the provided reference.
// MUST return CODE_NOT_FOUND if the reference does not exists.
listContainerStream: {
    path: '/cs3.storage.provider.v1beta1.ProviderAPI/ListContainerStream',
    requestStream: false,
    responseStream: true,
    requestType: cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamRequest,
    responseType: cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamResponse,
    requestSerialize: serialize_cs3_storage_provider_v1beta1_ListContainerStreamRequest,
    requestDeserialize: deserialize_cs3_storage_provider_v1beta1_ListContainerStreamRequest,
    responseSerialize: serialize_cs3_storage_provider_v1beta1_ListContainerStreamResponse,
    responseDeserialize: deserialize_cs3_storage_provider_v1beta1_ListContainerStreamResponse,
  },
  // Returns a list of resource information
// for the provided reference.
// MUST return CODE_NOT_FOUND if the reference does not exists.
listContainer: {
    path: '/cs3.storage.provider.v1beta1.ProviderAPI/ListContainer',
    requestStream: false,
    responseStream: false,
    requestType: cs3_storage_provider_v1beta1_provider_api_pb.ListContainerRequest,
    responseType: cs3_storage_provider_v1beta1_provider_api_pb.ListContainerResponse,
    requestSerialize: serialize_cs3_storage_provider_v1beta1_ListContainerRequest,
    requestDeserialize: deserialize_cs3_storage_provider_v1beta1_ListContainerRequest,
    responseSerialize: serialize_cs3_storage_provider_v1beta1_ListContainerResponse,
    responseDeserialize: deserialize_cs3_storage_provider_v1beta1_ListContainerResponse,
  },
  // Returns a list of the versions for a resource of
// type file at the provided reference.
// MUST return CODE_NOT_FOUND if the reference does not exist.
// MUST return CODE_OK and MUST return an empty list if no versions are available.
// TODO: What code if resource not of type file?
listFileVersions: {
    path: '/cs3.storage.provider.v1beta1.ProviderAPI/ListFileVersions',
    requestStream: false,
    responseStream: false,
    requestType: cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsRequest,
    responseType: cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsResponse,
    requestSerialize: serialize_cs3_storage_provider_v1beta1_ListFileVersionsRequest,
    requestDeserialize: deserialize_cs3_storage_provider_v1beta1_ListFileVersionsRequest,
    responseSerialize: serialize_cs3_storage_provider_v1beta1_ListFileVersionsResponse,
    responseDeserialize: deserialize_cs3_storage_provider_v1beta1_ListFileVersionsResponse,
  },
  // Returns a stream of recycle items for this storage provider.
listRecycleStream: {
    path: '/cs3.storage.provider.v1beta1.ProviderAPI/ListRecycleStream',
    requestStream: false,
    responseStream: true,
    requestType: cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleStreamRequest,
    responseType: cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleStreamResponse,
    requestSerialize: serialize_cs3_storage_provider_v1beta1_ListRecycleStreamRequest,
    requestDeserialize: deserialize_cs3_storage_provider_v1beta1_ListRecycleStreamRequest,
    responseSerialize: serialize_cs3_storage_provider_v1beta1_ListRecycleStreamResponse,
    responseDeserialize: deserialize_cs3_storage_provider_v1beta1_ListRecycleStreamResponse,
  },
  // Returns a list of recycle items for this storage provider.
// MUST return CODE_OK and MUST return an empty list if no recycle items are available.
listRecycle: {
    path: '/cs3.storage.provider.v1beta1.ProviderAPI/ListRecycle',
    requestStream: false,
    responseStream: false,
    requestType: cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleRequest,
    responseType: cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleResponse,
    requestSerialize: serialize_cs3_storage_provider_v1beta1_ListRecycleRequest,
    requestDeserialize: deserialize_cs3_storage_provider_v1beta1_ListRecycleRequest,
    responseSerialize: serialize_cs3_storage_provider_v1beta1_ListRecycleResponse,
    responseDeserialize: deserialize_cs3_storage_provider_v1beta1_ListRecycleResponse,
  },
  // Moves a resource from one reference to another.
// MUST return CODE_NOT_FOUND if any of the references do not exist.
// MUST return CODE_PRECONDITION_FAILED if the source reference
// cannot be moved to the destination reference.
move: {
    path: '/cs3.storage.provider.v1beta1.ProviderAPI/Move',
    requestStream: false,
    responseStream: false,
    requestType: cs3_storage_provider_v1beta1_provider_api_pb.MoveRequest,
    responseType: cs3_storage_provider_v1beta1_provider_api_pb.MoveResponse,
    requestSerialize: serialize_cs3_storage_provider_v1beta1_MoveRequest,
    requestDeserialize: deserialize_cs3_storage_provider_v1beta1_MoveRequest,
    responseSerialize: serialize_cs3_storage_provider_v1beta1_MoveResponse,
    responseDeserialize: deserialize_cs3_storage_provider_v1beta1_MoveResponse,
  },
  // Removes a grant for the provided reference.
// This is recursive and atomic for directories. Does not follow references.
// MUST return CODE_NOT_FOUND if the reference does not exist.
// MUST return CODE_NOT_FOUND if grant does not exist.
removeGrant: {
    path: '/cs3.storage.provider.v1beta1.ProviderAPI/RemoveGrant',
    requestStream: false,
    responseStream: false,
    requestType: cs3_storage_provider_v1beta1_provider_api_pb.RemoveGrantRequest,
    responseType: cs3_storage_provider_v1beta1_provider_api_pb.RemoveGrantResponse,
    requestSerialize: serialize_cs3_storage_provider_v1beta1_RemoveGrantRequest,
    requestDeserialize: deserialize_cs3_storage_provider_v1beta1_RemoveGrantRequest,
    responseSerialize: serialize_cs3_storage_provider_v1beta1_RemoveGrantResponse,
    responseDeserialize: deserialize_cs3_storage_provider_v1beta1_RemoveGrantResponse,
  },
  // Permanently removes a recycle item from the recycle.
// This operation is irrevocable.
// MUST return CODE_NOT_FOUND if the recycle item id does not exist.
purgeRecycle: {
    path: '/cs3.storage.provider.v1beta1.ProviderAPI/PurgeRecycle',
    requestStream: false,
    responseStream: false,
    requestType: cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleRequest,
    responseType: cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleResponse,
    requestSerialize: serialize_cs3_storage_provider_v1beta1_PurgeRecycleRequest,
    requestDeserialize: deserialize_cs3_storage_provider_v1beta1_PurgeRecycleRequest,
    responseSerialize: serialize_cs3_storage_provider_v1beta1_PurgeRecycleResponse,
    responseDeserialize: deserialize_cs3_storage_provider_v1beta1_PurgeRecycleResponse,
  },
  // Restores a file version for the provided reference.
// MUST return CODE_NOT_FOUND if the reference does not exist.
// MUST return CODE_NOT_FOUND if the version does not exist.
restoreFileVersion: {
    path: '/cs3.storage.provider.v1beta1.ProviderAPI/RestoreFileVersion',
    requestStream: false,
    responseStream: false,
    requestType: cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionRequest,
    responseType: cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionResponse,
    requestSerialize: serialize_cs3_storage_provider_v1beta1_RestoreFileVersionRequest,
    requestDeserialize: deserialize_cs3_storage_provider_v1beta1_RestoreFileVersionRequest,
    responseSerialize: serialize_cs3_storage_provider_v1beta1_RestoreFileVersionResponse,
    responseDeserialize: deserialize_cs3_storage_provider_v1beta1_RestoreFileVersionResponse,
  },
  // Restores a recycle item from the recycle.
// MUST return CODE_NOT_FOUND if the recycle item id does not exist.
// MUST return CODE_PRECONDITION_FAILED if the restore_path is non-empty
// and the recycle item cannot be restored to the restore_path.
restoreRecycleItem: {
    path: '/cs3.storage.provider.v1beta1.ProviderAPI/RestoreRecycleItem',
    requestStream: false,
    responseStream: false,
    requestType: cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemRequest,
    responseType: cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemResponse,
    requestSerialize: serialize_cs3_storage_provider_v1beta1_RestoreRecycleItemRequest,
    requestDeserialize: deserialize_cs3_storage_provider_v1beta1_RestoreRecycleItemRequest,
    responseSerialize: serialize_cs3_storage_provider_v1beta1_RestoreRecycleItemResponse,
    responseDeserialize: deserialize_cs3_storage_provider_v1beta1_RestoreRecycleItemResponse,
  },
  // Returns the resource information at the provided reference.
// MUST return CODE_NOT_FOUND if the reference does not exist.
stat: {
    path: '/cs3.storage.provider.v1beta1.ProviderAPI/Stat',
    requestStream: false,
    responseStream: false,
    requestType: cs3_storage_provider_v1beta1_provider_api_pb.StatRequest,
    responseType: cs3_storage_provider_v1beta1_provider_api_pb.StatResponse,
    requestSerialize: serialize_cs3_storage_provider_v1beta1_StatRequest,
    requestDeserialize: deserialize_cs3_storage_provider_v1beta1_StatRequest,
    responseSerialize: serialize_cs3_storage_provider_v1beta1_StatResponse,
    responseDeserialize: deserialize_cs3_storage_provider_v1beta1_StatResponse,
  },
  // Updates an ACL for the provided reference.
// MUST return CODE_NOT_FOUND if the reference does not exist.
// MUST return CODE_PRECONDITION_FAILED if the acl does not exist.
updateGrant: {
    path: '/cs3.storage.provider.v1beta1.ProviderAPI/UpdateGrant',
    requestStream: false,
    responseStream: false,
    requestType: cs3_storage_provider_v1beta1_provider_api_pb.UpdateGrantRequest,
    responseType: cs3_storage_provider_v1beta1_provider_api_pb.UpdateGrantResponse,
    requestSerialize: serialize_cs3_storage_provider_v1beta1_UpdateGrantRequest,
    requestDeserialize: deserialize_cs3_storage_provider_v1beta1_UpdateGrantRequest,
    responseSerialize: serialize_cs3_storage_provider_v1beta1_UpdateGrantResponse,
    responseDeserialize: deserialize_cs3_storage_provider_v1beta1_UpdateGrantResponse,
  },
  // Creates a symlink to another resource.
createSymlink: {
    path: '/cs3.storage.provider.v1beta1.ProviderAPI/CreateSymlink',
    requestStream: false,
    responseStream: false,
    requestType: cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkRequest,
    responseType: cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkResponse,
    requestSerialize: serialize_cs3_storage_provider_v1beta1_CreateSymlinkRequest,
    requestDeserialize: deserialize_cs3_storage_provider_v1beta1_CreateSymlinkRequest,
    responseSerialize: serialize_cs3_storage_provider_v1beta1_CreateSymlinkResponse,
    responseDeserialize: deserialize_cs3_storage_provider_v1beta1_CreateSymlinkResponse,
  },
  // Creates a reference to another resource in the same cluster or another domain (OCM shares).
// The references resource can be accessed by the protocol specificied in the request message.
createReference: {
    path: '/cs3.storage.provider.v1beta1.ProviderAPI/CreateReference',
    requestStream: false,
    responseStream: false,
    requestType: cs3_storage_provider_v1beta1_provider_api_pb.CreateReferenceRequest,
    responseType: cs3_storage_provider_v1beta1_provider_api_pb.CreateReferenceResponse,
    requestSerialize: serialize_cs3_storage_provider_v1beta1_CreateReferenceRequest,
    requestDeserialize: deserialize_cs3_storage_provider_v1beta1_CreateReferenceRequest,
    responseSerialize: serialize_cs3_storage_provider_v1beta1_CreateReferenceResponse,
    responseDeserialize: deserialize_cs3_storage_provider_v1beta1_CreateReferenceResponse,
  },
  // Sets arbitrary metadata into a storage resource.
// Arbitrary metadata is returned in a cs3.storageprovider.v1beta1.ResourceInfo.
setArbitraryMetadata: {
    path: '/cs3.storage.provider.v1beta1.ProviderAPI/SetArbitraryMetadata',
    requestStream: false,
    responseStream: false,
    requestType: cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataRequest,
    responseType: cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataResponse,
    requestSerialize: serialize_cs3_storage_provider_v1beta1_SetArbitraryMetadataRequest,
    requestDeserialize: deserialize_cs3_storage_provider_v1beta1_SetArbitraryMetadataRequest,
    responseSerialize: serialize_cs3_storage_provider_v1beta1_SetArbitraryMetadataResponse,
    responseDeserialize: deserialize_cs3_storage_provider_v1beta1_SetArbitraryMetadataResponse,
  },
  // Unsets arbitrary metdata into a storage resource.
// Arbitrary metadata is returned in a cs3.storageprovider.v1beta1.ResourceInfo.
unsetArbitraryMetadata: {
    path: '/cs3.storage.provider.v1beta1.ProviderAPI/UnsetArbitraryMetadata',
    requestStream: false,
    responseStream: false,
    requestType: cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataRequest,
    responseType: cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataResponse,
    requestSerialize: serialize_cs3_storage_provider_v1beta1_UnsetArbitraryMetadataRequest,
    requestDeserialize: deserialize_cs3_storage_provider_v1beta1_UnsetArbitraryMetadataRequest,
    responseSerialize: serialize_cs3_storage_provider_v1beta1_UnsetArbitraryMetadataResponse,
    responseDeserialize: deserialize_cs3_storage_provider_v1beta1_UnsetArbitraryMetadataResponse,
  },
  // Creates the home directory for a user.
createHome: {
    path: '/cs3.storage.provider.v1beta1.ProviderAPI/CreateHome',
    requestStream: false,
    responseStream: false,
    requestType: cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeRequest,
    responseType: cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeResponse,
    requestSerialize: serialize_cs3_storage_provider_v1beta1_CreateHomeRequest,
    requestDeserialize: deserialize_cs3_storage_provider_v1beta1_CreateHomeRequest,
    responseSerialize: serialize_cs3_storage_provider_v1beta1_CreateHomeResponse,
    responseDeserialize: deserialize_cs3_storage_provider_v1beta1_CreateHomeResponse,
  },
  // Gets the home path for the user.
getHome: {
    path: '/cs3.storage.provider.v1beta1.ProviderAPI/GetHome',
    requestStream: false,
    responseStream: false,
    requestType: cs3_storage_provider_v1beta1_provider_api_pb.GetHomeRequest,
    responseType: cs3_storage_provider_v1beta1_provider_api_pb.GetHomeResponse,
    requestSerialize: serialize_cs3_storage_provider_v1beta1_GetHomeRequest,
    requestDeserialize: deserialize_cs3_storage_provider_v1beta1_GetHomeRequest,
    responseSerialize: serialize_cs3_storage_provider_v1beta1_GetHomeResponse,
    responseDeserialize: deserialize_cs3_storage_provider_v1beta1_GetHomeResponse,
  },
};

exports.ProviderAPIClient = grpc.makeGenericClientConstructor(ProviderAPIService);
