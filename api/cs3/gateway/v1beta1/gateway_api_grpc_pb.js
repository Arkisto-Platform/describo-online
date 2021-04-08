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
var cs3_gateway_v1beta1_gateway_api_pb = require('../../../cs3/gateway/v1beta1/gateway_api_pb.js');
var cs3_app_provider_v1beta1_provider_api_pb = require('../../../cs3/app/provider/v1beta1/provider_api_pb.js');
var cs3_app_registry_v1beta1_registry_api_pb = require('../../../cs3/app/registry/v1beta1/registry_api_pb.js');
var cs3_auth_registry_v1beta1_registry_api_pb = require('../../../cs3/auth/registry/v1beta1/registry_api_pb.js');
var cs3_identity_user_v1beta1_resources_pb = require('../../../cs3/identity/user/v1beta1/resources_pb.js');
var cs3_identity_user_v1beta1_user_api_pb = require('../../../cs3/identity/user/v1beta1/user_api_pb.js');
var cs3_ocm_core_v1beta1_ocm_core_api_pb = require('../../../cs3/ocm/core/v1beta1/ocm_core_api_pb.js');
var cs3_ocm_invite_v1beta1_invite_api_pb = require('../../../cs3/ocm/invite/v1beta1/invite_api_pb.js');
var cs3_ocm_provider_v1beta1_provider_api_pb = require('../../../cs3/ocm/provider/v1beta1/provider_api_pb.js');
var cs3_preferences_v1beta1_preferences_api_pb = require('../../../cs3/preferences/v1beta1/preferences_api_pb.js');
var cs3_rpc_v1beta1_status_pb = require('../../../cs3/rpc/v1beta1/status_pb.js');
var cs3_sharing_collaboration_v1beta1_collaboration_api_pb = require('../../../cs3/sharing/collaboration/v1beta1/collaboration_api_pb.js');
var cs3_sharing_link_v1beta1_link_api_pb = require('../../../cs3/sharing/link/v1beta1/link_api_pb.js');
var cs3_sharing_ocm_v1beta1_ocm_api_pb = require('../../../cs3/sharing/ocm/v1beta1/ocm_api_pb.js');
var cs3_storage_provider_v1beta1_provider_api_pb = require('../../../cs3/storage/provider/v1beta1/provider_api_pb.js');
var cs3_storage_provider_v1beta1_resources_pb = require('../../../cs3/storage/provider/v1beta1/resources_pb.js');
var cs3_tx_v1beta1_tx_api_pb = require('../../../cs3/tx/v1beta1/tx_api_pb.js');
var cs3_types_v1beta1_types_pb = require('../../../cs3/types/v1beta1/types_pb.js');

function serialize_cs3_app_provider_v1beta1_OpenFileInAppProviderResponse(arg) {
  if (!(arg instanceof cs3_app_provider_v1beta1_provider_api_pb.OpenFileInAppProviderResponse)) {
    throw new Error('Expected argument of type cs3.app.provider.v1beta1.OpenFileInAppProviderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_app_provider_v1beta1_OpenFileInAppProviderResponse(buffer_arg) {
  return cs3_app_provider_v1beta1_provider_api_pb.OpenFileInAppProviderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

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

function serialize_cs3_auth_registry_v1beta1_ListAuthProvidersRequest(arg) {
  if (!(arg instanceof cs3_auth_registry_v1beta1_registry_api_pb.ListAuthProvidersRequest)) {
    throw new Error('Expected argument of type cs3.auth.registry.v1beta1.ListAuthProvidersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_auth_registry_v1beta1_ListAuthProvidersRequest(buffer_arg) {
  return cs3_auth_registry_v1beta1_registry_api_pb.ListAuthProvidersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_gateway_v1beta1_AuthenticateRequest(arg) {
  if (!(arg instanceof cs3_gateway_v1beta1_gateway_api_pb.AuthenticateRequest)) {
    throw new Error('Expected argument of type cs3.gateway.v1beta1.AuthenticateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_gateway_v1beta1_AuthenticateRequest(buffer_arg) {
  return cs3_gateway_v1beta1_gateway_api_pb.AuthenticateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_gateway_v1beta1_AuthenticateResponse(arg) {
  if (!(arg instanceof cs3_gateway_v1beta1_gateway_api_pb.AuthenticateResponse)) {
    throw new Error('Expected argument of type cs3.gateway.v1beta1.AuthenticateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_gateway_v1beta1_AuthenticateResponse(buffer_arg) {
  return cs3_gateway_v1beta1_gateway_api_pb.AuthenticateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_gateway_v1beta1_GetQuotaRequest(arg) {
  if (!(arg instanceof cs3_gateway_v1beta1_gateway_api_pb.GetQuotaRequest)) {
    throw new Error('Expected argument of type cs3.gateway.v1beta1.GetQuotaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_gateway_v1beta1_GetQuotaRequest(buffer_arg) {
  return cs3_gateway_v1beta1_gateway_api_pb.GetQuotaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_gateway_v1beta1_InitiateFileDownloadResponse(arg) {
  if (!(arg instanceof cs3_gateway_v1beta1_gateway_api_pb.InitiateFileDownloadResponse)) {
    throw new Error('Expected argument of type cs3.gateway.v1beta1.InitiateFileDownloadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_gateway_v1beta1_InitiateFileDownloadResponse(buffer_arg) {
  return cs3_gateway_v1beta1_gateway_api_pb.InitiateFileDownloadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_gateway_v1beta1_InitiateFileUploadResponse(arg) {
  if (!(arg instanceof cs3_gateway_v1beta1_gateway_api_pb.InitiateFileUploadResponse)) {
    throw new Error('Expected argument of type cs3.gateway.v1beta1.InitiateFileUploadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_gateway_v1beta1_InitiateFileUploadResponse(buffer_arg) {
  return cs3_gateway_v1beta1_gateway_api_pb.InitiateFileUploadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_gateway_v1beta1_ListAuthProvidersResponse(arg) {
  if (!(arg instanceof cs3_gateway_v1beta1_gateway_api_pb.ListAuthProvidersResponse)) {
    throw new Error('Expected argument of type cs3.gateway.v1beta1.ListAuthProvidersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_gateway_v1beta1_ListAuthProvidersResponse(buffer_arg) {
  return cs3_gateway_v1beta1_gateway_api_pb.ListAuthProvidersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_gateway_v1beta1_ListRecycleRequest(arg) {
  if (!(arg instanceof cs3_gateway_v1beta1_gateway_api_pb.ListRecycleRequest)) {
    throw new Error('Expected argument of type cs3.gateway.v1beta1.ListRecycleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_gateway_v1beta1_ListRecycleRequest(buffer_arg) {
  return cs3_gateway_v1beta1_gateway_api_pb.ListRecycleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_gateway_v1beta1_ListRecycleStreamRequest(arg) {
  if (!(arg instanceof cs3_gateway_v1beta1_gateway_api_pb.ListRecycleStreamRequest)) {
    throw new Error('Expected argument of type cs3.gateway.v1beta1.ListRecycleStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_gateway_v1beta1_ListRecycleStreamRequest(buffer_arg) {
  return cs3_gateway_v1beta1_gateway_api_pb.ListRecycleStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_gateway_v1beta1_OpenFileInAppProviderRequest(arg) {
  if (!(arg instanceof cs3_gateway_v1beta1_gateway_api_pb.OpenFileInAppProviderRequest)) {
    throw new Error('Expected argument of type cs3.gateway.v1beta1.OpenFileInAppProviderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_gateway_v1beta1_OpenFileInAppProviderRequest(buffer_arg) {
  return cs3_gateway_v1beta1_gateway_api_pb.OpenFileInAppProviderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_gateway_v1beta1_PurgeRecycleRequest(arg) {
  if (!(arg instanceof cs3_gateway_v1beta1_gateway_api_pb.PurgeRecycleRequest)) {
    throw new Error('Expected argument of type cs3.gateway.v1beta1.PurgeRecycleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_gateway_v1beta1_PurgeRecycleRequest(buffer_arg) {
  return cs3_gateway_v1beta1_gateway_api_pb.PurgeRecycleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_gateway_v1beta1_WhoAmIRequest(arg) {
  if (!(arg instanceof cs3_gateway_v1beta1_gateway_api_pb.WhoAmIRequest)) {
    throw new Error('Expected argument of type cs3.gateway.v1beta1.WhoAmIRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_gateway_v1beta1_WhoAmIRequest(buffer_arg) {
  return cs3_gateway_v1beta1_gateway_api_pb.WhoAmIRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_gateway_v1beta1_WhoAmIResponse(arg) {
  if (!(arg instanceof cs3_gateway_v1beta1_gateway_api_pb.WhoAmIResponse)) {
    throw new Error('Expected argument of type cs3.gateway.v1beta1.WhoAmIResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_gateway_v1beta1_WhoAmIResponse(buffer_arg) {
  return cs3_gateway_v1beta1_gateway_api_pb.WhoAmIResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

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

function serialize_cs3_ocm_core_v1beta1_CreateOCMCoreShareRequest(arg) {
  if (!(arg instanceof cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareRequest)) {
    throw new Error('Expected argument of type cs3.ocm.core.v1beta1.CreateOCMCoreShareRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_core_v1beta1_CreateOCMCoreShareRequest(buffer_arg) {
  return cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_core_v1beta1_CreateOCMCoreShareResponse(arg) {
  if (!(arg instanceof cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareResponse)) {
    throw new Error('Expected argument of type cs3.ocm.core.v1beta1.CreateOCMCoreShareResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_core_v1beta1_CreateOCMCoreShareResponse(buffer_arg) {
  return cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_invite_v1beta1_AcceptInviteRequest(arg) {
  if (!(arg instanceof cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteRequest)) {
    throw new Error('Expected argument of type cs3.ocm.invite.v1beta1.AcceptInviteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_invite_v1beta1_AcceptInviteRequest(buffer_arg) {
  return cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_invite_v1beta1_AcceptInviteResponse(arg) {
  if (!(arg instanceof cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteResponse)) {
    throw new Error('Expected argument of type cs3.ocm.invite.v1beta1.AcceptInviteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_invite_v1beta1_AcceptInviteResponse(buffer_arg) {
  return cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_invite_v1beta1_ForwardInviteRequest(arg) {
  if (!(arg instanceof cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteRequest)) {
    throw new Error('Expected argument of type cs3.ocm.invite.v1beta1.ForwardInviteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_invite_v1beta1_ForwardInviteRequest(buffer_arg) {
  return cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_invite_v1beta1_ForwardInviteResponse(arg) {
  if (!(arg instanceof cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteResponse)) {
    throw new Error('Expected argument of type cs3.ocm.invite.v1beta1.ForwardInviteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_invite_v1beta1_ForwardInviteResponse(buffer_arg) {
  return cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_invite_v1beta1_GenerateInviteTokenRequest(arg) {
  if (!(arg instanceof cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenRequest)) {
    throw new Error('Expected argument of type cs3.ocm.invite.v1beta1.GenerateInviteTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_invite_v1beta1_GenerateInviteTokenRequest(buffer_arg) {
  return cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_invite_v1beta1_GenerateInviteTokenResponse(arg) {
  if (!(arg instanceof cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenResponse)) {
    throw new Error('Expected argument of type cs3.ocm.invite.v1beta1.GenerateInviteTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_invite_v1beta1_GenerateInviteTokenResponse(buffer_arg) {
  return cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_invite_v1beta1_GetRemoteUserRequest(arg) {
  if (!(arg instanceof cs3_ocm_invite_v1beta1_invite_api_pb.GetRemoteUserRequest)) {
    throw new Error('Expected argument of type cs3.ocm.invite.v1beta1.GetRemoteUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_invite_v1beta1_GetRemoteUserRequest(buffer_arg) {
  return cs3_ocm_invite_v1beta1_invite_api_pb.GetRemoteUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_invite_v1beta1_GetRemoteUserResponse(arg) {
  if (!(arg instanceof cs3_ocm_invite_v1beta1_invite_api_pb.GetRemoteUserResponse)) {
    throw new Error('Expected argument of type cs3.ocm.invite.v1beta1.GetRemoteUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_invite_v1beta1_GetRemoteUserResponse(buffer_arg) {
  return cs3_ocm_invite_v1beta1_invite_api_pb.GetRemoteUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

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

function serialize_cs3_sharing_collaboration_v1beta1_CreateShareRequest(arg) {
  if (!(arg instanceof cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareRequest)) {
    throw new Error('Expected argument of type cs3.sharing.collaboration.v1beta1.CreateShareRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_collaboration_v1beta1_CreateShareRequest(buffer_arg) {
  return cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_collaboration_v1beta1_CreateShareResponse(arg) {
  if (!(arg instanceof cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareResponse)) {
    throw new Error('Expected argument of type cs3.sharing.collaboration.v1beta1.CreateShareResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_collaboration_v1beta1_CreateShareResponse(buffer_arg) {
  return cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_collaboration_v1beta1_GetReceivedShareRequest(arg) {
  if (!(arg instanceof cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareRequest)) {
    throw new Error('Expected argument of type cs3.sharing.collaboration.v1beta1.GetReceivedShareRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_collaboration_v1beta1_GetReceivedShareRequest(buffer_arg) {
  return cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_collaboration_v1beta1_GetReceivedShareResponse(arg) {
  if (!(arg instanceof cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareResponse)) {
    throw new Error('Expected argument of type cs3.sharing.collaboration.v1beta1.GetReceivedShareResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_collaboration_v1beta1_GetReceivedShareResponse(buffer_arg) {
  return cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_collaboration_v1beta1_GetShareRequest(arg) {
  if (!(arg instanceof cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareRequest)) {
    throw new Error('Expected argument of type cs3.sharing.collaboration.v1beta1.GetShareRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_collaboration_v1beta1_GetShareRequest(buffer_arg) {
  return cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_collaboration_v1beta1_GetShareResponse(arg) {
  if (!(arg instanceof cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareResponse)) {
    throw new Error('Expected argument of type cs3.sharing.collaboration.v1beta1.GetShareResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_collaboration_v1beta1_GetShareResponse(buffer_arg) {
  return cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_collaboration_v1beta1_ListReceivedSharesRequest(arg) {
  if (!(arg instanceof cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesRequest)) {
    throw new Error('Expected argument of type cs3.sharing.collaboration.v1beta1.ListReceivedSharesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_collaboration_v1beta1_ListReceivedSharesRequest(buffer_arg) {
  return cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_collaboration_v1beta1_ListReceivedSharesResponse(arg) {
  if (!(arg instanceof cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesResponse)) {
    throw new Error('Expected argument of type cs3.sharing.collaboration.v1beta1.ListReceivedSharesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_collaboration_v1beta1_ListReceivedSharesResponse(buffer_arg) {
  return cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_collaboration_v1beta1_ListSharesRequest(arg) {
  if (!(arg instanceof cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesRequest)) {
    throw new Error('Expected argument of type cs3.sharing.collaboration.v1beta1.ListSharesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_collaboration_v1beta1_ListSharesRequest(buffer_arg) {
  return cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_collaboration_v1beta1_ListSharesResponse(arg) {
  if (!(arg instanceof cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesResponse)) {
    throw new Error('Expected argument of type cs3.sharing.collaboration.v1beta1.ListSharesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_collaboration_v1beta1_ListSharesResponse(buffer_arg) {
  return cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_collaboration_v1beta1_RemoveShareRequest(arg) {
  if (!(arg instanceof cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareRequest)) {
    throw new Error('Expected argument of type cs3.sharing.collaboration.v1beta1.RemoveShareRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_collaboration_v1beta1_RemoveShareRequest(buffer_arg) {
  return cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_collaboration_v1beta1_RemoveShareResponse(arg) {
  if (!(arg instanceof cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareResponse)) {
    throw new Error('Expected argument of type cs3.sharing.collaboration.v1beta1.RemoveShareResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_collaboration_v1beta1_RemoveShareResponse(buffer_arg) {
  return cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_collaboration_v1beta1_UpdateReceivedShareRequest(arg) {
  if (!(arg instanceof cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareRequest)) {
    throw new Error('Expected argument of type cs3.sharing.collaboration.v1beta1.UpdateReceivedShareRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_collaboration_v1beta1_UpdateReceivedShareRequest(buffer_arg) {
  return cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_collaboration_v1beta1_UpdateReceivedShareResponse(arg) {
  if (!(arg instanceof cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareResponse)) {
    throw new Error('Expected argument of type cs3.sharing.collaboration.v1beta1.UpdateReceivedShareResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_collaboration_v1beta1_UpdateReceivedShareResponse(buffer_arg) {
  return cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_collaboration_v1beta1_UpdateShareRequest(arg) {
  if (!(arg instanceof cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareRequest)) {
    throw new Error('Expected argument of type cs3.sharing.collaboration.v1beta1.UpdateShareRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_collaboration_v1beta1_UpdateShareRequest(buffer_arg) {
  return cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_sharing_collaboration_v1beta1_UpdateShareResponse(arg) {
  if (!(arg instanceof cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareResponse)) {
    throw new Error('Expected argument of type cs3.sharing.collaboration.v1beta1.UpdateShareResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_sharing_collaboration_v1beta1_UpdateShareResponse(buffer_arg) {
  return cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

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

function serialize_cs3_storage_provider_v1beta1_InitiateFileUploadRequest(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileUploadRequest)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.InitiateFileUploadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_InitiateFileUploadRequest(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileUploadRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_cs3_storage_provider_v1beta1_ListRecycleResponse(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleResponse)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.ListRecycleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_ListRecycleResponse(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_cs3_storage_provider_v1beta1_PurgeRecycleResponse(arg) {
  if (!(arg instanceof cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleResponse)) {
    throw new Error('Expected argument of type cs3.storage.provider.v1beta1.PurgeRecycleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_storage_provider_v1beta1_PurgeRecycleResponse(buffer_arg) {
  return cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_cs3_tx_v1beta1_CancelTransferRequest(arg) {
  if (!(arg instanceof cs3_tx_v1beta1_tx_api_pb.CancelTransferRequest)) {
    throw new Error('Expected argument of type cs3.tx.v1beta1.CancelTransferRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_tx_v1beta1_CancelTransferRequest(buffer_arg) {
  return cs3_tx_v1beta1_tx_api_pb.CancelTransferRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_tx_v1beta1_CancelTransferResponse(arg) {
  if (!(arg instanceof cs3_tx_v1beta1_tx_api_pb.CancelTransferResponse)) {
    throw new Error('Expected argument of type cs3.tx.v1beta1.CancelTransferResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_tx_v1beta1_CancelTransferResponse(buffer_arg) {
  return cs3_tx_v1beta1_tx_api_pb.CancelTransferResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_tx_v1beta1_CreateTransferRequest(arg) {
  if (!(arg instanceof cs3_tx_v1beta1_tx_api_pb.CreateTransferRequest)) {
    throw new Error('Expected argument of type cs3.tx.v1beta1.CreateTransferRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_tx_v1beta1_CreateTransferRequest(buffer_arg) {
  return cs3_tx_v1beta1_tx_api_pb.CreateTransferRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_tx_v1beta1_CreateTransferResponse(arg) {
  if (!(arg instanceof cs3_tx_v1beta1_tx_api_pb.CreateTransferResponse)) {
    throw new Error('Expected argument of type cs3.tx.v1beta1.CreateTransferResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_tx_v1beta1_CreateTransferResponse(buffer_arg) {
  return cs3_tx_v1beta1_tx_api_pb.CreateTransferResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_tx_v1beta1_GetTransferStatusRequest(arg) {
  if (!(arg instanceof cs3_tx_v1beta1_tx_api_pb.GetTransferStatusRequest)) {
    throw new Error('Expected argument of type cs3.tx.v1beta1.GetTransferStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_tx_v1beta1_GetTransferStatusRequest(buffer_arg) {
  return cs3_tx_v1beta1_tx_api_pb.GetTransferStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_tx_v1beta1_GetTransferStatusResponse(arg) {
  if (!(arg instanceof cs3_tx_v1beta1_tx_api_pb.GetTransferStatusResponse)) {
    throw new Error('Expected argument of type cs3.tx.v1beta1.GetTransferStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_tx_v1beta1_GetTransferStatusResponse(buffer_arg) {
  return cs3_tx_v1beta1_tx_api_pb.GetTransferStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Gateway API
// 
// The Gateway API is the only API exposed direclty to end-clients.
// It is a facade API that all clients should connect to.
// Other APIS like the StorageProviderAPI are internal APIS.
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
var GatewayAPIService = exports.GatewayAPIService = {
  // Authenticates a user.
authenticate: {
    path: '/cs3.gateway.v1beta1.GatewayAPI/Authenticate',
    requestStream: false,
    responseStream: false,
    requestType: cs3_gateway_v1beta1_gateway_api_pb.AuthenticateRequest,
    responseType: cs3_gateway_v1beta1_gateway_api_pb.AuthenticateResponse,
    requestSerialize: serialize_cs3_gateway_v1beta1_AuthenticateRequest,
    requestDeserialize: deserialize_cs3_gateway_v1beta1_AuthenticateRequest,
    responseSerialize: serialize_cs3_gateway_v1beta1_AuthenticateResponse,
    responseDeserialize: deserialize_cs3_gateway_v1beta1_AuthenticateResponse,
  },
  // WhoAmI returns the information for a user.
whoAmI: {
    path: '/cs3.gateway.v1beta1.GatewayAPI/WhoAmI',
    requestStream: false,
    responseStream: false,
    requestType: cs3_gateway_v1beta1_gateway_api_pb.WhoAmIRequest,
    responseType: cs3_gateway_v1beta1_gateway_api_pb.WhoAmIResponse,
    requestSerialize: serialize_cs3_gateway_v1beta1_WhoAmIRequest,
    requestDeserialize: deserialize_cs3_gateway_v1beta1_WhoAmIRequest,
    responseSerialize: serialize_cs3_gateway_v1beta1_WhoAmIResponse,
    responseDeserialize: deserialize_cs3_gateway_v1beta1_WhoAmIResponse,
  },
  // *****************************************************************/
// ************************ STORAGE PROVIDER ***********************/
// *****************************************************************/
// Creates a new resource of type container.
// MUST return CODE_PRECONDITION_FAILED if the container
// cannot be created at the specified reference.
createContainer: {
    path: '/cs3.gateway.v1beta1.GatewayAPI/CreateContainer',
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
    path: '/cs3.gateway.v1beta1.GatewayAPI/Delete',
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
    path: '/cs3.gateway.v1beta1.GatewayAPI/GetPath',
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
    path: '/cs3.gateway.v1beta1.GatewayAPI/GetQuota',
    requestStream: false,
    responseStream: false,
    requestType: cs3_gateway_v1beta1_gateway_api_pb.GetQuotaRequest,
    responseType: cs3_storage_provider_v1beta1_provider_api_pb.GetQuotaResponse,
    requestSerialize: serialize_cs3_gateway_v1beta1_GetQuotaRequest,
    requestDeserialize: deserialize_cs3_gateway_v1beta1_GetQuotaRequest,
    responseSerialize: serialize_cs3_storage_provider_v1beta1_GetQuotaResponse,
    responseDeserialize: deserialize_cs3_storage_provider_v1beta1_GetQuotaResponse,
  },
  // Initiates the download of a file using an
// out-of-band data transfer mechanism.
initiateFileDownload: {
    path: '/cs3.gateway.v1beta1.GatewayAPI/InitiateFileDownload',
    requestStream: false,
    responseStream: false,
    requestType: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileDownloadRequest,
    responseType: cs3_gateway_v1beta1_gateway_api_pb.InitiateFileDownloadResponse,
    requestSerialize: serialize_cs3_storage_provider_v1beta1_InitiateFileDownloadRequest,
    requestDeserialize: deserialize_cs3_storage_provider_v1beta1_InitiateFileDownloadRequest,
    responseSerialize: serialize_cs3_gateway_v1beta1_InitiateFileDownloadResponse,
    responseDeserialize: deserialize_cs3_gateway_v1beta1_InitiateFileDownloadResponse,
  },
  // Initiates the upload of a file using an
// out-of-band data transfer mechanism.
initiateFileUpload: {
    path: '/cs3.gateway.v1beta1.GatewayAPI/InitiateFileUpload',
    requestStream: false,
    responseStream: false,
    requestType: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileUploadRequest,
    responseType: cs3_gateway_v1beta1_gateway_api_pb.InitiateFileUploadResponse,
    requestSerialize: serialize_cs3_storage_provider_v1beta1_InitiateFileUploadRequest,
    requestDeserialize: deserialize_cs3_storage_provider_v1beta1_InitiateFileUploadRequest,
    responseSerialize: serialize_cs3_gateway_v1beta1_InitiateFileUploadResponse,
    responseDeserialize: deserialize_cs3_gateway_v1beta1_InitiateFileUploadResponse,
  },
  // Returns a stream of resource informations
// for the provided reference.
// MUST return CODE_NOT_FOUND if the reference does not exists.
listContainerStream: {
    path: '/cs3.gateway.v1beta1.GatewayAPI/ListContainerStream',
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
    path: '/cs3.gateway.v1beta1.GatewayAPI/ListContainer',
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
    path: '/cs3.gateway.v1beta1.GatewayAPI/ListFileVersions',
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
    path: '/cs3.gateway.v1beta1.GatewayAPI/ListRecycleStream',
    requestStream: false,
    responseStream: true,
    requestType: cs3_gateway_v1beta1_gateway_api_pb.ListRecycleStreamRequest,
    responseType: cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleStreamResponse,
    requestSerialize: serialize_cs3_gateway_v1beta1_ListRecycleStreamRequest,
    requestDeserialize: deserialize_cs3_gateway_v1beta1_ListRecycleStreamRequest,
    responseSerialize: serialize_cs3_storage_provider_v1beta1_ListRecycleStreamResponse,
    responseDeserialize: deserialize_cs3_storage_provider_v1beta1_ListRecycleStreamResponse,
  },
  // Returns a list of recycle items for this storage provider.
// MUST return CODE_OK and MUST return an empty list if no recycle items are available.
listRecycle: {
    path: '/cs3.gateway.v1beta1.GatewayAPI/ListRecycle',
    requestStream: false,
    responseStream: false,
    requestType: cs3_gateway_v1beta1_gateway_api_pb.ListRecycleRequest,
    responseType: cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleResponse,
    requestSerialize: serialize_cs3_gateway_v1beta1_ListRecycleRequest,
    requestDeserialize: deserialize_cs3_gateway_v1beta1_ListRecycleRequest,
    responseSerialize: serialize_cs3_storage_provider_v1beta1_ListRecycleResponse,
    responseDeserialize: deserialize_cs3_storage_provider_v1beta1_ListRecycleResponse,
  },
  // Moves a resource from one reference to another.
// MUST return CODE_NOT_FOUND if any of the references do not exist.
// MUST return CODE_PRECONDITION_FAILED if the source reference
// cannot be moved to the destination reference.
move: {
    path: '/cs3.gateway.v1beta1.GatewayAPI/Move',
    requestStream: false,
    responseStream: false,
    requestType: cs3_storage_provider_v1beta1_provider_api_pb.MoveRequest,
    responseType: cs3_storage_provider_v1beta1_provider_api_pb.MoveResponse,
    requestSerialize: serialize_cs3_storage_provider_v1beta1_MoveRequest,
    requestDeserialize: deserialize_cs3_storage_provider_v1beta1_MoveRequest,
    responseSerialize: serialize_cs3_storage_provider_v1beta1_MoveResponse,
    responseDeserialize: deserialize_cs3_storage_provider_v1beta1_MoveResponse,
  },
  // Permanently removes a recycle item from the recycle.
// This operation is irrevocable.
// MUST return CODE_NOT_FOUND if the recycle item id does not exist.
purgeRecycle: {
    path: '/cs3.gateway.v1beta1.GatewayAPI/PurgeRecycle',
    requestStream: false,
    responseStream: false,
    requestType: cs3_gateway_v1beta1_gateway_api_pb.PurgeRecycleRequest,
    responseType: cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleResponse,
    requestSerialize: serialize_cs3_gateway_v1beta1_PurgeRecycleRequest,
    requestDeserialize: deserialize_cs3_gateway_v1beta1_PurgeRecycleRequest,
    responseSerialize: serialize_cs3_storage_provider_v1beta1_PurgeRecycleResponse,
    responseDeserialize: deserialize_cs3_storage_provider_v1beta1_PurgeRecycleResponse,
  },
  // Restores a file version for the provided reference.
// MUST return CODE_NOT_FOUND if the reference does not exist.
// MUST return CODE_NOT_FOUND if the version does not exist.
restoreFileVersion: {
    path: '/cs3.gateway.v1beta1.GatewayAPI/RestoreFileVersion',
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
    path: '/cs3.gateway.v1beta1.GatewayAPI/RestoreRecycleItem',
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
    path: '/cs3.gateway.v1beta1.GatewayAPI/Stat',
    requestStream: false,
    responseStream: false,
    requestType: cs3_storage_provider_v1beta1_provider_api_pb.StatRequest,
    responseType: cs3_storage_provider_v1beta1_provider_api_pb.StatResponse,
    requestSerialize: serialize_cs3_storage_provider_v1beta1_StatRequest,
    requestDeserialize: deserialize_cs3_storage_provider_v1beta1_StatRequest,
    responseSerialize: serialize_cs3_storage_provider_v1beta1_StatResponse,
    responseDeserialize: deserialize_cs3_storage_provider_v1beta1_StatResponse,
  },
  // Creates a symlink to another resource.
createSymlink: {
    path: '/cs3.gateway.v1beta1.GatewayAPI/CreateSymlink',
    requestStream: false,
    responseStream: false,
    requestType: cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkRequest,
    responseType: cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkResponse,
    requestSerialize: serialize_cs3_storage_provider_v1beta1_CreateSymlinkRequest,
    requestDeserialize: deserialize_cs3_storage_provider_v1beta1_CreateSymlinkRequest,
    responseSerialize: serialize_cs3_storage_provider_v1beta1_CreateSymlinkResponse,
    responseDeserialize: deserialize_cs3_storage_provider_v1beta1_CreateSymlinkResponse,
  },
  // Sets arbitrary metadata into a storage resource.
// Arbitrary metadata is returned in a cs3.storage.provider.v1beta1.ResourceInfo.
setArbitraryMetadata: {
    path: '/cs3.gateway.v1beta1.GatewayAPI/SetArbitraryMetadata',
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
// Arbitrary metadata is returned in a cs3.storage.provider.v1beta1.ResourceInfo.
unsetArbitraryMetadata: {
    path: '/cs3.gateway.v1beta1.GatewayAPI/UnsetArbitraryMetadata',
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
    path: '/cs3.gateway.v1beta1.GatewayAPI/CreateHome',
    requestStream: false,
    responseStream: false,
    requestType: cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeRequest,
    responseType: cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeResponse,
    requestSerialize: serialize_cs3_storage_provider_v1beta1_CreateHomeRequest,
    requestDeserialize: deserialize_cs3_storage_provider_v1beta1_CreateHomeRequest,
    responseSerialize: serialize_cs3_storage_provider_v1beta1_CreateHomeResponse,
    responseDeserialize: deserialize_cs3_storage_provider_v1beta1_CreateHomeResponse,
  },
  // *****************************************************************/
// ************************ APP PROVIDER ********************/
// *****************************************************************/
// Returns the App provider URL, which lets the user open a file in the correct online document editor.
openFileInAppProvider: {
    path: '/cs3.gateway.v1beta1.GatewayAPI/OpenFileInAppProvider',
    requestStream: false,
    responseStream: false,
    requestType: cs3_gateway_v1beta1_gateway_api_pb.OpenFileInAppProviderRequest,
    responseType: cs3_app_provider_v1beta1_provider_api_pb.OpenFileInAppProviderResponse,
    requestSerialize: serialize_cs3_gateway_v1beta1_OpenFileInAppProviderRequest,
    requestDeserialize: deserialize_cs3_gateway_v1beta1_OpenFileInAppProviderRequest,
    responseSerialize: serialize_cs3_app_provider_v1beta1_OpenFileInAppProviderResponse,
    responseDeserialize: deserialize_cs3_app_provider_v1beta1_OpenFileInAppProviderResponse,
  },
  // *****************************************************************/
// ************************ USER SHARE PROVIDER ********************/
// *****************************************************************/
// Creates a new share.
// MUST return CODE_NOT_FOUND if the resource reference does not exist.
// MUST return CODE_ALREADY_EXISTS if the share already exists for the 4-tuple consisting of
// (owner, shared_resource, grantee).
// New shares MUST be created in the state SHARE_STATE_PENDING.
createShare: {
    path: '/cs3.gateway.v1beta1.GatewayAPI/CreateShare',
    requestStream: false,
    responseStream: false,
    requestType: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareRequest,
    responseType: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareResponse,
    requestSerialize: serialize_cs3_sharing_collaboration_v1beta1_CreateShareRequest,
    requestDeserialize: deserialize_cs3_sharing_collaboration_v1beta1_CreateShareRequest,
    responseSerialize: serialize_cs3_sharing_collaboration_v1beta1_CreateShareResponse,
    responseDeserialize: deserialize_cs3_sharing_collaboration_v1beta1_CreateShareResponse,
  },
  // Removes a share.
// MUST return CODE_NOT_FOUND if the share reference does not exist.
removeShare: {
    path: '/cs3.gateway.v1beta1.GatewayAPI/RemoveShare',
    requestStream: false,
    responseStream: false,
    requestType: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareRequest,
    responseType: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareResponse,
    requestSerialize: serialize_cs3_sharing_collaboration_v1beta1_RemoveShareRequest,
    requestDeserialize: deserialize_cs3_sharing_collaboration_v1beta1_RemoveShareRequest,
    responseSerialize: serialize_cs3_sharing_collaboration_v1beta1_RemoveShareResponse,
    responseDeserialize: deserialize_cs3_sharing_collaboration_v1beta1_RemoveShareResponse,
  },
  // Gets share information for a single share.
// MUST return CODE_NOT_FOUND if the share reference does not exist.
getShare: {
    path: '/cs3.gateway.v1beta1.GatewayAPI/GetShare',
    requestStream: false,
    responseStream: false,
    requestType: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareRequest,
    responseType: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareResponse,
    requestSerialize: serialize_cs3_sharing_collaboration_v1beta1_GetShareRequest,
    requestDeserialize: deserialize_cs3_sharing_collaboration_v1beta1_GetShareRequest,
    responseSerialize: serialize_cs3_sharing_collaboration_v1beta1_GetShareResponse,
    responseDeserialize: deserialize_cs3_sharing_collaboration_v1beta1_GetShareResponse,
  },
  // List the shares the authproviderenticated principal has created,
// both as owner and creator. If a filter is specified, only
// shares satisfying the filter MUST be returned.
listShares: {
    path: '/cs3.gateway.v1beta1.GatewayAPI/ListShares',
    requestStream: false,
    responseStream: false,
    requestType: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesRequest,
    responseType: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesResponse,
    requestSerialize: serialize_cs3_sharing_collaboration_v1beta1_ListSharesRequest,
    requestDeserialize: deserialize_cs3_sharing_collaboration_v1beta1_ListSharesRequest,
    responseSerialize: serialize_cs3_sharing_collaboration_v1beta1_ListSharesResponse,
    responseDeserialize: deserialize_cs3_sharing_collaboration_v1beta1_ListSharesResponse,
  },
  // Updates a share.
// MUST return CODE_NOT_FOUND if the share reference does not exist.
updateShare: {
    path: '/cs3.gateway.v1beta1.GatewayAPI/UpdateShare',
    requestStream: false,
    responseStream: false,
    requestType: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareRequest,
    responseType: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareResponse,
    requestSerialize: serialize_cs3_sharing_collaboration_v1beta1_UpdateShareRequest,
    requestDeserialize: deserialize_cs3_sharing_collaboration_v1beta1_UpdateShareRequest,
    responseSerialize: serialize_cs3_sharing_collaboration_v1beta1_UpdateShareResponse,
    responseDeserialize: deserialize_cs3_sharing_collaboration_v1beta1_UpdateShareResponse,
  },
  // List all shares the authproviderenticated principal has received.
listReceivedShares: {
    path: '/cs3.gateway.v1beta1.GatewayAPI/ListReceivedShares',
    requestStream: false,
    responseStream: false,
    requestType: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesRequest,
    responseType: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesResponse,
    requestSerialize: serialize_cs3_sharing_collaboration_v1beta1_ListReceivedSharesRequest,
    requestDeserialize: deserialize_cs3_sharing_collaboration_v1beta1_ListReceivedSharesRequest,
    responseSerialize: serialize_cs3_sharing_collaboration_v1beta1_ListReceivedSharesResponse,
    responseDeserialize: deserialize_cs3_sharing_collaboration_v1beta1_ListReceivedSharesResponse,
  },
  // Update the received share to change the share state or the display name.
// MUST return CODE_NOT_FOUND if the share reference does not exist.
updateReceivedShare: {
    path: '/cs3.gateway.v1beta1.GatewayAPI/UpdateReceivedShare',
    requestStream: false,
    responseStream: false,
    requestType: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareRequest,
    responseType: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareResponse,
    requestSerialize: serialize_cs3_sharing_collaboration_v1beta1_UpdateReceivedShareRequest,
    requestDeserialize: deserialize_cs3_sharing_collaboration_v1beta1_UpdateReceivedShareRequest,
    responseSerialize: serialize_cs3_sharing_collaboration_v1beta1_UpdateReceivedShareResponse,
    responseDeserialize: deserialize_cs3_sharing_collaboration_v1beta1_UpdateReceivedShareResponse,
  },
  // Get the information for the given received share reference.
// MUST return CODE_NOT_FOUND if the received share reference does not exist.
getReceivedShare: {
    path: '/cs3.gateway.v1beta1.GatewayAPI/GetReceivedShare',
    requestStream: false,
    responseStream: false,
    requestType: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareRequest,
    responseType: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareResponse,
    requestSerialize: serialize_cs3_sharing_collaboration_v1beta1_GetReceivedShareRequest,
    requestDeserialize: deserialize_cs3_sharing_collaboration_v1beta1_GetReceivedShareRequest,
    responseSerialize: serialize_cs3_sharing_collaboration_v1beta1_GetReceivedShareResponse,
    responseDeserialize: deserialize_cs3_sharing_collaboration_v1beta1_GetReceivedShareResponse,
  },
  // *****************************************************************/
// ************************ PREFERENCES ***************************/
// *****************************************************************/
// Maps the key-value pair.
setKey: {
    path: '/cs3.gateway.v1beta1.GatewayAPI/SetKey',
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
    path: '/cs3.gateway.v1beta1.GatewayAPI/GetKey',
    requestStream: false,
    responseStream: false,
    requestType: cs3_preferences_v1beta1_preferences_api_pb.GetKeyRequest,
    responseType: cs3_preferences_v1beta1_preferences_api_pb.GetKeyResponse,
    requestSerialize: serialize_cs3_preferences_v1beta1_GetKeyRequest,
    requestDeserialize: deserialize_cs3_preferences_v1beta1_GetKeyRequest,
    responseSerialize: serialize_cs3_preferences_v1beta1_GetKeyResponse,
    responseDeserialize: deserialize_cs3_preferences_v1beta1_GetKeyResponse,
  },
  // *****************************************************************/
// ************************ PUBLIC SHARE ***************************/
// *****************************************************************/
// Creates a new share.
// MUST return CODE_NOT_FOUND if the resource reference does not exist.
// MUST return CODE_ALREADY_EXISTS if the share already exists for the 4-tuple consisting of
// (owner, shared_resource, grantee).
// New shares MUST be created in the state SHARE_STATE_PENDING.
createPublicShare: {
    path: '/cs3.gateway.v1beta1.GatewayAPI/CreatePublicShare',
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
    path: '/cs3.gateway.v1beta1.GatewayAPI/RemovePublicShare',
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
    path: '/cs3.gateway.v1beta1.GatewayAPI/GetPublicShare',
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
    path: '/cs3.gateway.v1beta1.GatewayAPI/GetPublicShareByToken',
    requestStream: false,
    responseStream: false,
    requestType: cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareByTokenRequest,
    responseType: cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareByTokenResponse,
    requestSerialize: serialize_cs3_sharing_link_v1beta1_GetPublicShareByTokenRequest,
    requestDeserialize: deserialize_cs3_sharing_link_v1beta1_GetPublicShareByTokenRequest,
    responseSerialize: serialize_cs3_sharing_link_v1beta1_GetPublicShareByTokenResponse,
    responseDeserialize: deserialize_cs3_sharing_link_v1beta1_GetPublicShareByTokenResponse,
  },
  // List the shares the authproviderenticated principal has created,
// both as owner and creator. If a filter is specified, only
// shares satisfying the filter MUST be returned.
listPublicShares: {
    path: '/cs3.gateway.v1beta1.GatewayAPI/ListPublicShares',
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
    path: '/cs3.gateway.v1beta1.GatewayAPI/UpdatePublicShare',
    requestStream: false,
    responseStream: false,
    requestType: cs3_sharing_link_v1beta1_link_api_pb.UpdatePublicShareRequest,
    responseType: cs3_sharing_link_v1beta1_link_api_pb.UpdatePublicShareResponse,
    requestSerialize: serialize_cs3_sharing_link_v1beta1_UpdatePublicShareRequest,
    requestDeserialize: deserialize_cs3_sharing_link_v1beta1_UpdatePublicShareRequest,
    responseSerialize: serialize_cs3_sharing_link_v1beta1_UpdatePublicShareResponse,
    responseDeserialize: deserialize_cs3_sharing_link_v1beta1_UpdatePublicShareResponse,
  },
  // *****************************************************************/
// ************************ OCM SHARE PROVIDER *********************/
// *****************************************************************/
// Creates a new ocm share.
// MUST return CODE_NOT_FOUND if the resource reference does not exist.
// MUST return CODE_ALREADY_EXISTS if the share already exists for the 4-tuple consisting of
// (owner, shared_resource, grantee).
// New shares MUST be created in the state SHARE_STATE_PENDING.
createOCMShare: {
    path: '/cs3.gateway.v1beta1.GatewayAPI/CreateOCMShare',
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
    path: '/cs3.gateway.v1beta1.GatewayAPI/RemoveOCMShare',
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
    path: '/cs3.gateway.v1beta1.GatewayAPI/GetOCMShare',
    requestStream: false,
    responseStream: false,
    requestType: cs3_sharing_ocm_v1beta1_ocm_api_pb.GetOCMShareRequest,
    responseType: cs3_sharing_ocm_v1beta1_ocm_api_pb.GetOCMShareResponse,
    requestSerialize: serialize_cs3_sharing_ocm_v1beta1_GetOCMShareRequest,
    requestDeserialize: deserialize_cs3_sharing_ocm_v1beta1_GetOCMShareRequest,
    responseSerialize: serialize_cs3_sharing_ocm_v1beta1_GetOCMShareResponse,
    responseDeserialize: deserialize_cs3_sharing_ocm_v1beta1_GetOCMShareResponse,
  },
  // List the shares the authproviderenticated principal has created,
// both as owner and creator. If a filter is specified, only
// shares satisfying the filter MUST be returned.
listOCMShares: {
    path: '/cs3.gateway.v1beta1.GatewayAPI/ListOCMShares',
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
    path: '/cs3.gateway.v1beta1.GatewayAPI/UpdateOCMShare',
    requestStream: false,
    responseStream: false,
    requestType: cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateOCMShareRequest,
    responseType: cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateOCMShareResponse,
    requestSerialize: serialize_cs3_sharing_ocm_v1beta1_UpdateOCMShareRequest,
    requestDeserialize: deserialize_cs3_sharing_ocm_v1beta1_UpdateOCMShareRequest,
    responseSerialize: serialize_cs3_sharing_ocm_v1beta1_UpdateOCMShareResponse,
    responseDeserialize: deserialize_cs3_sharing_ocm_v1beta1_UpdateOCMShareResponse,
  },
  // List all shares the authproviderenticated principal has received.
listReceivedOCMShares: {
    path: '/cs3.gateway.v1beta1.GatewayAPI/ListReceivedOCMShares',
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
    path: '/cs3.gateway.v1beta1.GatewayAPI/UpdateReceivedOCMShare',
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
    path: '/cs3.gateway.v1beta1.GatewayAPI/GetReceivedOCMShare',
    requestStream: false,
    responseStream: false,
    requestType: cs3_sharing_ocm_v1beta1_ocm_api_pb.GetReceivedOCMShareRequest,
    responseType: cs3_sharing_ocm_v1beta1_ocm_api_pb.GetReceivedOCMShareResponse,
    requestSerialize: serialize_cs3_sharing_ocm_v1beta1_GetReceivedOCMShareRequest,
    requestDeserialize: deserialize_cs3_sharing_ocm_v1beta1_GetReceivedOCMShareRequest,
    responseSerialize: serialize_cs3_sharing_ocm_v1beta1_GetReceivedOCMShareResponse,
    responseDeserialize: deserialize_cs3_sharing_ocm_v1beta1_GetReceivedOCMShareResponse,
  },
  // *****************************************************************/
// ************************ APP REGISTRY ****************************/
// *****************************************************************/
// Returns the app providers that are capable of handling this resource info.
// MUST return CODE_NOT_FOUND if no providers are available.
getAppProviders: {
    path: '/cs3.gateway.v1beta1.GatewayAPI/GetAppProviders',
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
    path: '/cs3.gateway.v1beta1.GatewayAPI/ListAppProviders',
    requestStream: false,
    responseStream: false,
    requestType: cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersRequest,
    responseType: cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersResponse,
    requestSerialize: serialize_cs3_app_registry_v1beta1_ListAppProvidersRequest,
    requestDeserialize: deserialize_cs3_app_registry_v1beta1_ListAppProvidersRequest,
    responseSerialize: serialize_cs3_app_registry_v1beta1_ListAppProvidersResponse,
    responseDeserialize: deserialize_cs3_app_registry_v1beta1_ListAppProvidersResponse,
  },
  // *****************************************************************/
// ************************ USER PROVIDER **************************/
// *****************************************************************/
// Gets the information about a user by the user id.
getUser: {
    path: '/cs3.gateway.v1beta1.GatewayAPI/GetUser',
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
    path: '/cs3.gateway.v1beta1.GatewayAPI/GetUserByClaim',
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
    path: '/cs3.gateway.v1beta1.GatewayAPI/GetUserGroups',
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
    path: '/cs3.gateway.v1beta1.GatewayAPI/IsInGroup',
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
    path: '/cs3.gateway.v1beta1.GatewayAPI/FindUsers',
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
    path: '/cs3.gateway.v1beta1.GatewayAPI/FindGroups',
    requestStream: false,
    responseStream: false,
    requestType: cs3_identity_user_v1beta1_user_api_pb.FindGroupsRequest,
    responseType: cs3_identity_user_v1beta1_user_api_pb.FindGroupsResponse,
    requestSerialize: serialize_cs3_identity_user_v1beta1_FindGroupsRequest,
    requestDeserialize: deserialize_cs3_identity_user_v1beta1_FindGroupsRequest,
    responseSerialize: serialize_cs3_identity_user_v1beta1_FindGroupsResponse,
    responseDeserialize: deserialize_cs3_identity_user_v1beta1_FindGroupsResponse,
  },
  // *****************************************************************/
// ************************ AUTH REGISTRY  **************************/
// *****************************************************************/
// Returns a list of the available auth providers known by this registry.
listAuthProviders: {
    path: '/cs3.gateway.v1beta1.GatewayAPI/ListAuthProviders',
    requestStream: false,
    responseStream: false,
    requestType: cs3_auth_registry_v1beta1_registry_api_pb.ListAuthProvidersRequest,
    responseType: cs3_gateway_v1beta1_gateway_api_pb.ListAuthProvidersResponse,
    requestSerialize: serialize_cs3_auth_registry_v1beta1_ListAuthProvidersRequest,
    requestDeserialize: deserialize_cs3_auth_registry_v1beta1_ListAuthProvidersRequest,
    responseSerialize: serialize_cs3_gateway_v1beta1_ListAuthProvidersResponse,
    responseDeserialize: deserialize_cs3_gateway_v1beta1_ListAuthProvidersResponse,
  },
  // ************************ STORAGE REGISTRY ** ********************/
// *****************************************************************/
// Returns the home path for the given authenticated user.
// When a user has access to multiple storage providers, one of them is the home.
getHome: {
    path: '/cs3.gateway.v1beta1.GatewayAPI/GetHome',
    requestStream: false,
    responseStream: false,
    requestType: cs3_storage_provider_v1beta1_provider_api_pb.GetHomeRequest,
    responseType: cs3_storage_provider_v1beta1_provider_api_pb.GetHomeResponse,
    requestSerialize: serialize_cs3_storage_provider_v1beta1_GetHomeRequest,
    requestDeserialize: deserialize_cs3_storage_provider_v1beta1_GetHomeRequest,
    responseSerialize: serialize_cs3_storage_provider_v1beta1_GetHomeResponse,
    responseDeserialize: deserialize_cs3_storage_provider_v1beta1_GetHomeResponse,
  },
  // *****************************************************************/
// ************************ OCM INVITE MANAGER *********************/
// *****************************************************************/
// Generates a new token for the user with a validity of 24 hours.
generateInviteToken: {
    path: '/cs3.gateway.v1beta1.GatewayAPI/GenerateInviteToken',
    requestStream: false,
    responseStream: false,
    requestType: cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenRequest,
    responseType: cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenResponse,
    requestSerialize: serialize_cs3_ocm_invite_v1beta1_GenerateInviteTokenRequest,
    requestDeserialize: deserialize_cs3_ocm_invite_v1beta1_GenerateInviteTokenRequest,
    responseSerialize: serialize_cs3_ocm_invite_v1beta1_GenerateInviteTokenResponse,
    responseDeserialize: deserialize_cs3_ocm_invite_v1beta1_GenerateInviteTokenResponse,
  },
  // Forwards a received invite to the sync'n'share system provider.
forwardInvite: {
    path: '/cs3.gateway.v1beta1.GatewayAPI/ForwardInvite',
    requestStream: false,
    responseStream: false,
    requestType: cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteRequest,
    responseType: cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteResponse,
    requestSerialize: serialize_cs3_ocm_invite_v1beta1_ForwardInviteRequest,
    requestDeserialize: deserialize_cs3_ocm_invite_v1beta1_ForwardInviteRequest,
    responseSerialize: serialize_cs3_ocm_invite_v1beta1_ForwardInviteResponse,
    responseDeserialize: deserialize_cs3_ocm_invite_v1beta1_ForwardInviteResponse,
  },
  // Completes an invitation acceptance.
acceptInvite: {
    path: '/cs3.gateway.v1beta1.GatewayAPI/AcceptInvite',
    requestStream: false,
    responseStream: false,
    requestType: cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteRequest,
    responseType: cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteResponse,
    requestSerialize: serialize_cs3_ocm_invite_v1beta1_AcceptInviteRequest,
    requestDeserialize: deserialize_cs3_ocm_invite_v1beta1_AcceptInviteRequest,
    responseSerialize: serialize_cs3_ocm_invite_v1beta1_AcceptInviteResponse,
    responseDeserialize: deserialize_cs3_ocm_invite_v1beta1_AcceptInviteResponse,
  },
  // Retrieves details about a remote user who has accepted an invite to share.
getRemoteUser: {
    path: '/cs3.gateway.v1beta1.GatewayAPI/GetRemoteUser',
    requestStream: false,
    responseStream: false,
    requestType: cs3_ocm_invite_v1beta1_invite_api_pb.GetRemoteUserRequest,
    responseType: cs3_ocm_invite_v1beta1_invite_api_pb.GetRemoteUserResponse,
    requestSerialize: serialize_cs3_ocm_invite_v1beta1_GetRemoteUserRequest,
    requestDeserialize: deserialize_cs3_ocm_invite_v1beta1_GetRemoteUserRequest,
    responseSerialize: serialize_cs3_ocm_invite_v1beta1_GetRemoteUserResponse,
    responseDeserialize: deserialize_cs3_ocm_invite_v1beta1_GetRemoteUserResponse,
  },
  // *****************************************************************/
// ******************** OCM PROVIDER AUTHORIZER ********************/
// *****************************************************************/
// Check if a given system provider is registered in the mesh or not.
// MUST return CODE_UNAUTHENTICATED if the system is not registered
isProviderAllowed: {
    path: '/cs3.gateway.v1beta1.GatewayAPI/IsProviderAllowed',
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
    path: '/cs3.gateway.v1beta1.GatewayAPI/GetInfoByDomain',
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
    path: '/cs3.gateway.v1beta1.GatewayAPI/ListAllProviders',
    requestStream: false,
    responseStream: false,
    requestType: cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersRequest,
    responseType: cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersResponse,
    requestSerialize: serialize_cs3_ocm_provider_v1beta1_ListAllProvidersRequest,
    requestDeserialize: deserialize_cs3_ocm_provider_v1beta1_ListAllProvidersRequest,
    responseSerialize: serialize_cs3_ocm_provider_v1beta1_ListAllProvidersResponse,
    responseDeserialize: deserialize_cs3_ocm_provider_v1beta1_ListAllProvidersResponse,
  },
  // *****************************************************************/
// **************************** OCM CORE ***************************/
// *****************************************************************/
// Creates a new ocm share.
createOCMCoreShare: {
    path: '/cs3.gateway.v1beta1.GatewayAPI/CreateOCMCoreShare',
    requestStream: false,
    responseStream: false,
    requestType: cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareRequest,
    responseType: cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareResponse,
    requestSerialize: serialize_cs3_ocm_core_v1beta1_CreateOCMCoreShareRequest,
    requestDeserialize: deserialize_cs3_ocm_core_v1beta1_CreateOCMCoreShareRequest,
    responseSerialize: serialize_cs3_ocm_core_v1beta1_CreateOCMCoreShareResponse,
    responseDeserialize: deserialize_cs3_ocm_core_v1beta1_CreateOCMCoreShareResponse,
  },
  // *****************************************************************/
// ************************** FILE TRANSFER ************************/
// *****************************************************************/
// Returns a response containing a TxInfo (transfer info) object.
createTransfer: {
    path: '/cs3.gateway.v1beta1.GatewayAPI/CreateTransfer',
    requestStream: false,
    responseStream: false,
    requestType: cs3_tx_v1beta1_tx_api_pb.CreateTransferRequest,
    responseType: cs3_tx_v1beta1_tx_api_pb.CreateTransferResponse,
    requestSerialize: serialize_cs3_tx_v1beta1_CreateTransferRequest,
    requestDeserialize: deserialize_cs3_tx_v1beta1_CreateTransferRequest,
    responseSerialize: serialize_cs3_tx_v1beta1_CreateTransferResponse,
    responseDeserialize: deserialize_cs3_tx_v1beta1_CreateTransferResponse,
  },
  // Requests a transfer status.
getTransferStatus: {
    path: '/cs3.gateway.v1beta1.GatewayAPI/GetTransferStatus',
    requestStream: false,
    responseStream: false,
    requestType: cs3_tx_v1beta1_tx_api_pb.GetTransferStatusRequest,
    responseType: cs3_tx_v1beta1_tx_api_pb.GetTransferStatusResponse,
    requestSerialize: serialize_cs3_tx_v1beta1_GetTransferStatusRequest,
    requestDeserialize: deserialize_cs3_tx_v1beta1_GetTransferStatusRequest,
    responseSerialize: serialize_cs3_tx_v1beta1_GetTransferStatusResponse,
    responseDeserialize: deserialize_cs3_tx_v1beta1_GetTransferStatusResponse,
  },
  // Requests to cancel a transfer.
cancelTransfer: {
    path: '/cs3.gateway.v1beta1.GatewayAPI/CancelTransfer',
    requestStream: false,
    responseStream: false,
    requestType: cs3_tx_v1beta1_tx_api_pb.CancelTransferRequest,
    responseType: cs3_tx_v1beta1_tx_api_pb.CancelTransferResponse,
    requestSerialize: serialize_cs3_tx_v1beta1_CancelTransferRequest,
    requestDeserialize: deserialize_cs3_tx_v1beta1_CancelTransferRequest,
    responseSerialize: serialize_cs3_tx_v1beta1_CancelTransferResponse,
    responseDeserialize: deserialize_cs3_tx_v1beta1_CancelTransferResponse,
  },
};

exports.GatewayAPIClient = grpc.makeGenericClientConstructor(GatewayAPIService);
// *****************************************************************/
// ************************ AUTH ******** **************************/
// *****************************************************************/
