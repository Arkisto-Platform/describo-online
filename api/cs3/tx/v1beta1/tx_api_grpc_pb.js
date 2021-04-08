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
var cs3_tx_v1beta1_tx_api_pb = require('../../../cs3/tx/v1beta1/tx_api_pb.js');
var cs3_rpc_v1beta1_status_pb = require('../../../cs3/rpc/v1beta1/status_pb.js');
var cs3_storage_provider_v1beta1_resources_pb = require('../../../cs3/storage/provider/v1beta1/resources_pb.js');
var cs3_tx_v1beta1_resources_pb = require('../../../cs3/tx/v1beta1/resources_pb.js');
var cs3_types_v1beta1_types_pb = require('../../../cs3/types/v1beta1/types_pb.js');

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


// Tx API
// 
// The Tx API provides data transfer capabilities.
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
var TxAPIService = exports.TxAPIService = {
  // Creates (requests the destination to accept) a transfer.
// Returns a response containing a TxInfo (transfer info) object.
createTransfer: {
    path: '/cs3.tx.v1beta1.TxAPI/CreateTransfer',
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
    path: '/cs3.tx.v1beta1.TxAPI/GetTransferStatus',
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
    path: '/cs3.tx.v1beta1.TxAPI/CancelTransfer',
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

exports.TxAPIClient = grpc.makeGenericClientConstructor(TxAPIService);
