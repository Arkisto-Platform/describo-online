// source: cs3/storage/provider/v1beta1/provider_api.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var cs3_rpc_v1beta1_status_pb = require('../../../../cs3/rpc/v1beta1/status_pb.js');
goog.object.extend(proto, cs3_rpc_v1beta1_status_pb);
var cs3_storage_provider_v1beta1_resources_pb = require('../../../../cs3/storage/provider/v1beta1/resources_pb.js');
goog.object.extend(proto, cs3_storage_provider_v1beta1_resources_pb);
var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js');
goog.object.extend(proto, cs3_types_v1beta1_types_pb);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.AddGrantRequest', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.AddGrantResponse', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.CreateContainerRequest', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.CreateContainerResponse', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.CreateHomeRequest', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.CreateHomeResponse', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.CreateReferenceRequest', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.CreateReferenceResponse', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.CreateSymlinkRequest', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.CreateSymlinkResponse', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.DeleteRequest', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.DeleteResponse', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.GetHomeRequest', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.GetHomeResponse', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.GetPathRequest', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.GetPathResponse', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.GetQuotaRequest', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.GetQuotaResponse', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.ListContainerRequest', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.ListContainerResponse', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.ListGrantsRequest', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.ListGrantsResponse', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.ListRecycleRequest', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.ListRecycleResponse', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.MoveRequest', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.MoveResponse', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.PurgeRecycleRequest', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.RemoveGrantRequest', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.RemoveGrantResponse', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.StatRequest', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.StatResponse', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.UpdateGrantRequest', null, global);
goog.exportSymbol('proto.cs3.storage.provider.v1beta1.UpdateGrantResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.GetHomeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.GetHomeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.GetHomeRequest.displayName = 'proto.cs3.storage.provider.v1beta1.GetHomeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.GetHomeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.GetHomeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.GetHomeResponse.displayName = 'proto.cs3.storage.provider.v1beta1.GetHomeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.AddGrantRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.AddGrantRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.AddGrantRequest.displayName = 'proto.cs3.storage.provider.v1beta1.AddGrantRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.AddGrantResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.AddGrantResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.AddGrantResponse.displayName = 'proto.cs3.storage.provider.v1beta1.AddGrantResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.CreateContainerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.CreateContainerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.CreateContainerRequest.displayName = 'proto.cs3.storage.provider.v1beta1.CreateContainerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.CreateContainerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.CreateContainerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.CreateContainerResponse.displayName = 'proto.cs3.storage.provider.v1beta1.CreateContainerResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.DeleteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.DeleteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.DeleteRequest.displayName = 'proto.cs3.storage.provider.v1beta1.DeleteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.DeleteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.DeleteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.DeleteResponse.displayName = 'proto.cs3.storage.provider.v1beta1.DeleteResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.GetPathRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.GetPathRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.GetPathRequest.displayName = 'proto.cs3.storage.provider.v1beta1.GetPathRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.GetPathResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.GetPathResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.GetPathResponse.displayName = 'proto.cs3.storage.provider.v1beta1.GetPathResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.GetQuotaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.GetQuotaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.GetQuotaRequest.displayName = 'proto.cs3.storage.provider.v1beta1.GetQuotaRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.GetQuotaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.GetQuotaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.GetQuotaResponse.displayName = 'proto.cs3.storage.provider.v1beta1.GetQuotaResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.displayName = 'proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse.repeatedFields_, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse.displayName = 'proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest.displayName = 'proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse.displayName = 'proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.ListGrantsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.ListGrantsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.ListGrantsRequest.displayName = 'proto.cs3.storage.provider.v1beta1.ListGrantsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.ListGrantsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cs3.storage.provider.v1beta1.ListGrantsResponse.repeatedFields_, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.ListGrantsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.ListGrantsResponse.displayName = 'proto.cs3.storage.provider.v1beta1.ListGrantsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest.repeatedFields_, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest.displayName = 'proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse.displayName = 'proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.ListContainerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cs3.storage.provider.v1beta1.ListContainerRequest.repeatedFields_, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.ListContainerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.ListContainerRequest.displayName = 'proto.cs3.storage.provider.v1beta1.ListContainerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.ListContainerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cs3.storage.provider.v1beta1.ListContainerResponse.repeatedFields_, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.ListContainerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.ListContainerResponse.displayName = 'proto.cs3.storage.provider.v1beta1.ListContainerResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest.displayName = 'proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse.repeatedFields_, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse.displayName = 'proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.ListRecycleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.ListRecycleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.ListRecycleRequest.displayName = 'proto.cs3.storage.provider.v1beta1.ListRecycleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.ListRecycleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cs3.storage.provider.v1beta1.ListRecycleResponse.repeatedFields_, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.ListRecycleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.ListRecycleResponse.displayName = 'proto.cs3.storage.provider.v1beta1.ListRecycleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest.displayName = 'proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse.displayName = 'proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.MoveRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.MoveRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.MoveRequest.displayName = 'proto.cs3.storage.provider.v1beta1.MoveRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.MoveResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.MoveResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.MoveResponse.displayName = 'proto.cs3.storage.provider.v1beta1.MoveResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.PurgeRecycleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.PurgeRecycleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.PurgeRecycleRequest.displayName = 'proto.cs3.storage.provider.v1beta1.PurgeRecycleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse.displayName = 'proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest.displayName = 'proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse.displayName = 'proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest.displayName = 'proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse.displayName = 'proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.RemoveGrantRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.RemoveGrantRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.RemoveGrantRequest.displayName = 'proto.cs3.storage.provider.v1beta1.RemoveGrantRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.RemoveGrantResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.RemoveGrantResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.RemoveGrantResponse.displayName = 'proto.cs3.storage.provider.v1beta1.RemoveGrantResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.StatRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cs3.storage.provider.v1beta1.StatRequest.repeatedFields_, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.StatRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.StatRequest.displayName = 'proto.cs3.storage.provider.v1beta1.StatRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.StatResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.StatResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.StatResponse.displayName = 'proto.cs3.storage.provider.v1beta1.StatResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.UpdateGrantRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.UpdateGrantRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.UpdateGrantRequest.displayName = 'proto.cs3.storage.provider.v1beta1.UpdateGrantRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.UpdateGrantResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.UpdateGrantResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.UpdateGrantResponse.displayName = 'proto.cs3.storage.provider.v1beta1.UpdateGrantResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.CreateSymlinkRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.CreateSymlinkRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.CreateSymlinkRequest.displayName = 'proto.cs3.storage.provider.v1beta1.CreateSymlinkRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.CreateSymlinkResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.CreateSymlinkResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.CreateSymlinkResponse.displayName = 'proto.cs3.storage.provider.v1beta1.CreateSymlinkResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.CreateReferenceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.CreateReferenceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.CreateReferenceRequest.displayName = 'proto.cs3.storage.provider.v1beta1.CreateReferenceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.CreateReferenceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.CreateReferenceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.CreateReferenceResponse.displayName = 'proto.cs3.storage.provider.v1beta1.CreateReferenceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest.displayName = 'proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse.displayName = 'proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest.repeatedFields_, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest.displayName = 'proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse.displayName = 'proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.CreateHomeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.CreateHomeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.CreateHomeRequest.displayName = 'proto.cs3.storage.provider.v1beta1.CreateHomeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cs3.storage.provider.v1beta1.CreateHomeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cs3.storage.provider.v1beta1.CreateHomeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cs3.storage.provider.v1beta1.CreateHomeResponse.displayName = 'proto.cs3.storage.provider.v1beta1.CreateHomeResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.GetHomeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.GetHomeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.GetHomeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.GetHomeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.GetHomeRequest}
 */
proto.cs3.storage.provider.v1beta1.GetHomeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.GetHomeRequest;
  return proto.cs3.storage.provider.v1beta1.GetHomeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.GetHomeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.GetHomeRequest}
 */
proto.cs3.storage.provider.v1beta1.GetHomeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.GetHomeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.GetHomeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.GetHomeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.GetHomeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.GetHomeRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 1));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.GetHomeRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.GetHomeRequest.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.GetHomeRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.GetHomeRequest.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.GetHomeRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.GetHomeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.GetHomeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.GetHomeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.GetHomeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_v1beta1_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    path: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.GetHomeResponse}
 */
proto.cs3.storage.provider.v1beta1.GetHomeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.GetHomeResponse;
  return proto.cs3.storage.provider.v1beta1.GetHomeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.GetHomeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.GetHomeResponse}
 */
proto.cs3.storage.provider.v1beta1.GetHomeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_rpc_v1beta1_status_pb.Status;
      reader.readMessage(value,cs3_rpc_v1beta1_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 2:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.GetHomeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.GetHomeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.GetHomeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.GetHomeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_rpc_v1beta1_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional cs3.rpc.v1beta1.Status status = 1;
 * @return {?proto.cs3.rpc.v1beta1.Status}
 */
proto.cs3.storage.provider.v1beta1.GetHomeResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.v1beta1.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_v1beta1_status_pb.Status, 1));
};


/**
 * @param {?proto.cs3.rpc.v1beta1.Status|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.GetHomeResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.GetHomeResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.GetHomeResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.GetHomeResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.GetHomeResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 2;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.GetHomeResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 2));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.GetHomeResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.GetHomeResponse.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.GetHomeResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.GetHomeResponse.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.GetHomeResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string path = 3;
 * @return {string}
 */
proto.cs3.storage.provider.v1beta1.GetHomeResponse.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cs3.storage.provider.v1beta1.GetHomeResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.GetHomeResponse.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.AddGrantRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.AddGrantRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.AddGrantRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.AddGrantRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && cs3_storage_provider_v1beta1_resources_pb.Reference.toObject(includeInstance, f),
    grant: (f = msg.getGrant()) && cs3_storage_provider_v1beta1_resources_pb.Grant.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.AddGrantRequest}
 */
proto.cs3.storage.provider.v1beta1.AddGrantRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.AddGrantRequest;
  return proto.cs3.storage.provider.v1beta1.AddGrantRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.AddGrantRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.AddGrantRequest}
 */
proto.cs3.storage.provider.v1beta1.AddGrantRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 2:
      var value = new cs3_storage_provider_v1beta1_resources_pb.Reference;
      reader.readMessage(value,cs3_storage_provider_v1beta1_resources_pb.Reference.deserializeBinaryFromReader);
      msg.setRef(value);
      break;
    case 3:
      var value = new cs3_storage_provider_v1beta1_resources_pb.Grant;
      reader.readMessage(value,cs3_storage_provider_v1beta1_resources_pb.Grant.deserializeBinaryFromReader);
      msg.setGrant(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.AddGrantRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.AddGrantRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.AddGrantRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.AddGrantRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storage_provider_v1beta1_resources_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getGrant();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      cs3_storage_provider_v1beta1_resources_pb.Grant.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.AddGrantRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 1));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.AddGrantRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.AddGrantRequest.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.AddGrantRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.AddGrantRequest.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.AddGrantRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reference ref = 2;
 * @return {?proto.cs3.storage.provider.v1beta1.Reference}
 */
proto.cs3.storage.provider.v1beta1.AddGrantRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storage_provider_v1beta1_resources_pb.Reference, 2));
};


/**
 * @param {?proto.cs3.storage.provider.v1beta1.Reference|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.AddGrantRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.AddGrantRequest.prototype.setRef = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.AddGrantRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.AddGrantRequest.prototype.clearRef = function() {
  return this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.AddGrantRequest.prototype.hasRef = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Grant grant = 3;
 * @return {?proto.cs3.storage.provider.v1beta1.Grant}
 */
proto.cs3.storage.provider.v1beta1.AddGrantRequest.prototype.getGrant = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.Grant} */ (
    jspb.Message.getWrapperField(this, cs3_storage_provider_v1beta1_resources_pb.Grant, 3));
};


/**
 * @param {?proto.cs3.storage.provider.v1beta1.Grant|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.AddGrantRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.AddGrantRequest.prototype.setGrant = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.AddGrantRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.AddGrantRequest.prototype.clearGrant = function() {
  return this.setGrant(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.AddGrantRequest.prototype.hasGrant = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.AddGrantResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.AddGrantResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.AddGrantResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.AddGrantResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_v1beta1_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.AddGrantResponse}
 */
proto.cs3.storage.provider.v1beta1.AddGrantResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.AddGrantResponse;
  return proto.cs3.storage.provider.v1beta1.AddGrantResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.AddGrantResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.AddGrantResponse}
 */
proto.cs3.storage.provider.v1beta1.AddGrantResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_rpc_v1beta1_status_pb.Status;
      reader.readMessage(value,cs3_rpc_v1beta1_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 2:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.AddGrantResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.AddGrantResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.AddGrantResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.AddGrantResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_rpc_v1beta1_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.rpc.v1beta1.Status status = 1;
 * @return {?proto.cs3.rpc.v1beta1.Status}
 */
proto.cs3.storage.provider.v1beta1.AddGrantResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.v1beta1.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_v1beta1_status_pb.Status, 1));
};


/**
 * @param {?proto.cs3.rpc.v1beta1.Status|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.AddGrantResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.AddGrantResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.AddGrantResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.AddGrantResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.AddGrantResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 2;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.AddGrantResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 2));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.AddGrantResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.AddGrantResponse.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.AddGrantResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.AddGrantResponse.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.AddGrantResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.CreateContainerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.CreateContainerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.CreateContainerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.CreateContainerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && cs3_storage_provider_v1beta1_resources_pb.Reference.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.CreateContainerRequest}
 */
proto.cs3.storage.provider.v1beta1.CreateContainerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.CreateContainerRequest;
  return proto.cs3.storage.provider.v1beta1.CreateContainerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.CreateContainerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.CreateContainerRequest}
 */
proto.cs3.storage.provider.v1beta1.CreateContainerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 2:
      var value = new cs3_storage_provider_v1beta1_resources_pb.Reference;
      reader.readMessage(value,cs3_storage_provider_v1beta1_resources_pb.Reference.deserializeBinaryFromReader);
      msg.setRef(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.CreateContainerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.CreateContainerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.CreateContainerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.CreateContainerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storage_provider_v1beta1_resources_pb.Reference.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.CreateContainerRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 1));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.CreateContainerRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.CreateContainerRequest.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.CreateContainerRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.CreateContainerRequest.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.CreateContainerRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reference ref = 2;
 * @return {?proto.cs3.storage.provider.v1beta1.Reference}
 */
proto.cs3.storage.provider.v1beta1.CreateContainerRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storage_provider_v1beta1_resources_pb.Reference, 2));
};


/**
 * @param {?proto.cs3.storage.provider.v1beta1.Reference|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.CreateContainerRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.CreateContainerRequest.prototype.setRef = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.CreateContainerRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.CreateContainerRequest.prototype.clearRef = function() {
  return this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.CreateContainerRequest.prototype.hasRef = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.CreateContainerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.CreateContainerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.CreateContainerResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.CreateContainerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_v1beta1_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.CreateContainerResponse}
 */
proto.cs3.storage.provider.v1beta1.CreateContainerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.CreateContainerResponse;
  return proto.cs3.storage.provider.v1beta1.CreateContainerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.CreateContainerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.CreateContainerResponse}
 */
proto.cs3.storage.provider.v1beta1.CreateContainerResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_rpc_v1beta1_status_pb.Status;
      reader.readMessage(value,cs3_rpc_v1beta1_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 2:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.CreateContainerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.CreateContainerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.CreateContainerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.CreateContainerResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_rpc_v1beta1_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.rpc.v1beta1.Status status = 1;
 * @return {?proto.cs3.rpc.v1beta1.Status}
 */
proto.cs3.storage.provider.v1beta1.CreateContainerResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.v1beta1.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_v1beta1_status_pb.Status, 1));
};


/**
 * @param {?proto.cs3.rpc.v1beta1.Status|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.CreateContainerResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.CreateContainerResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.CreateContainerResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.CreateContainerResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.CreateContainerResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 2;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.CreateContainerResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 2));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.CreateContainerResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.CreateContainerResponse.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.CreateContainerResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.CreateContainerResponse.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.CreateContainerResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.DeleteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.DeleteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.DeleteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.DeleteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && cs3_storage_provider_v1beta1_resources_pb.Reference.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.DeleteRequest}
 */
proto.cs3.storage.provider.v1beta1.DeleteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.DeleteRequest;
  return proto.cs3.storage.provider.v1beta1.DeleteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.DeleteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.DeleteRequest}
 */
proto.cs3.storage.provider.v1beta1.DeleteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 2:
      var value = new cs3_storage_provider_v1beta1_resources_pb.Reference;
      reader.readMessage(value,cs3_storage_provider_v1beta1_resources_pb.Reference.deserializeBinaryFromReader);
      msg.setRef(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.DeleteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.DeleteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.DeleteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.DeleteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storage_provider_v1beta1_resources_pb.Reference.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.DeleteRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 1));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.DeleteRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.DeleteRequest.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.DeleteRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.DeleteRequest.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.DeleteRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reference ref = 2;
 * @return {?proto.cs3.storage.provider.v1beta1.Reference}
 */
proto.cs3.storage.provider.v1beta1.DeleteRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storage_provider_v1beta1_resources_pb.Reference, 2));
};


/**
 * @param {?proto.cs3.storage.provider.v1beta1.Reference|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.DeleteRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.DeleteRequest.prototype.setRef = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.DeleteRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.DeleteRequest.prototype.clearRef = function() {
  return this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.DeleteRequest.prototype.hasRef = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.DeleteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.DeleteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.DeleteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.DeleteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_v1beta1_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.DeleteResponse}
 */
proto.cs3.storage.provider.v1beta1.DeleteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.DeleteResponse;
  return proto.cs3.storage.provider.v1beta1.DeleteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.DeleteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.DeleteResponse}
 */
proto.cs3.storage.provider.v1beta1.DeleteResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_rpc_v1beta1_status_pb.Status;
      reader.readMessage(value,cs3_rpc_v1beta1_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 2:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.DeleteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.DeleteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.DeleteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.DeleteResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_rpc_v1beta1_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.rpc.v1beta1.Status status = 1;
 * @return {?proto.cs3.rpc.v1beta1.Status}
 */
proto.cs3.storage.provider.v1beta1.DeleteResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.v1beta1.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_v1beta1_status_pb.Status, 1));
};


/**
 * @param {?proto.cs3.rpc.v1beta1.Status|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.DeleteResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.DeleteResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.DeleteResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.DeleteResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.DeleteResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 2;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.DeleteResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 2));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.DeleteResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.DeleteResponse.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.DeleteResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.DeleteResponse.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.DeleteResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.GetPathRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.GetPathRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.GetPathRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.GetPathRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    resourceId: (f = msg.getResourceId()) && cs3_storage_provider_v1beta1_resources_pb.ResourceId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.GetPathRequest}
 */
proto.cs3.storage.provider.v1beta1.GetPathRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.GetPathRequest;
  return proto.cs3.storage.provider.v1beta1.GetPathRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.GetPathRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.GetPathRequest}
 */
proto.cs3.storage.provider.v1beta1.GetPathRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 2:
      var value = new cs3_storage_provider_v1beta1_resources_pb.ResourceId;
      reader.readMessage(value,cs3_storage_provider_v1beta1_resources_pb.ResourceId.deserializeBinaryFromReader);
      msg.setResourceId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.GetPathRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.GetPathRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.GetPathRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.GetPathRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getResourceId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storage_provider_v1beta1_resources_pb.ResourceId.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.GetPathRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 1));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.GetPathRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.GetPathRequest.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.GetPathRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.GetPathRequest.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.GetPathRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ResourceId resource_id = 2;
 * @return {?proto.cs3.storage.provider.v1beta1.ResourceId}
 */
proto.cs3.storage.provider.v1beta1.GetPathRequest.prototype.getResourceId = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.ResourceId} */ (
    jspb.Message.getWrapperField(this, cs3_storage_provider_v1beta1_resources_pb.ResourceId, 2));
};


/**
 * @param {?proto.cs3.storage.provider.v1beta1.ResourceId|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.GetPathRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.GetPathRequest.prototype.setResourceId = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.GetPathRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.GetPathRequest.prototype.clearResourceId = function() {
  return this.setResourceId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.GetPathRequest.prototype.hasResourceId = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.GetPathResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.GetPathResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.GetPathResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.GetPathResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_v1beta1_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    path: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.GetPathResponse}
 */
proto.cs3.storage.provider.v1beta1.GetPathResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.GetPathResponse;
  return proto.cs3.storage.provider.v1beta1.GetPathResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.GetPathResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.GetPathResponse}
 */
proto.cs3.storage.provider.v1beta1.GetPathResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_rpc_v1beta1_status_pb.Status;
      reader.readMessage(value,cs3_rpc_v1beta1_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 2:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.GetPathResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.GetPathResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.GetPathResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.GetPathResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_rpc_v1beta1_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional cs3.rpc.v1beta1.Status status = 1;
 * @return {?proto.cs3.rpc.v1beta1.Status}
 */
proto.cs3.storage.provider.v1beta1.GetPathResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.v1beta1.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_v1beta1_status_pb.Status, 1));
};


/**
 * @param {?proto.cs3.rpc.v1beta1.Status|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.GetPathResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.GetPathResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.GetPathResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.GetPathResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.GetPathResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 2;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.GetPathResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 2));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.GetPathResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.GetPathResponse.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.GetPathResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.GetPathResponse.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.GetPathResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string path = 3;
 * @return {string}
 */
proto.cs3.storage.provider.v1beta1.GetPathResponse.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cs3.storage.provider.v1beta1.GetPathResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.GetPathResponse.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.GetQuotaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.GetQuotaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.GetQuotaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.GetQuotaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.GetQuotaRequest}
 */
proto.cs3.storage.provider.v1beta1.GetQuotaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.GetQuotaRequest;
  return proto.cs3.storage.provider.v1beta1.GetQuotaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.GetQuotaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.GetQuotaRequest}
 */
proto.cs3.storage.provider.v1beta1.GetQuotaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.GetQuotaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.GetQuotaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.GetQuotaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.GetQuotaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.GetQuotaRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 1));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.GetQuotaRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.GetQuotaRequest.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.GetQuotaRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.GetQuotaRequest.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.GetQuotaRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.GetQuotaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.GetQuotaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.GetQuotaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.GetQuotaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_v1beta1_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    totalBytes: jspb.Message.getFieldWithDefault(msg, 3, 0),
    usedBytes: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.GetQuotaResponse}
 */
proto.cs3.storage.provider.v1beta1.GetQuotaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.GetQuotaResponse;
  return proto.cs3.storage.provider.v1beta1.GetQuotaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.GetQuotaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.GetQuotaResponse}
 */
proto.cs3.storage.provider.v1beta1.GetQuotaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_rpc_v1beta1_status_pb.Status;
      reader.readMessage(value,cs3_rpc_v1beta1_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 2:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalBytes(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUsedBytes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.GetQuotaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.GetQuotaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.GetQuotaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.GetQuotaResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_rpc_v1beta1_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getTotalBytes();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getUsedBytes();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional cs3.rpc.v1beta1.Status status = 1;
 * @return {?proto.cs3.rpc.v1beta1.Status}
 */
proto.cs3.storage.provider.v1beta1.GetQuotaResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.v1beta1.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_v1beta1_status_pb.Status, 1));
};


/**
 * @param {?proto.cs3.rpc.v1beta1.Status|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.GetQuotaResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.GetQuotaResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.GetQuotaResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.GetQuotaResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.GetQuotaResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 2;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.GetQuotaResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 2));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.GetQuotaResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.GetQuotaResponse.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.GetQuotaResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.GetQuotaResponse.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.GetQuotaResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 total_bytes = 3;
 * @return {number}
 */
proto.cs3.storage.provider.v1beta1.GetQuotaResponse.prototype.getTotalBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.cs3.storage.provider.v1beta1.GetQuotaResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.GetQuotaResponse.prototype.setTotalBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 used_bytes = 4;
 * @return {number}
 */
proto.cs3.storage.provider.v1beta1.GetQuotaResponse.prototype.getUsedBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.cs3.storage.provider.v1beta1.GetQuotaResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.GetQuotaResponse.prototype.setUsedBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && cs3_storage_provider_v1beta1_resources_pb.Reference.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest;
  return proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 2:
      var value = new cs3_storage_provider_v1beta1_resources_pb.Reference;
      reader.readMessage(value,cs3_storage_provider_v1beta1_resources_pb.Reference.deserializeBinaryFromReader);
      msg.setRef(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storage_provider_v1beta1_resources_pb.Reference.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 1));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reference ref = 2;
 * @return {?proto.cs3.storage.provider.v1beta1.Reference}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storage_provider_v1beta1_resources_pb.Reference, 2));
};


/**
 * @param {?proto.cs3.storage.provider.v1beta1.Reference|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.prototype.setRef = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.prototype.clearRef = function() {
  return this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest.prototype.hasRef = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_v1beta1_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    uploadEndpoint: jspb.Message.getFieldWithDefault(msg, 3, ""),
    availableChecksumsList: jspb.Message.toObjectList(msg.getAvailableChecksumsList(),
    cs3_storage_provider_v1beta1_resources_pb.ResourceChecksumPriority.toObject, includeInstance),
    expose: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse;
  return proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_rpc_v1beta1_status_pb.Status;
      reader.readMessage(value,cs3_rpc_v1beta1_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 2:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUploadEndpoint(value);
      break;
    case 4:
      var value = new cs3_storage_provider_v1beta1_resources_pb.ResourceChecksumPriority;
      reader.readMessage(value,cs3_storage_provider_v1beta1_resources_pb.ResourceChecksumPriority.deserializeBinaryFromReader);
      msg.addAvailableChecksums(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExpose(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_rpc_v1beta1_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getUploadEndpoint();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAvailableChecksumsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      cs3_storage_provider_v1beta1_resources_pb.ResourceChecksumPriority.serializeBinaryToWriter
    );
  }
  f = message.getExpose();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional cs3.rpc.v1beta1.Status status = 1;
 * @return {?proto.cs3.rpc.v1beta1.Status}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.v1beta1.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_v1beta1_status_pb.Status, 1));
};


/**
 * @param {?proto.cs3.rpc.v1beta1.Status|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 2;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 2));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string upload_endpoint = 3;
 * @return {string}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse.prototype.getUploadEndpoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse.prototype.setUploadEndpoint = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated ResourceChecksumPriority available_checksums = 4;
 * @return {!Array<!proto.cs3.storage.provider.v1beta1.ResourceChecksumPriority>}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse.prototype.getAvailableChecksumsList = function() {
  return /** @type{!Array<!proto.cs3.storage.provider.v1beta1.ResourceChecksumPriority>} */ (
    jspb.Message.getRepeatedWrapperField(this, cs3_storage_provider_v1beta1_resources_pb.ResourceChecksumPriority, 4));
};


/**
 * @param {!Array<!proto.cs3.storage.provider.v1beta1.ResourceChecksumPriority>} value
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse.prototype.setAvailableChecksumsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.ResourceChecksumPriority=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cs3.storage.provider.v1beta1.ResourceChecksumPriority}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse.prototype.addAvailableChecksums = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.cs3.storage.provider.v1beta1.ResourceChecksumPriority, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse.prototype.clearAvailableChecksumsList = function() {
  return this.setAvailableChecksumsList([]);
};


/**
 * optional bool expose = 5;
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse.prototype.getExpose = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse.prototype.setExpose = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && cs3_storage_provider_v1beta1_resources_pb.Reference.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest;
  return proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 2:
      var value = new cs3_storage_provider_v1beta1_resources_pb.Reference;
      reader.readMessage(value,cs3_storage_provider_v1beta1_resources_pb.Reference.deserializeBinaryFromReader);
      msg.setRef(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storage_provider_v1beta1_resources_pb.Reference.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 1));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reference ref = 2;
 * @return {?proto.cs3.storage.provider.v1beta1.Reference}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storage_provider_v1beta1_resources_pb.Reference, 2));
};


/**
 * @param {?proto.cs3.storage.provider.v1beta1.Reference|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest.prototype.setRef = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest.prototype.clearRef = function() {
  return this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest.prototype.hasRef = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_v1beta1_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    downloadEndpoint: jspb.Message.getFieldWithDefault(msg, 3, ""),
    expose: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse;
  return proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_rpc_v1beta1_status_pb.Status;
      reader.readMessage(value,cs3_rpc_v1beta1_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 2:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDownloadEndpoint(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExpose(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_rpc_v1beta1_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getDownloadEndpoint();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getExpose();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional cs3.rpc.v1beta1.Status status = 1;
 * @return {?proto.cs3.rpc.v1beta1.Status}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.v1beta1.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_v1beta1_status_pb.Status, 1));
};


/**
 * @param {?proto.cs3.rpc.v1beta1.Status|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 2;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 2));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string download_endpoint = 3;
 * @return {string}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse.prototype.getDownloadEndpoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse.prototype.setDownloadEndpoint = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool expose = 5;
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse.prototype.getExpose = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse.prototype.setExpose = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.ListGrantsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.ListGrantsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.ListGrantsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.ListGrantsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && cs3_storage_provider_v1beta1_resources_pb.Reference.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.ListGrantsRequest}
 */
proto.cs3.storage.provider.v1beta1.ListGrantsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.ListGrantsRequest;
  return proto.cs3.storage.provider.v1beta1.ListGrantsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.ListGrantsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.ListGrantsRequest}
 */
proto.cs3.storage.provider.v1beta1.ListGrantsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 2:
      var value = new cs3_storage_provider_v1beta1_resources_pb.Reference;
      reader.readMessage(value,cs3_storage_provider_v1beta1_resources_pb.Reference.deserializeBinaryFromReader);
      msg.setRef(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.ListGrantsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.ListGrantsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.ListGrantsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.ListGrantsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storage_provider_v1beta1_resources_pb.Reference.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.ListGrantsRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 1));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.ListGrantsRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.ListGrantsRequest.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.ListGrantsRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.ListGrantsRequest.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.ListGrantsRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reference ref = 2;
 * @return {?proto.cs3.storage.provider.v1beta1.Reference}
 */
proto.cs3.storage.provider.v1beta1.ListGrantsRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storage_provider_v1beta1_resources_pb.Reference, 2));
};


/**
 * @param {?proto.cs3.storage.provider.v1beta1.Reference|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.ListGrantsRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.ListGrantsRequest.prototype.setRef = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.ListGrantsRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.ListGrantsRequest.prototype.clearRef = function() {
  return this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.ListGrantsRequest.prototype.hasRef = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cs3.storage.provider.v1beta1.ListGrantsResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.ListGrantsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.ListGrantsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.ListGrantsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.ListGrantsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_v1beta1_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    grantsList: jspb.Message.toObjectList(msg.getGrantsList(),
    cs3_storage_provider_v1beta1_resources_pb.Grant.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.ListGrantsResponse}
 */
proto.cs3.storage.provider.v1beta1.ListGrantsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.ListGrantsResponse;
  return proto.cs3.storage.provider.v1beta1.ListGrantsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.ListGrantsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.ListGrantsResponse}
 */
proto.cs3.storage.provider.v1beta1.ListGrantsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_rpc_v1beta1_status_pb.Status;
      reader.readMessage(value,cs3_rpc_v1beta1_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 2:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 3:
      var value = new cs3_storage_provider_v1beta1_resources_pb.Grant;
      reader.readMessage(value,cs3_storage_provider_v1beta1_resources_pb.Grant.deserializeBinaryFromReader);
      msg.addGrants(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.ListGrantsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.ListGrantsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.ListGrantsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.ListGrantsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_rpc_v1beta1_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getGrantsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      cs3_storage_provider_v1beta1_resources_pb.Grant.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.rpc.v1beta1.Status status = 1;
 * @return {?proto.cs3.rpc.v1beta1.Status}
 */
proto.cs3.storage.provider.v1beta1.ListGrantsResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.v1beta1.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_v1beta1_status_pb.Status, 1));
};


/**
 * @param {?proto.cs3.rpc.v1beta1.Status|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.ListGrantsResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.ListGrantsResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.ListGrantsResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.ListGrantsResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.ListGrantsResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 2;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.ListGrantsResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 2));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.ListGrantsResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.ListGrantsResponse.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.ListGrantsResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.ListGrantsResponse.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.ListGrantsResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Grant grants = 3;
 * @return {!Array<!proto.cs3.storage.provider.v1beta1.Grant>}
 */
proto.cs3.storage.provider.v1beta1.ListGrantsResponse.prototype.getGrantsList = function() {
  return /** @type{!Array<!proto.cs3.storage.provider.v1beta1.Grant>} */ (
    jspb.Message.getRepeatedWrapperField(this, cs3_storage_provider_v1beta1_resources_pb.Grant, 3));
};


/**
 * @param {!Array<!proto.cs3.storage.provider.v1beta1.Grant>} value
 * @return {!proto.cs3.storage.provider.v1beta1.ListGrantsResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.ListGrantsResponse.prototype.setGrantsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.Grant=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cs3.storage.provider.v1beta1.Grant}
 */
proto.cs3.storage.provider.v1beta1.ListGrantsResponse.prototype.addGrants = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.cs3.storage.provider.v1beta1.Grant, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cs3.storage.provider.v1beta1.ListGrantsResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.ListGrantsResponse.prototype.clearGrantsList = function() {
  return this.setGrantsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && cs3_storage_provider_v1beta1_resources_pb.Reference.toObject(includeInstance, f),
    arbitraryMetadataKeysList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest}
 */
proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest;
  return proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest}
 */
proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 2:
      var value = new cs3_storage_provider_v1beta1_resources_pb.Reference;
      reader.readMessage(value,cs3_storage_provider_v1beta1_resources_pb.Reference.deserializeBinaryFromReader);
      msg.setRef(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addArbitraryMetadataKeys(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storage_provider_v1beta1_resources_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getArbitraryMetadataKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 1));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reference ref = 2;
 * @return {?proto.cs3.storage.provider.v1beta1.Reference}
 */
proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storage_provider_v1beta1_resources_pb.Reference, 2));
};


/**
 * @param {?proto.cs3.storage.provider.v1beta1.Reference|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest.prototype.setRef = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest.prototype.clearRef = function() {
  return this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest.prototype.hasRef = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string arbitrary_metadata_keys = 3;
 * @return {!Array<string>}
 */
proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest.prototype.getArbitraryMetadataKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest.prototype.setArbitraryMetadataKeysList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest.prototype.addArbitraryMetadataKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest.prototype.clearArbitraryMetadataKeysList = function() {
  return this.setArbitraryMetadataKeysList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_v1beta1_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    info: (f = msg.getInfo()) && cs3_storage_provider_v1beta1_resources_pb.ResourceInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse}
 */
proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse;
  return proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse}
 */
proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_rpc_v1beta1_status_pb.Status;
      reader.readMessage(value,cs3_rpc_v1beta1_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 2:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 3:
      var value = new cs3_storage_provider_v1beta1_resources_pb.ResourceInfo;
      reader.readMessage(value,cs3_storage_provider_v1beta1_resources_pb.ResourceInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_rpc_v1beta1_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      cs3_storage_provider_v1beta1_resources_pb.ResourceInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.rpc.v1beta1.Status status = 1;
 * @return {?proto.cs3.rpc.v1beta1.Status}
 */
proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.v1beta1.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_v1beta1_status_pb.Status, 1));
};


/**
 * @param {?proto.cs3.rpc.v1beta1.Status|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 2;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 2));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ResourceInfo info = 3;
 * @return {?proto.cs3.storage.provider.v1beta1.ResourceInfo}
 */
proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse.prototype.getInfo = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.ResourceInfo} */ (
    jspb.Message.getWrapperField(this, cs3_storage_provider_v1beta1_resources_pb.ResourceInfo, 3));
};


/**
 * @param {?proto.cs3.storage.provider.v1beta1.ResourceInfo|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cs3.storage.provider.v1beta1.ListContainerRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.ListContainerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.ListContainerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.ListContainerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.ListContainerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && cs3_storage_provider_v1beta1_resources_pb.Reference.toObject(includeInstance, f),
    arbitraryMetadataKeysList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.ListContainerRequest}
 */
proto.cs3.storage.provider.v1beta1.ListContainerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.ListContainerRequest;
  return proto.cs3.storage.provider.v1beta1.ListContainerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.ListContainerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.ListContainerRequest}
 */
proto.cs3.storage.provider.v1beta1.ListContainerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 2:
      var value = new cs3_storage_provider_v1beta1_resources_pb.Reference;
      reader.readMessage(value,cs3_storage_provider_v1beta1_resources_pb.Reference.deserializeBinaryFromReader);
      msg.setRef(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addArbitraryMetadataKeys(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.ListContainerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.ListContainerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.ListContainerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.ListContainerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storage_provider_v1beta1_resources_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getArbitraryMetadataKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.ListContainerRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 1));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.ListContainerRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.ListContainerRequest.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.ListContainerRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.ListContainerRequest.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.ListContainerRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reference ref = 2;
 * @return {?proto.cs3.storage.provider.v1beta1.Reference}
 */
proto.cs3.storage.provider.v1beta1.ListContainerRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storage_provider_v1beta1_resources_pb.Reference, 2));
};


/**
 * @param {?proto.cs3.storage.provider.v1beta1.Reference|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.ListContainerRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.ListContainerRequest.prototype.setRef = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.ListContainerRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.ListContainerRequest.prototype.clearRef = function() {
  return this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.ListContainerRequest.prototype.hasRef = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string arbitrary_metadata_keys = 3;
 * @return {!Array<string>}
 */
proto.cs3.storage.provider.v1beta1.ListContainerRequest.prototype.getArbitraryMetadataKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.cs3.storage.provider.v1beta1.ListContainerRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.ListContainerRequest.prototype.setArbitraryMetadataKeysList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.cs3.storage.provider.v1beta1.ListContainerRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.ListContainerRequest.prototype.addArbitraryMetadataKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cs3.storage.provider.v1beta1.ListContainerRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.ListContainerRequest.prototype.clearArbitraryMetadataKeysList = function() {
  return this.setArbitraryMetadataKeysList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cs3.storage.provider.v1beta1.ListContainerResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.ListContainerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.ListContainerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.ListContainerResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.ListContainerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_v1beta1_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    infosList: jspb.Message.toObjectList(msg.getInfosList(),
    cs3_storage_provider_v1beta1_resources_pb.ResourceInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.ListContainerResponse}
 */
proto.cs3.storage.provider.v1beta1.ListContainerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.ListContainerResponse;
  return proto.cs3.storage.provider.v1beta1.ListContainerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.ListContainerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.ListContainerResponse}
 */
proto.cs3.storage.provider.v1beta1.ListContainerResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_rpc_v1beta1_status_pb.Status;
      reader.readMessage(value,cs3_rpc_v1beta1_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 2:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 3:
      var value = new cs3_storage_provider_v1beta1_resources_pb.ResourceInfo;
      reader.readMessage(value,cs3_storage_provider_v1beta1_resources_pb.ResourceInfo.deserializeBinaryFromReader);
      msg.addInfos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.ListContainerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.ListContainerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.ListContainerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.ListContainerResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_rpc_v1beta1_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getInfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      cs3_storage_provider_v1beta1_resources_pb.ResourceInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.rpc.v1beta1.Status status = 1;
 * @return {?proto.cs3.rpc.v1beta1.Status}
 */
proto.cs3.storage.provider.v1beta1.ListContainerResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.v1beta1.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_v1beta1_status_pb.Status, 1));
};


/**
 * @param {?proto.cs3.rpc.v1beta1.Status|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.ListContainerResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.ListContainerResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.ListContainerResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.ListContainerResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.ListContainerResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 2;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.ListContainerResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 2));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.ListContainerResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.ListContainerResponse.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.ListContainerResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.ListContainerResponse.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.ListContainerResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated ResourceInfo infos = 3;
 * @return {!Array<!proto.cs3.storage.provider.v1beta1.ResourceInfo>}
 */
proto.cs3.storage.provider.v1beta1.ListContainerResponse.prototype.getInfosList = function() {
  return /** @type{!Array<!proto.cs3.storage.provider.v1beta1.ResourceInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, cs3_storage_provider_v1beta1_resources_pb.ResourceInfo, 3));
};


/**
 * @param {!Array<!proto.cs3.storage.provider.v1beta1.ResourceInfo>} value
 * @return {!proto.cs3.storage.provider.v1beta1.ListContainerResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.ListContainerResponse.prototype.setInfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.ResourceInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cs3.storage.provider.v1beta1.ResourceInfo}
 */
proto.cs3.storage.provider.v1beta1.ListContainerResponse.prototype.addInfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.cs3.storage.provider.v1beta1.ResourceInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cs3.storage.provider.v1beta1.ListContainerResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.ListContainerResponse.prototype.clearInfosList = function() {
  return this.setInfosList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && cs3_storage_provider_v1beta1_resources_pb.Reference.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest}
 */
proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest;
  return proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest}
 */
proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 2:
      var value = new cs3_storage_provider_v1beta1_resources_pb.Reference;
      reader.readMessage(value,cs3_storage_provider_v1beta1_resources_pb.Reference.deserializeBinaryFromReader);
      msg.setRef(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storage_provider_v1beta1_resources_pb.Reference.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 1));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reference ref = 2;
 * @return {?proto.cs3.storage.provider.v1beta1.Reference}
 */
proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storage_provider_v1beta1_resources_pb.Reference, 2));
};


/**
 * @param {?proto.cs3.storage.provider.v1beta1.Reference|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest.prototype.setRef = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest.prototype.clearRef = function() {
  return this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest.prototype.hasRef = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_v1beta1_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    versionsList: jspb.Message.toObjectList(msg.getVersionsList(),
    cs3_storage_provider_v1beta1_resources_pb.FileVersion.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse}
 */
proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse;
  return proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse}
 */
proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_rpc_v1beta1_status_pb.Status;
      reader.readMessage(value,cs3_rpc_v1beta1_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 2:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 3:
      var value = new cs3_storage_provider_v1beta1_resources_pb.FileVersion;
      reader.readMessage(value,cs3_storage_provider_v1beta1_resources_pb.FileVersion.deserializeBinaryFromReader);
      msg.addVersions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_rpc_v1beta1_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getVersionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      cs3_storage_provider_v1beta1_resources_pb.FileVersion.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.rpc.v1beta1.Status status = 1;
 * @return {?proto.cs3.rpc.v1beta1.Status}
 */
proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.v1beta1.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_v1beta1_status_pb.Status, 1));
};


/**
 * @param {?proto.cs3.rpc.v1beta1.Status|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 2;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 2));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated FileVersion versions = 3;
 * @return {!Array<!proto.cs3.storage.provider.v1beta1.FileVersion>}
 */
proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse.prototype.getVersionsList = function() {
  return /** @type{!Array<!proto.cs3.storage.provider.v1beta1.FileVersion>} */ (
    jspb.Message.getRepeatedWrapperField(this, cs3_storage_provider_v1beta1_resources_pb.FileVersion, 3));
};


/**
 * @param {!Array<!proto.cs3.storage.provider.v1beta1.FileVersion>} value
 * @return {!proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse.prototype.setVersionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.FileVersion=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cs3.storage.provider.v1beta1.FileVersion}
 */
proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse.prototype.addVersions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.cs3.storage.provider.v1beta1.FileVersion, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse.prototype.clearVersionsList = function() {
  return this.setVersionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.ListRecycleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.ListRecycleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.ListRecycleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.ListRecycleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    fromTs: (f = msg.getFromTs()) && cs3_types_v1beta1_types_pb.Timestamp.toObject(includeInstance, f),
    toTs: (f = msg.getToTs()) && cs3_types_v1beta1_types_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.ListRecycleRequest}
 */
proto.cs3.storage.provider.v1beta1.ListRecycleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.ListRecycleRequest;
  return proto.cs3.storage.provider.v1beta1.ListRecycleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.ListRecycleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.ListRecycleRequest}
 */
proto.cs3.storage.provider.v1beta1.ListRecycleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 2:
      var value = new cs3_types_v1beta1_types_pb.Timestamp;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFromTs(value);
      break;
    case 3:
      var value = new cs3_types_v1beta1_types_pb.Timestamp;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Timestamp.deserializeBinaryFromReader);
      msg.setToTs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.ListRecycleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.ListRecycleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.ListRecycleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.ListRecycleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getFromTs();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_types_v1beta1_types_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getToTs();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      cs3_types_v1beta1_types_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.ListRecycleRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 1));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.ListRecycleRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.ListRecycleRequest.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.ListRecycleRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.ListRecycleRequest.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.ListRecycleRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.v1beta1.Timestamp from_ts = 2;
 * @return {?proto.cs3.types.v1beta1.Timestamp}
 */
proto.cs3.storage.provider.v1beta1.ListRecycleRequest.prototype.getFromTs = function() {
  return /** @type{?proto.cs3.types.v1beta1.Timestamp} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Timestamp, 2));
};


/**
 * @param {?proto.cs3.types.v1beta1.Timestamp|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.ListRecycleRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.ListRecycleRequest.prototype.setFromTs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.ListRecycleRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.ListRecycleRequest.prototype.clearFromTs = function() {
  return this.setFromTs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.ListRecycleRequest.prototype.hasFromTs = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional cs3.types.v1beta1.Timestamp to_ts = 3;
 * @return {?proto.cs3.types.v1beta1.Timestamp}
 */
proto.cs3.storage.provider.v1beta1.ListRecycleRequest.prototype.getToTs = function() {
  return /** @type{?proto.cs3.types.v1beta1.Timestamp} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Timestamp, 3));
};


/**
 * @param {?proto.cs3.types.v1beta1.Timestamp|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.ListRecycleRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.ListRecycleRequest.prototype.setToTs = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.ListRecycleRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.ListRecycleRequest.prototype.clearToTs = function() {
  return this.setToTs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.ListRecycleRequest.prototype.hasToTs = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cs3.storage.provider.v1beta1.ListRecycleResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.ListRecycleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.ListRecycleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.ListRecycleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.ListRecycleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_v1beta1_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    recycleItemsList: jspb.Message.toObjectList(msg.getRecycleItemsList(),
    cs3_storage_provider_v1beta1_resources_pb.RecycleItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.ListRecycleResponse}
 */
proto.cs3.storage.provider.v1beta1.ListRecycleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.ListRecycleResponse;
  return proto.cs3.storage.provider.v1beta1.ListRecycleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.ListRecycleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.ListRecycleResponse}
 */
proto.cs3.storage.provider.v1beta1.ListRecycleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_rpc_v1beta1_status_pb.Status;
      reader.readMessage(value,cs3_rpc_v1beta1_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 2:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 3:
      var value = new cs3_storage_provider_v1beta1_resources_pb.RecycleItem;
      reader.readMessage(value,cs3_storage_provider_v1beta1_resources_pb.RecycleItem.deserializeBinaryFromReader);
      msg.addRecycleItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.ListRecycleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.ListRecycleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.ListRecycleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.ListRecycleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_rpc_v1beta1_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRecycleItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      cs3_storage_provider_v1beta1_resources_pb.RecycleItem.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.rpc.v1beta1.Status status = 1;
 * @return {?proto.cs3.rpc.v1beta1.Status}
 */
proto.cs3.storage.provider.v1beta1.ListRecycleResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.v1beta1.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_v1beta1_status_pb.Status, 1));
};


/**
 * @param {?proto.cs3.rpc.v1beta1.Status|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.ListRecycleResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.ListRecycleResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.ListRecycleResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.ListRecycleResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.ListRecycleResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 2;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.ListRecycleResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 2));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.ListRecycleResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.ListRecycleResponse.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.ListRecycleResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.ListRecycleResponse.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.ListRecycleResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated RecycleItem recycle_items = 3;
 * @return {!Array<!proto.cs3.storage.provider.v1beta1.RecycleItem>}
 */
proto.cs3.storage.provider.v1beta1.ListRecycleResponse.prototype.getRecycleItemsList = function() {
  return /** @type{!Array<!proto.cs3.storage.provider.v1beta1.RecycleItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, cs3_storage_provider_v1beta1_resources_pb.RecycleItem, 3));
};


/**
 * @param {!Array<!proto.cs3.storage.provider.v1beta1.RecycleItem>} value
 * @return {!proto.cs3.storage.provider.v1beta1.ListRecycleResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.ListRecycleResponse.prototype.setRecycleItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.RecycleItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cs3.storage.provider.v1beta1.RecycleItem}
 */
proto.cs3.storage.provider.v1beta1.ListRecycleResponse.prototype.addRecycleItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.cs3.storage.provider.v1beta1.RecycleItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cs3.storage.provider.v1beta1.ListRecycleResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.ListRecycleResponse.prototype.clearRecycleItemsList = function() {
  return this.setRecycleItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    fromTs: (f = msg.getFromTs()) && cs3_types_v1beta1_types_pb.Timestamp.toObject(includeInstance, f),
    toTs: (f = msg.getToTs()) && cs3_types_v1beta1_types_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest}
 */
proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest;
  return proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest}
 */
proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 2:
      var value = new cs3_types_v1beta1_types_pb.Timestamp;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFromTs(value);
      break;
    case 3:
      var value = new cs3_types_v1beta1_types_pb.Timestamp;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Timestamp.deserializeBinaryFromReader);
      msg.setToTs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getFromTs();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_types_v1beta1_types_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getToTs();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      cs3_types_v1beta1_types_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 1));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.v1beta1.Timestamp from_ts = 2;
 * @return {?proto.cs3.types.v1beta1.Timestamp}
 */
proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest.prototype.getFromTs = function() {
  return /** @type{?proto.cs3.types.v1beta1.Timestamp} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Timestamp, 2));
};


/**
 * @param {?proto.cs3.types.v1beta1.Timestamp|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest.prototype.setFromTs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest.prototype.clearFromTs = function() {
  return this.setFromTs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest.prototype.hasFromTs = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional cs3.types.v1beta1.Timestamp to_ts = 3;
 * @return {?proto.cs3.types.v1beta1.Timestamp}
 */
proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest.prototype.getToTs = function() {
  return /** @type{?proto.cs3.types.v1beta1.Timestamp} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Timestamp, 3));
};


/**
 * @param {?proto.cs3.types.v1beta1.Timestamp|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest.prototype.setToTs = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest.prototype.clearToTs = function() {
  return this.setToTs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest.prototype.hasToTs = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_v1beta1_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    recycleItem: (f = msg.getRecycleItem()) && cs3_storage_provider_v1beta1_resources_pb.RecycleItem.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse}
 */
proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse;
  return proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse}
 */
proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_rpc_v1beta1_status_pb.Status;
      reader.readMessage(value,cs3_rpc_v1beta1_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 2:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 3:
      var value = new cs3_storage_provider_v1beta1_resources_pb.RecycleItem;
      reader.readMessage(value,cs3_storage_provider_v1beta1_resources_pb.RecycleItem.deserializeBinaryFromReader);
      msg.setRecycleItem(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_rpc_v1beta1_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRecycleItem();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      cs3_storage_provider_v1beta1_resources_pb.RecycleItem.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.rpc.v1beta1.Status status = 1;
 * @return {?proto.cs3.rpc.v1beta1.Status}
 */
proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.v1beta1.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_v1beta1_status_pb.Status, 1));
};


/**
 * @param {?proto.cs3.rpc.v1beta1.Status|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 2;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 2));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional RecycleItem recycle_item = 3;
 * @return {?proto.cs3.storage.provider.v1beta1.RecycleItem}
 */
proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse.prototype.getRecycleItem = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.RecycleItem} */ (
    jspb.Message.getWrapperField(this, cs3_storage_provider_v1beta1_resources_pb.RecycleItem, 3));
};


/**
 * @param {?proto.cs3.storage.provider.v1beta1.RecycleItem|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse.prototype.setRecycleItem = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse.prototype.clearRecycleItem = function() {
  return this.setRecycleItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse.prototype.hasRecycleItem = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.MoveRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.MoveRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.MoveRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.MoveRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    source: (f = msg.getSource()) && cs3_storage_provider_v1beta1_resources_pb.Reference.toObject(includeInstance, f),
    destination: (f = msg.getDestination()) && cs3_storage_provider_v1beta1_resources_pb.Reference.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.MoveRequest}
 */
proto.cs3.storage.provider.v1beta1.MoveRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.MoveRequest;
  return proto.cs3.storage.provider.v1beta1.MoveRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.MoveRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.MoveRequest}
 */
proto.cs3.storage.provider.v1beta1.MoveRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 2:
      var value = new cs3_storage_provider_v1beta1_resources_pb.Reference;
      reader.readMessage(value,cs3_storage_provider_v1beta1_resources_pb.Reference.deserializeBinaryFromReader);
      msg.setSource(value);
      break;
    case 3:
      var value = new cs3_storage_provider_v1beta1_resources_pb.Reference;
      reader.readMessage(value,cs3_storage_provider_v1beta1_resources_pb.Reference.deserializeBinaryFromReader);
      msg.setDestination(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.MoveRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.MoveRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.MoveRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.MoveRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getSource();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storage_provider_v1beta1_resources_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getDestination();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      cs3_storage_provider_v1beta1_resources_pb.Reference.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.MoveRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 1));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.MoveRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.MoveRequest.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.MoveRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.MoveRequest.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.MoveRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reference source = 2;
 * @return {?proto.cs3.storage.provider.v1beta1.Reference}
 */
proto.cs3.storage.provider.v1beta1.MoveRequest.prototype.getSource = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storage_provider_v1beta1_resources_pb.Reference, 2));
};


/**
 * @param {?proto.cs3.storage.provider.v1beta1.Reference|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.MoveRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.MoveRequest.prototype.setSource = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.MoveRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.MoveRequest.prototype.clearSource = function() {
  return this.setSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.MoveRequest.prototype.hasSource = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Reference destination = 3;
 * @return {?proto.cs3.storage.provider.v1beta1.Reference}
 */
proto.cs3.storage.provider.v1beta1.MoveRequest.prototype.getDestination = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storage_provider_v1beta1_resources_pb.Reference, 3));
};


/**
 * @param {?proto.cs3.storage.provider.v1beta1.Reference|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.MoveRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.MoveRequest.prototype.setDestination = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.MoveRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.MoveRequest.prototype.clearDestination = function() {
  return this.setDestination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.MoveRequest.prototype.hasDestination = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.MoveResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.MoveResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.MoveResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.MoveResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_v1beta1_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.MoveResponse}
 */
proto.cs3.storage.provider.v1beta1.MoveResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.MoveResponse;
  return proto.cs3.storage.provider.v1beta1.MoveResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.MoveResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.MoveResponse}
 */
proto.cs3.storage.provider.v1beta1.MoveResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_rpc_v1beta1_status_pb.Status;
      reader.readMessage(value,cs3_rpc_v1beta1_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 2:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.MoveResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.MoveResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.MoveResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.MoveResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_rpc_v1beta1_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.rpc.v1beta1.Status status = 1;
 * @return {?proto.cs3.rpc.v1beta1.Status}
 */
proto.cs3.storage.provider.v1beta1.MoveResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.v1beta1.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_v1beta1_status_pb.Status, 1));
};


/**
 * @param {?proto.cs3.rpc.v1beta1.Status|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.MoveResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.MoveResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.MoveResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.MoveResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.MoveResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 2;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.MoveResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 2));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.MoveResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.MoveResponse.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.MoveResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.MoveResponse.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.MoveResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.PurgeRecycleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.PurgeRecycleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.PurgeRecycleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.PurgeRecycleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && cs3_storage_provider_v1beta1_resources_pb.Reference.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.PurgeRecycleRequest}
 */
proto.cs3.storage.provider.v1beta1.PurgeRecycleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.PurgeRecycleRequest;
  return proto.cs3.storage.provider.v1beta1.PurgeRecycleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.PurgeRecycleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.PurgeRecycleRequest}
 */
proto.cs3.storage.provider.v1beta1.PurgeRecycleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 2:
      var value = new cs3_storage_provider_v1beta1_resources_pb.Reference;
      reader.readMessage(value,cs3_storage_provider_v1beta1_resources_pb.Reference.deserializeBinaryFromReader);
      msg.setRef(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.PurgeRecycleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.PurgeRecycleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.PurgeRecycleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.PurgeRecycleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storage_provider_v1beta1_resources_pb.Reference.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.PurgeRecycleRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 1));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.PurgeRecycleRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.PurgeRecycleRequest.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.PurgeRecycleRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.PurgeRecycleRequest.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.PurgeRecycleRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reference ref = 2;
 * @return {?proto.cs3.storage.provider.v1beta1.Reference}
 */
proto.cs3.storage.provider.v1beta1.PurgeRecycleRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storage_provider_v1beta1_resources_pb.Reference, 2));
};


/**
 * @param {?proto.cs3.storage.provider.v1beta1.Reference|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.PurgeRecycleRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.PurgeRecycleRequest.prototype.setRef = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.PurgeRecycleRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.PurgeRecycleRequest.prototype.clearRef = function() {
  return this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.PurgeRecycleRequest.prototype.hasRef = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_v1beta1_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse}
 */
proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse;
  return proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse}
 */
proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_rpc_v1beta1_status_pb.Status;
      reader.readMessage(value,cs3_rpc_v1beta1_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 2:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_rpc_v1beta1_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.rpc.v1beta1.Status status = 1;
 * @return {?proto.cs3.rpc.v1beta1.Status}
 */
proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.v1beta1.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_v1beta1_status_pb.Status, 1));
};


/**
 * @param {?proto.cs3.rpc.v1beta1.Status|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 2;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 2));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && cs3_storage_provider_v1beta1_resources_pb.Reference.toObject(includeInstance, f),
    key: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest}
 */
proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest;
  return proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest}
 */
proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 2:
      var value = new cs3_storage_provider_v1beta1_resources_pb.Reference;
      reader.readMessage(value,cs3_storage_provider_v1beta1_resources_pb.Reference.deserializeBinaryFromReader);
      msg.setRef(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storage_provider_v1beta1_resources_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 1));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reference ref = 2;
 * @return {?proto.cs3.storage.provider.v1beta1.Reference}
 */
proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storage_provider_v1beta1_resources_pb.Reference, 2));
};


/**
 * @param {?proto.cs3.storage.provider.v1beta1.Reference|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest.prototype.setRef = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest.prototype.clearRef = function() {
  return this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest.prototype.hasRef = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string key = 3;
 * @return {string}
 */
proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_v1beta1_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse}
 */
proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse;
  return proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse}
 */
proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_rpc_v1beta1_status_pb.Status;
      reader.readMessage(value,cs3_rpc_v1beta1_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 2:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_rpc_v1beta1_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.rpc.v1beta1.Status status = 1;
 * @return {?proto.cs3.rpc.v1beta1.Status}
 */
proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.v1beta1.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_v1beta1_status_pb.Status, 1));
};


/**
 * @param {?proto.cs3.rpc.v1beta1.Status|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 2;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 2));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && cs3_storage_provider_v1beta1_resources_pb.Reference.toObject(includeInstance, f),
    key: jspb.Message.getFieldWithDefault(msg, 3, ""),
    restorePath: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest}
 */
proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest;
  return proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest}
 */
proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 2:
      var value = new cs3_storage_provider_v1beta1_resources_pb.Reference;
      reader.readMessage(value,cs3_storage_provider_v1beta1_resources_pb.Reference.deserializeBinaryFromReader);
      msg.setRef(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRestorePath(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storage_provider_v1beta1_resources_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRestorePath();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 1));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reference ref = 2;
 * @return {?proto.cs3.storage.provider.v1beta1.Reference}
 */
proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storage_provider_v1beta1_resources_pb.Reference, 2));
};


/**
 * @param {?proto.cs3.storage.provider.v1beta1.Reference|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest.prototype.setRef = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest.prototype.clearRef = function() {
  return this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest.prototype.hasRef = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string key = 3;
 * @return {string}
 */
proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string restore_path = 4;
 * @return {string}
 */
proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest.prototype.getRestorePath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest.prototype.setRestorePath = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_v1beta1_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse}
 */
proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse;
  return proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse}
 */
proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_rpc_v1beta1_status_pb.Status;
      reader.readMessage(value,cs3_rpc_v1beta1_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 2:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_rpc_v1beta1_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.rpc.v1beta1.Status status = 1;
 * @return {?proto.cs3.rpc.v1beta1.Status}
 */
proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.v1beta1.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_v1beta1_status_pb.Status, 1));
};


/**
 * @param {?proto.cs3.rpc.v1beta1.Status|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 2;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 2));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.RemoveGrantRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.RemoveGrantRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.RemoveGrantRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.RemoveGrantRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && cs3_storage_provider_v1beta1_resources_pb.Reference.toObject(includeInstance, f),
    grant: (f = msg.getGrant()) && cs3_storage_provider_v1beta1_resources_pb.Grant.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.RemoveGrantRequest}
 */
proto.cs3.storage.provider.v1beta1.RemoveGrantRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.RemoveGrantRequest;
  return proto.cs3.storage.provider.v1beta1.RemoveGrantRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.RemoveGrantRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.RemoveGrantRequest}
 */
proto.cs3.storage.provider.v1beta1.RemoveGrantRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 2:
      var value = new cs3_storage_provider_v1beta1_resources_pb.Reference;
      reader.readMessage(value,cs3_storage_provider_v1beta1_resources_pb.Reference.deserializeBinaryFromReader);
      msg.setRef(value);
      break;
    case 3:
      var value = new cs3_storage_provider_v1beta1_resources_pb.Grant;
      reader.readMessage(value,cs3_storage_provider_v1beta1_resources_pb.Grant.deserializeBinaryFromReader);
      msg.setGrant(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.RemoveGrantRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.RemoveGrantRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.RemoveGrantRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.RemoveGrantRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storage_provider_v1beta1_resources_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getGrant();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      cs3_storage_provider_v1beta1_resources_pb.Grant.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.RemoveGrantRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 1));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.RemoveGrantRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.RemoveGrantRequest.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.RemoveGrantRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.RemoveGrantRequest.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.RemoveGrantRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reference ref = 2;
 * @return {?proto.cs3.storage.provider.v1beta1.Reference}
 */
proto.cs3.storage.provider.v1beta1.RemoveGrantRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storage_provider_v1beta1_resources_pb.Reference, 2));
};


/**
 * @param {?proto.cs3.storage.provider.v1beta1.Reference|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.RemoveGrantRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.RemoveGrantRequest.prototype.setRef = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.RemoveGrantRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.RemoveGrantRequest.prototype.clearRef = function() {
  return this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.RemoveGrantRequest.prototype.hasRef = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Grant grant = 3;
 * @return {?proto.cs3.storage.provider.v1beta1.Grant}
 */
proto.cs3.storage.provider.v1beta1.RemoveGrantRequest.prototype.getGrant = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.Grant} */ (
    jspb.Message.getWrapperField(this, cs3_storage_provider_v1beta1_resources_pb.Grant, 3));
};


/**
 * @param {?proto.cs3.storage.provider.v1beta1.Grant|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.RemoveGrantRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.RemoveGrantRequest.prototype.setGrant = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.RemoveGrantRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.RemoveGrantRequest.prototype.clearGrant = function() {
  return this.setGrant(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.RemoveGrantRequest.prototype.hasGrant = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.RemoveGrantResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.RemoveGrantResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.RemoveGrantResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.RemoveGrantResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_v1beta1_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.RemoveGrantResponse}
 */
proto.cs3.storage.provider.v1beta1.RemoveGrantResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.RemoveGrantResponse;
  return proto.cs3.storage.provider.v1beta1.RemoveGrantResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.RemoveGrantResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.RemoveGrantResponse}
 */
proto.cs3.storage.provider.v1beta1.RemoveGrantResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_rpc_v1beta1_status_pb.Status;
      reader.readMessage(value,cs3_rpc_v1beta1_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 2:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.RemoveGrantResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.RemoveGrantResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.RemoveGrantResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.RemoveGrantResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_rpc_v1beta1_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.rpc.v1beta1.Status status = 1;
 * @return {?proto.cs3.rpc.v1beta1.Status}
 */
proto.cs3.storage.provider.v1beta1.RemoveGrantResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.v1beta1.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_v1beta1_status_pb.Status, 1));
};


/**
 * @param {?proto.cs3.rpc.v1beta1.Status|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.RemoveGrantResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.RemoveGrantResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.RemoveGrantResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.RemoveGrantResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.RemoveGrantResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 2;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.RemoveGrantResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 2));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.RemoveGrantResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.RemoveGrantResponse.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.RemoveGrantResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.RemoveGrantResponse.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.RemoveGrantResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cs3.storage.provider.v1beta1.StatRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.StatRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.StatRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.StatRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.StatRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && cs3_storage_provider_v1beta1_resources_pb.Reference.toObject(includeInstance, f),
    arbitraryMetadataKeysList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.StatRequest}
 */
proto.cs3.storage.provider.v1beta1.StatRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.StatRequest;
  return proto.cs3.storage.provider.v1beta1.StatRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.StatRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.StatRequest}
 */
proto.cs3.storage.provider.v1beta1.StatRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 2:
      var value = new cs3_storage_provider_v1beta1_resources_pb.Reference;
      reader.readMessage(value,cs3_storage_provider_v1beta1_resources_pb.Reference.deserializeBinaryFromReader);
      msg.setRef(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addArbitraryMetadataKeys(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.StatRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.StatRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.StatRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.StatRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storage_provider_v1beta1_resources_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getArbitraryMetadataKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.StatRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 1));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.StatRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.StatRequest.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.StatRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.StatRequest.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.StatRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reference ref = 2;
 * @return {?proto.cs3.storage.provider.v1beta1.Reference}
 */
proto.cs3.storage.provider.v1beta1.StatRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storage_provider_v1beta1_resources_pb.Reference, 2));
};


/**
 * @param {?proto.cs3.storage.provider.v1beta1.Reference|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.StatRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.StatRequest.prototype.setRef = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.StatRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.StatRequest.prototype.clearRef = function() {
  return this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.StatRequest.prototype.hasRef = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string arbitrary_metadata_keys = 3;
 * @return {!Array<string>}
 */
proto.cs3.storage.provider.v1beta1.StatRequest.prototype.getArbitraryMetadataKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.cs3.storage.provider.v1beta1.StatRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.StatRequest.prototype.setArbitraryMetadataKeysList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.cs3.storage.provider.v1beta1.StatRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.StatRequest.prototype.addArbitraryMetadataKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cs3.storage.provider.v1beta1.StatRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.StatRequest.prototype.clearArbitraryMetadataKeysList = function() {
  return this.setArbitraryMetadataKeysList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.StatResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.StatResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.StatResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.StatResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_v1beta1_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    info: (f = msg.getInfo()) && cs3_storage_provider_v1beta1_resources_pb.ResourceInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.StatResponse}
 */
proto.cs3.storage.provider.v1beta1.StatResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.StatResponse;
  return proto.cs3.storage.provider.v1beta1.StatResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.StatResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.StatResponse}
 */
proto.cs3.storage.provider.v1beta1.StatResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_rpc_v1beta1_status_pb.Status;
      reader.readMessage(value,cs3_rpc_v1beta1_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 2:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 3:
      var value = new cs3_storage_provider_v1beta1_resources_pb.ResourceInfo;
      reader.readMessage(value,cs3_storage_provider_v1beta1_resources_pb.ResourceInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.StatResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.StatResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.StatResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.StatResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_rpc_v1beta1_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      cs3_storage_provider_v1beta1_resources_pb.ResourceInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.rpc.v1beta1.Status status = 1;
 * @return {?proto.cs3.rpc.v1beta1.Status}
 */
proto.cs3.storage.provider.v1beta1.StatResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.v1beta1.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_v1beta1_status_pb.Status, 1));
};


/**
 * @param {?proto.cs3.rpc.v1beta1.Status|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.StatResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.StatResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.StatResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.StatResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.StatResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 2;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.StatResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 2));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.StatResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.StatResponse.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.StatResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.StatResponse.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.StatResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ResourceInfo info = 3;
 * @return {?proto.cs3.storage.provider.v1beta1.ResourceInfo}
 */
proto.cs3.storage.provider.v1beta1.StatResponse.prototype.getInfo = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.ResourceInfo} */ (
    jspb.Message.getWrapperField(this, cs3_storage_provider_v1beta1_resources_pb.ResourceInfo, 3));
};


/**
 * @param {?proto.cs3.storage.provider.v1beta1.ResourceInfo|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.StatResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.StatResponse.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.StatResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.StatResponse.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.StatResponse.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.UpdateGrantRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.UpdateGrantRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.UpdateGrantRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.UpdateGrantRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && cs3_storage_provider_v1beta1_resources_pb.Reference.toObject(includeInstance, f),
    grant: (f = msg.getGrant()) && cs3_storage_provider_v1beta1_resources_pb.Grant.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.UpdateGrantRequest}
 */
proto.cs3.storage.provider.v1beta1.UpdateGrantRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.UpdateGrantRequest;
  return proto.cs3.storage.provider.v1beta1.UpdateGrantRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.UpdateGrantRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.UpdateGrantRequest}
 */
proto.cs3.storage.provider.v1beta1.UpdateGrantRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 2:
      var value = new cs3_storage_provider_v1beta1_resources_pb.Reference;
      reader.readMessage(value,cs3_storage_provider_v1beta1_resources_pb.Reference.deserializeBinaryFromReader);
      msg.setRef(value);
      break;
    case 3:
      var value = new cs3_storage_provider_v1beta1_resources_pb.Grant;
      reader.readMessage(value,cs3_storage_provider_v1beta1_resources_pb.Grant.deserializeBinaryFromReader);
      msg.setGrant(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.UpdateGrantRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.UpdateGrantRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.UpdateGrantRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.UpdateGrantRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storage_provider_v1beta1_resources_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getGrant();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      cs3_storage_provider_v1beta1_resources_pb.Grant.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.UpdateGrantRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 1));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.UpdateGrantRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.UpdateGrantRequest.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.UpdateGrantRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.UpdateGrantRequest.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.UpdateGrantRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reference ref = 2;
 * @return {?proto.cs3.storage.provider.v1beta1.Reference}
 */
proto.cs3.storage.provider.v1beta1.UpdateGrantRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storage_provider_v1beta1_resources_pb.Reference, 2));
};


/**
 * @param {?proto.cs3.storage.provider.v1beta1.Reference|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.UpdateGrantRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.UpdateGrantRequest.prototype.setRef = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.UpdateGrantRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.UpdateGrantRequest.prototype.clearRef = function() {
  return this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.UpdateGrantRequest.prototype.hasRef = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Grant grant = 3;
 * @return {?proto.cs3.storage.provider.v1beta1.Grant}
 */
proto.cs3.storage.provider.v1beta1.UpdateGrantRequest.prototype.getGrant = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.Grant} */ (
    jspb.Message.getWrapperField(this, cs3_storage_provider_v1beta1_resources_pb.Grant, 3));
};


/**
 * @param {?proto.cs3.storage.provider.v1beta1.Grant|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.UpdateGrantRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.UpdateGrantRequest.prototype.setGrant = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.UpdateGrantRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.UpdateGrantRequest.prototype.clearGrant = function() {
  return this.setGrant(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.UpdateGrantRequest.prototype.hasGrant = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.UpdateGrantResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.UpdateGrantResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.UpdateGrantResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.UpdateGrantResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_v1beta1_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.UpdateGrantResponse}
 */
proto.cs3.storage.provider.v1beta1.UpdateGrantResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.UpdateGrantResponse;
  return proto.cs3.storage.provider.v1beta1.UpdateGrantResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.UpdateGrantResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.UpdateGrantResponse}
 */
proto.cs3.storage.provider.v1beta1.UpdateGrantResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_rpc_v1beta1_status_pb.Status;
      reader.readMessage(value,cs3_rpc_v1beta1_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 2:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.UpdateGrantResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.UpdateGrantResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.UpdateGrantResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.UpdateGrantResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_rpc_v1beta1_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.rpc.v1beta1.Status status = 1;
 * @return {?proto.cs3.rpc.v1beta1.Status}
 */
proto.cs3.storage.provider.v1beta1.UpdateGrantResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.v1beta1.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_v1beta1_status_pb.Status, 1));
};


/**
 * @param {?proto.cs3.rpc.v1beta1.Status|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.UpdateGrantResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.UpdateGrantResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.UpdateGrantResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.UpdateGrantResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.UpdateGrantResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 2;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.UpdateGrantResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 2));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.UpdateGrantResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.UpdateGrantResponse.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.UpdateGrantResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.UpdateGrantResponse.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.UpdateGrantResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.CreateSymlinkRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.CreateSymlinkRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.CreateSymlinkRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.CreateSymlinkRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    target: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.CreateSymlinkRequest}
 */
proto.cs3.storage.provider.v1beta1.CreateSymlinkRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.CreateSymlinkRequest;
  return proto.cs3.storage.provider.v1beta1.CreateSymlinkRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.CreateSymlinkRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.CreateSymlinkRequest}
 */
proto.cs3.storage.provider.v1beta1.CreateSymlinkRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTarget(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.CreateSymlinkRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.CreateSymlinkRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.CreateSymlinkRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.CreateSymlinkRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTarget();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.CreateSymlinkRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 1));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.CreateSymlinkRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.CreateSymlinkRequest.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.CreateSymlinkRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.CreateSymlinkRequest.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.CreateSymlinkRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.cs3.storage.provider.v1beta1.CreateSymlinkRequest.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cs3.storage.provider.v1beta1.CreateSymlinkRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.CreateSymlinkRequest.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string target = 3;
 * @return {string}
 */
proto.cs3.storage.provider.v1beta1.CreateSymlinkRequest.prototype.getTarget = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cs3.storage.provider.v1beta1.CreateSymlinkRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.CreateSymlinkRequest.prototype.setTarget = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.CreateSymlinkResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.CreateSymlinkResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.CreateSymlinkResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.CreateSymlinkResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_v1beta1_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.CreateSymlinkResponse}
 */
proto.cs3.storage.provider.v1beta1.CreateSymlinkResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.CreateSymlinkResponse;
  return proto.cs3.storage.provider.v1beta1.CreateSymlinkResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.CreateSymlinkResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.CreateSymlinkResponse}
 */
proto.cs3.storage.provider.v1beta1.CreateSymlinkResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_rpc_v1beta1_status_pb.Status;
      reader.readMessage(value,cs3_rpc_v1beta1_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 2:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.CreateSymlinkResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.CreateSymlinkResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.CreateSymlinkResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.CreateSymlinkResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_rpc_v1beta1_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.rpc.v1beta1.Status status = 1;
 * @return {?proto.cs3.rpc.v1beta1.Status}
 */
proto.cs3.storage.provider.v1beta1.CreateSymlinkResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.v1beta1.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_v1beta1_status_pb.Status, 1));
};


/**
 * @param {?proto.cs3.rpc.v1beta1.Status|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.CreateSymlinkResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.CreateSymlinkResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.CreateSymlinkResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.CreateSymlinkResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.CreateSymlinkResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 2;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.CreateSymlinkResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 2));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.CreateSymlinkResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.CreateSymlinkResponse.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.CreateSymlinkResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.CreateSymlinkResponse.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.CreateSymlinkResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.CreateReferenceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.CreateReferenceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.CreateReferenceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.CreateReferenceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    targetUri: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.CreateReferenceRequest}
 */
proto.cs3.storage.provider.v1beta1.CreateReferenceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.CreateReferenceRequest;
  return proto.cs3.storage.provider.v1beta1.CreateReferenceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.CreateReferenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.CreateReferenceRequest}
 */
proto.cs3.storage.provider.v1beta1.CreateReferenceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetUri(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.CreateReferenceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.CreateReferenceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.CreateReferenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.CreateReferenceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTargetUri();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.CreateReferenceRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 1));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.CreateReferenceRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.CreateReferenceRequest.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.CreateReferenceRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.CreateReferenceRequest.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.CreateReferenceRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.cs3.storage.provider.v1beta1.CreateReferenceRequest.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cs3.storage.provider.v1beta1.CreateReferenceRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.CreateReferenceRequest.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string target_uri = 3;
 * @return {string}
 */
proto.cs3.storage.provider.v1beta1.CreateReferenceRequest.prototype.getTargetUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cs3.storage.provider.v1beta1.CreateReferenceRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.CreateReferenceRequest.prototype.setTargetUri = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.CreateReferenceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.CreateReferenceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.CreateReferenceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.CreateReferenceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_v1beta1_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.CreateReferenceResponse}
 */
proto.cs3.storage.provider.v1beta1.CreateReferenceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.CreateReferenceResponse;
  return proto.cs3.storage.provider.v1beta1.CreateReferenceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.CreateReferenceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.CreateReferenceResponse}
 */
proto.cs3.storage.provider.v1beta1.CreateReferenceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_rpc_v1beta1_status_pb.Status;
      reader.readMessage(value,cs3_rpc_v1beta1_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 2:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.CreateReferenceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.CreateReferenceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.CreateReferenceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.CreateReferenceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_rpc_v1beta1_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.rpc.v1beta1.Status status = 1;
 * @return {?proto.cs3.rpc.v1beta1.Status}
 */
proto.cs3.storage.provider.v1beta1.CreateReferenceResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.v1beta1.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_v1beta1_status_pb.Status, 1));
};


/**
 * @param {?proto.cs3.rpc.v1beta1.Status|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.CreateReferenceResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.CreateReferenceResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.CreateReferenceResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.CreateReferenceResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.CreateReferenceResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 2;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.CreateReferenceResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 2));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.CreateReferenceResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.CreateReferenceResponse.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.CreateReferenceResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.CreateReferenceResponse.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.CreateReferenceResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && cs3_storage_provider_v1beta1_resources_pb.Reference.toObject(includeInstance, f),
    arbitraryMetadata: (f = msg.getArbitraryMetadata()) && cs3_storage_provider_v1beta1_resources_pb.ArbitraryMetadata.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest}
 */
proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest;
  return proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest}
 */
proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 2:
      var value = new cs3_storage_provider_v1beta1_resources_pb.Reference;
      reader.readMessage(value,cs3_storage_provider_v1beta1_resources_pb.Reference.deserializeBinaryFromReader);
      msg.setRef(value);
      break;
    case 3:
      var value = new cs3_storage_provider_v1beta1_resources_pb.ArbitraryMetadata;
      reader.readMessage(value,cs3_storage_provider_v1beta1_resources_pb.ArbitraryMetadata.deserializeBinaryFromReader);
      msg.setArbitraryMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storage_provider_v1beta1_resources_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getArbitraryMetadata();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      cs3_storage_provider_v1beta1_resources_pb.ArbitraryMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 1));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reference ref = 2;
 * @return {?proto.cs3.storage.provider.v1beta1.Reference}
 */
proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storage_provider_v1beta1_resources_pb.Reference, 2));
};


/**
 * @param {?proto.cs3.storage.provider.v1beta1.Reference|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest.prototype.setRef = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest.prototype.clearRef = function() {
  return this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest.prototype.hasRef = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ArbitraryMetadata arbitrary_metadata = 3;
 * @return {?proto.cs3.storage.provider.v1beta1.ArbitraryMetadata}
 */
proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest.prototype.getArbitraryMetadata = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.ArbitraryMetadata} */ (
    jspb.Message.getWrapperField(this, cs3_storage_provider_v1beta1_resources_pb.ArbitraryMetadata, 3));
};


/**
 * @param {?proto.cs3.storage.provider.v1beta1.ArbitraryMetadata|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest.prototype.setArbitraryMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest.prototype.clearArbitraryMetadata = function() {
  return this.setArbitraryMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest.prototype.hasArbitraryMetadata = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_v1beta1_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse}
 */
proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse;
  return proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse}
 */
proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_rpc_v1beta1_status_pb.Status;
      reader.readMessage(value,cs3_rpc_v1beta1_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 2:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_rpc_v1beta1_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.rpc.v1beta1.Status status = 1;
 * @return {?proto.cs3.rpc.v1beta1.Status}
 */
proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.v1beta1.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_v1beta1_status_pb.Status, 1));
};


/**
 * @param {?proto.cs3.rpc.v1beta1.Status|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 2;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 2));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && cs3_storage_provider_v1beta1_resources_pb.Reference.toObject(includeInstance, f),
    arbitraryMetadataKeysList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest}
 */
proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest;
  return proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest}
 */
proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    case 2:
      var value = new cs3_storage_provider_v1beta1_resources_pb.Reference;
      reader.readMessage(value,cs3_storage_provider_v1beta1_resources_pb.Reference.deserializeBinaryFromReader);
      msg.setRef(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addArbitraryMetadataKeys(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_storage_provider_v1beta1_resources_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getArbitraryMetadataKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 1));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reference ref = 2;
 * @return {?proto.cs3.storage.provider.v1beta1.Reference}
 */
proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest.prototype.getRef = function() {
  return /** @type{?proto.cs3.storage.provider.v1beta1.Reference} */ (
    jspb.Message.getWrapperField(this, cs3_storage_provider_v1beta1_resources_pb.Reference, 2));
};


/**
 * @param {?proto.cs3.storage.provider.v1beta1.Reference|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest.prototype.setRef = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest.prototype.clearRef = function() {
  return this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest.prototype.hasRef = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string arbitrary_metadata_keys = 3;
 * @return {!Array<string>}
 */
proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest.prototype.getArbitraryMetadataKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest.prototype.setArbitraryMetadataKeysList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest.prototype.addArbitraryMetadataKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest.prototype.clearArbitraryMetadataKeysList = function() {
  return this.setArbitraryMetadataKeysList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_v1beta1_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse}
 */
proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse;
  return proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse}
 */
proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_rpc_v1beta1_status_pb.Status;
      reader.readMessage(value,cs3_rpc_v1beta1_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 2:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_rpc_v1beta1_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.rpc.v1beta1.Status status = 1;
 * @return {?proto.cs3.rpc.v1beta1.Status}
 */
proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.v1beta1.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_v1beta1_status_pb.Status, 1));
};


/**
 * @param {?proto.cs3.rpc.v1beta1.Status|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 2;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 2));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.CreateHomeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.CreateHomeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.CreateHomeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.CreateHomeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.CreateHomeRequest}
 */
proto.cs3.storage.provider.v1beta1.CreateHomeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.CreateHomeRequest;
  return proto.cs3.storage.provider.v1beta1.CreateHomeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.CreateHomeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.CreateHomeRequest}
 */
proto.cs3.storage.provider.v1beta1.CreateHomeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.CreateHomeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.CreateHomeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.CreateHomeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.CreateHomeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 1;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.CreateHomeRequest.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 1));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.CreateHomeRequest} returns this
*/
proto.cs3.storage.provider.v1beta1.CreateHomeRequest.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.CreateHomeRequest} returns this
 */
proto.cs3.storage.provider.v1beta1.CreateHomeRequest.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.CreateHomeRequest.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cs3.storage.provider.v1beta1.CreateHomeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cs3.storage.provider.v1beta1.CreateHomeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cs3.storage.provider.v1beta1.CreateHomeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.CreateHomeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && cs3_rpc_v1beta1_status_pb.Status.toObject(includeInstance, f),
    opaque: (f = msg.getOpaque()) && cs3_types_v1beta1_types_pb.Opaque.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cs3.storage.provider.v1beta1.CreateHomeResponse}
 */
proto.cs3.storage.provider.v1beta1.CreateHomeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cs3.storage.provider.v1beta1.CreateHomeResponse;
  return proto.cs3.storage.provider.v1beta1.CreateHomeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cs3.storage.provider.v1beta1.CreateHomeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cs3.storage.provider.v1beta1.CreateHomeResponse}
 */
proto.cs3.storage.provider.v1beta1.CreateHomeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cs3_rpc_v1beta1_status_pb.Status;
      reader.readMessage(value,cs3_rpc_v1beta1_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 2:
      var value = new cs3_types_v1beta1_types_pb.Opaque;
      reader.readMessage(value,cs3_types_v1beta1_types_pb.Opaque.deserializeBinaryFromReader);
      msg.setOpaque(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cs3.storage.provider.v1beta1.CreateHomeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cs3.storage.provider.v1beta1.CreateHomeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cs3.storage.provider.v1beta1.CreateHomeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cs3.storage.provider.v1beta1.CreateHomeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cs3_rpc_v1beta1_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getOpaque();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cs3_types_v1beta1_types_pb.Opaque.serializeBinaryToWriter
    );
  }
};


/**
 * optional cs3.rpc.v1beta1.Status status = 1;
 * @return {?proto.cs3.rpc.v1beta1.Status}
 */
proto.cs3.storage.provider.v1beta1.CreateHomeResponse.prototype.getStatus = function() {
  return /** @type{?proto.cs3.rpc.v1beta1.Status} */ (
    jspb.Message.getWrapperField(this, cs3_rpc_v1beta1_status_pb.Status, 1));
};


/**
 * @param {?proto.cs3.rpc.v1beta1.Status|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.CreateHomeResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.CreateHomeResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.CreateHomeResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.CreateHomeResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.CreateHomeResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cs3.types.v1beta1.Opaque opaque = 2;
 * @return {?proto.cs3.types.v1beta1.Opaque}
 */
proto.cs3.storage.provider.v1beta1.CreateHomeResponse.prototype.getOpaque = function() {
  return /** @type{?proto.cs3.types.v1beta1.Opaque} */ (
    jspb.Message.getWrapperField(this, cs3_types_v1beta1_types_pb.Opaque, 2));
};


/**
 * @param {?proto.cs3.types.v1beta1.Opaque|undefined} value
 * @return {!proto.cs3.storage.provider.v1beta1.CreateHomeResponse} returns this
*/
proto.cs3.storage.provider.v1beta1.CreateHomeResponse.prototype.setOpaque = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cs3.storage.provider.v1beta1.CreateHomeResponse} returns this
 */
proto.cs3.storage.provider.v1beta1.CreateHomeResponse.prototype.clearOpaque = function() {
  return this.setOpaque(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cs3.storage.provider.v1beta1.CreateHomeResponse.prototype.hasOpaque = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.cs3.storage.provider.v1beta1);
