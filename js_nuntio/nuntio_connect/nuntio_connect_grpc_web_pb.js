/**
 * @fileoverview gRPC-Web generated client stub for NuntioConnect
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var nuntio_pb = require('./nuntio_pb.js')
const proto = {};
proto.NuntioConnect = require('./nuntio_connect_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.NuntioConnect.PublicServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.NuntioConnect.PublicServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.NuntioConnect.ConnectPublicRequest,
 *   !proto.NuntioConnect.ConnectPublicResponse>}
 */
const methodDescriptor_PublicService_Heartbeat = new grpc.web.MethodDescriptor(
  '/NuntioConnect.PublicService/Heartbeat',
  grpc.web.MethodType.UNARY,
  proto.NuntioConnect.ConnectPublicRequest,
  proto.NuntioConnect.ConnectPublicResponse,
  /**
   * @param {!proto.NuntioConnect.ConnectPublicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.NuntioConnect.ConnectPublicResponse.deserializeBinary
);


/**
 * @param {!proto.NuntioConnect.ConnectPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.NuntioConnect.ConnectPublicResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.NuntioConnect.ConnectPublicResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.NuntioConnect.PublicServiceClient.prototype.heartbeat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NuntioConnect.PublicService/Heartbeat',
      request,
      metadata || {},
      methodDescriptor_PublicService_Heartbeat,
      callback);
};


/**
 * @param {!proto.NuntioConnect.ConnectPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.NuntioConnect.ConnectPublicResponse>}
 *     Promise that resolves to the response
 */
proto.NuntioConnect.PublicServicePromiseClient.prototype.heartbeat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NuntioConnect.PublicService/Heartbeat',
      request,
      metadata || {},
      methodDescriptor_PublicService_Heartbeat);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.NuntioConnect.ConnectPublicRequest,
 *   !proto.NuntioConnect.ConnectPublicResponse>}
 */
const methodDescriptor_PublicService_ValidateLoginChallenge = new grpc.web.MethodDescriptor(
  '/NuntioConnect.PublicService/ValidateLoginChallenge',
  grpc.web.MethodType.UNARY,
  proto.NuntioConnect.ConnectPublicRequest,
  proto.NuntioConnect.ConnectPublicResponse,
  /**
   * @param {!proto.NuntioConnect.ConnectPublicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.NuntioConnect.ConnectPublicResponse.deserializeBinary
);


/**
 * @param {!proto.NuntioConnect.ConnectPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.NuntioConnect.ConnectPublicResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.NuntioConnect.ConnectPublicResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.NuntioConnect.PublicServiceClient.prototype.validateLoginChallenge =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NuntioConnect.PublicService/ValidateLoginChallenge',
      request,
      metadata || {},
      methodDescriptor_PublicService_ValidateLoginChallenge,
      callback);
};


/**
 * @param {!proto.NuntioConnect.ConnectPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.NuntioConnect.ConnectPublicResponse>}
 *     Promise that resolves to the response
 */
proto.NuntioConnect.PublicServicePromiseClient.prototype.validateLoginChallenge =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NuntioConnect.PublicService/ValidateLoginChallenge',
      request,
      metadata || {},
      methodDescriptor_PublicService_ValidateLoginChallenge);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.NuntioConnect.ConnectPublicRequest,
 *   !proto.NuntioConnect.ConnectPublicResponse>}
 */
const methodDescriptor_PublicService_Login = new grpc.web.MethodDescriptor(
  '/NuntioConnect.PublicService/Login',
  grpc.web.MethodType.UNARY,
  proto.NuntioConnect.ConnectPublicRequest,
  proto.NuntioConnect.ConnectPublicResponse,
  /**
   * @param {!proto.NuntioConnect.ConnectPublicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.NuntioConnect.ConnectPublicResponse.deserializeBinary
);


/**
 * @param {!proto.NuntioConnect.ConnectPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.NuntioConnect.ConnectPublicResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.NuntioConnect.ConnectPublicResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.NuntioConnect.PublicServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NuntioConnect.PublicService/Login',
      request,
      metadata || {},
      methodDescriptor_PublicService_Login,
      callback);
};


/**
 * @param {!proto.NuntioConnect.ConnectPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.NuntioConnect.ConnectPublicResponse>}
 *     Promise that resolves to the response
 */
proto.NuntioConnect.PublicServicePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NuntioConnect.PublicService/Login',
      request,
      metadata || {},
      methodDescriptor_PublicService_Login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.NuntioConnect.ConnectPublicRequest,
 *   !proto.NuntioConnect.ConnectPublicResponse>}
 */
const methodDescriptor_PublicService_ValidateConsentChallenge = new grpc.web.MethodDescriptor(
  '/NuntioConnect.PublicService/ValidateConsentChallenge',
  grpc.web.MethodType.UNARY,
  proto.NuntioConnect.ConnectPublicRequest,
  proto.NuntioConnect.ConnectPublicResponse,
  /**
   * @param {!proto.NuntioConnect.ConnectPublicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.NuntioConnect.ConnectPublicResponse.deserializeBinary
);


/**
 * @param {!proto.NuntioConnect.ConnectPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.NuntioConnect.ConnectPublicResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.NuntioConnect.ConnectPublicResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.NuntioConnect.PublicServiceClient.prototype.validateConsentChallenge =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NuntioConnect.PublicService/ValidateConsentChallenge',
      request,
      metadata || {},
      methodDescriptor_PublicService_ValidateConsentChallenge,
      callback);
};


/**
 * @param {!proto.NuntioConnect.ConnectPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.NuntioConnect.ConnectPublicResponse>}
 *     Promise that resolves to the response
 */
proto.NuntioConnect.PublicServicePromiseClient.prototype.validateConsentChallenge =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NuntioConnect.PublicService/ValidateConsentChallenge',
      request,
      metadata || {},
      methodDescriptor_PublicService_ValidateConsentChallenge);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.NuntioConnect.ConnectPublicRequest,
 *   !proto.NuntioConnect.ConnectPublicResponse>}
 */
const methodDescriptor_PublicService_GiveConsent = new grpc.web.MethodDescriptor(
  '/NuntioConnect.PublicService/GiveConsent',
  grpc.web.MethodType.UNARY,
  proto.NuntioConnect.ConnectPublicRequest,
  proto.NuntioConnect.ConnectPublicResponse,
  /**
   * @param {!proto.NuntioConnect.ConnectPublicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.NuntioConnect.ConnectPublicResponse.deserializeBinary
);


/**
 * @param {!proto.NuntioConnect.ConnectPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.NuntioConnect.ConnectPublicResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.NuntioConnect.ConnectPublicResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.NuntioConnect.PublicServiceClient.prototype.giveConsent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NuntioConnect.PublicService/GiveConsent',
      request,
      metadata || {},
      methodDescriptor_PublicService_GiveConsent,
      callback);
};


/**
 * @param {!proto.NuntioConnect.ConnectPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.NuntioConnect.ConnectPublicResponse>}
 *     Promise that resolves to the response
 */
proto.NuntioConnect.PublicServicePromiseClient.prototype.giveConsent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NuntioConnect.PublicService/GiveConsent',
      request,
      metadata || {},
      methodDescriptor_PublicService_GiveConsent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.NuntioConnect.ConnectPublicRequest,
 *   !proto.NuntioConnect.ConnectPublicResponse>}
 */
const methodDescriptor_PublicService_Logout = new grpc.web.MethodDescriptor(
  '/NuntioConnect.PublicService/Logout',
  grpc.web.MethodType.UNARY,
  proto.NuntioConnect.ConnectPublicRequest,
  proto.NuntioConnect.ConnectPublicResponse,
  /**
   * @param {!proto.NuntioConnect.ConnectPublicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.NuntioConnect.ConnectPublicResponse.deserializeBinary
);


/**
 * @param {!proto.NuntioConnect.ConnectPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.NuntioConnect.ConnectPublicResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.NuntioConnect.ConnectPublicResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.NuntioConnect.PublicServiceClient.prototype.logout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NuntioConnect.PublicService/Logout',
      request,
      metadata || {},
      methodDescriptor_PublicService_Logout,
      callback);
};


/**
 * @param {!proto.NuntioConnect.ConnectPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.NuntioConnect.ConnectPublicResponse>}
 *     Promise that resolves to the response
 */
proto.NuntioConnect.PublicServicePromiseClient.prototype.logout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NuntioConnect.PublicService/Logout',
      request,
      metadata || {},
      methodDescriptor_PublicService_Logout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.NuntioConnect.ConnectPublicRequest,
 *   !proto.NuntioConnect.ConnectPublicResponse>}
 */
const methodDescriptor_PublicService_CreateUser = new grpc.web.MethodDescriptor(
  '/NuntioConnect.PublicService/CreateUser',
  grpc.web.MethodType.UNARY,
  proto.NuntioConnect.ConnectPublicRequest,
  proto.NuntioConnect.ConnectPublicResponse,
  /**
   * @param {!proto.NuntioConnect.ConnectPublicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.NuntioConnect.ConnectPublicResponse.deserializeBinary
);


/**
 * @param {!proto.NuntioConnect.ConnectPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.NuntioConnect.ConnectPublicResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.NuntioConnect.ConnectPublicResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.NuntioConnect.PublicServiceClient.prototype.createUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NuntioConnect.PublicService/CreateUser',
      request,
      metadata || {},
      methodDescriptor_PublicService_CreateUser,
      callback);
};


/**
 * @param {!proto.NuntioConnect.ConnectPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.NuntioConnect.ConnectPublicResponse>}
 *     Promise that resolves to the response
 */
proto.NuntioConnect.PublicServicePromiseClient.prototype.createUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NuntioConnect.PublicService/CreateUser',
      request,
      metadata || {},
      methodDescriptor_PublicService_CreateUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.NuntioConnect.ConnectPublicRequest,
 *   !proto.NuntioConnect.ConnectPublicResponse>}
 */
const methodDescriptor_PublicService_SendResetEmail = new grpc.web.MethodDescriptor(
  '/NuntioConnect.PublicService/SendResetEmail',
  grpc.web.MethodType.UNARY,
  proto.NuntioConnect.ConnectPublicRequest,
  proto.NuntioConnect.ConnectPublicResponse,
  /**
   * @param {!proto.NuntioConnect.ConnectPublicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.NuntioConnect.ConnectPublicResponse.deserializeBinary
);


/**
 * @param {!proto.NuntioConnect.ConnectPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.NuntioConnect.ConnectPublicResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.NuntioConnect.ConnectPublicResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.NuntioConnect.PublicServiceClient.prototype.sendResetEmail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NuntioConnect.PublicService/SendResetEmail',
      request,
      metadata || {},
      methodDescriptor_PublicService_SendResetEmail,
      callback);
};


/**
 * @param {!proto.NuntioConnect.ConnectPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.NuntioConnect.ConnectPublicResponse>}
 *     Promise that resolves to the response
 */
proto.NuntioConnect.PublicServicePromiseClient.prototype.sendResetEmail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NuntioConnect.PublicService/SendResetEmail',
      request,
      metadata || {},
      methodDescriptor_PublicService_SendResetEmail);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.NuntioConnect.ConnectPublicRequest,
 *   !proto.NuntioConnect.ConnectPublicResponse>}
 */
const methodDescriptor_PublicService_ResetPassword = new grpc.web.MethodDescriptor(
  '/NuntioConnect.PublicService/ResetPassword',
  grpc.web.MethodType.UNARY,
  proto.NuntioConnect.ConnectPublicRequest,
  proto.NuntioConnect.ConnectPublicResponse,
  /**
   * @param {!proto.NuntioConnect.ConnectPublicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.NuntioConnect.ConnectPublicResponse.deserializeBinary
);


/**
 * @param {!proto.NuntioConnect.ConnectPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.NuntioConnect.ConnectPublicResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.NuntioConnect.ConnectPublicResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.NuntioConnect.PublicServiceClient.prototype.resetPassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NuntioConnect.PublicService/ResetPassword',
      request,
      metadata || {},
      methodDescriptor_PublicService_ResetPassword,
      callback);
};


/**
 * @param {!proto.NuntioConnect.ConnectPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.NuntioConnect.ConnectPublicResponse>}
 *     Promise that resolves to the response
 */
proto.NuntioConnect.PublicServicePromiseClient.prototype.resetPassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NuntioConnect.PublicService/ResetPassword',
      request,
      metadata || {},
      methodDescriptor_PublicService_ResetPassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.NuntioConnect.ConnectPublicRequest,
 *   !proto.NuntioConnect.ConnectPublicResponse>}
 */
const methodDescriptor_PublicService_Verify = new grpc.web.MethodDescriptor(
  '/NuntioConnect.PublicService/Verify',
  grpc.web.MethodType.UNARY,
  proto.NuntioConnect.ConnectPublicRequest,
  proto.NuntioConnect.ConnectPublicResponse,
  /**
   * @param {!proto.NuntioConnect.ConnectPublicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.NuntioConnect.ConnectPublicResponse.deserializeBinary
);


/**
 * @param {!proto.NuntioConnect.ConnectPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.NuntioConnect.ConnectPublicResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.NuntioConnect.ConnectPublicResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.NuntioConnect.PublicServiceClient.prototype.verify =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NuntioConnect.PublicService/Verify',
      request,
      metadata || {},
      methodDescriptor_PublicService_Verify,
      callback);
};


/**
 * @param {!proto.NuntioConnect.ConnectPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.NuntioConnect.ConnectPublicResponse>}
 *     Promise that resolves to the response
 */
proto.NuntioConnect.PublicServicePromiseClient.prototype.verify =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NuntioConnect.PublicService/Verify',
      request,
      metadata || {},
      methodDescriptor_PublicService_Verify);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.NuntioConnect.AdminServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.NuntioConnect.AdminServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.NuntioConnect.ConnectAdminRequest,
 *   !proto.NuntioConnect.ConnectAdminRequest>}
 */
const methodDescriptor_AdminService_Heartbeat = new grpc.web.MethodDescriptor(
  '/NuntioConnect.AdminService/Heartbeat',
  grpc.web.MethodType.UNARY,
  proto.NuntioConnect.ConnectAdminRequest,
  proto.NuntioConnect.ConnectAdminRequest,
  /**
   * @param {!proto.NuntioConnect.ConnectAdminRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.NuntioConnect.ConnectAdminRequest.deserializeBinary
);


/**
 * @param {!proto.NuntioConnect.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.NuntioConnect.ConnectAdminRequest)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.NuntioConnect.ConnectAdminRequest>|undefined}
 *     The XHR Node Readable Stream
 */
proto.NuntioConnect.AdminServiceClient.prototype.heartbeat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NuntioConnect.AdminService/Heartbeat',
      request,
      metadata || {},
      methodDescriptor_AdminService_Heartbeat,
      callback);
};


/**
 * @param {!proto.NuntioConnect.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.NuntioConnect.ConnectAdminRequest>}
 *     Promise that resolves to the response
 */
proto.NuntioConnect.AdminServicePromiseClient.prototype.heartbeat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NuntioConnect.AdminService/Heartbeat',
      request,
      metadata || {},
      methodDescriptor_AdminService_Heartbeat);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.NuntioConnect.ConnectAdminRequest,
 *   !proto.NuntioConnect.ConnectAdminResponse>}
 */
const methodDescriptor_AdminService_CreateApp = new grpc.web.MethodDescriptor(
  '/NuntioConnect.AdminService/CreateApp',
  grpc.web.MethodType.UNARY,
  proto.NuntioConnect.ConnectAdminRequest,
  proto.NuntioConnect.ConnectAdminResponse,
  /**
   * @param {!proto.NuntioConnect.ConnectAdminRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.NuntioConnect.ConnectAdminResponse.deserializeBinary
);


/**
 * @param {!proto.NuntioConnect.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.NuntioConnect.ConnectAdminResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.NuntioConnect.ConnectAdminResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.NuntioConnect.AdminServiceClient.prototype.createApp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NuntioConnect.AdminService/CreateApp',
      request,
      metadata || {},
      methodDescriptor_AdminService_CreateApp,
      callback);
};


/**
 * @param {!proto.NuntioConnect.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.NuntioConnect.ConnectAdminResponse>}
 *     Promise that resolves to the response
 */
proto.NuntioConnect.AdminServicePromiseClient.prototype.createApp =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NuntioConnect.AdminService/CreateApp',
      request,
      metadata || {},
      methodDescriptor_AdminService_CreateApp);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.NuntioConnect.ConnectAdminRequest,
 *   !proto.NuntioConnect.ConnectAdminResponse>}
 */
const methodDescriptor_AdminService_GetAppById = new grpc.web.MethodDescriptor(
  '/NuntioConnect.AdminService/GetAppById',
  grpc.web.MethodType.UNARY,
  proto.NuntioConnect.ConnectAdminRequest,
  proto.NuntioConnect.ConnectAdminResponse,
  /**
   * @param {!proto.NuntioConnect.ConnectAdminRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.NuntioConnect.ConnectAdminResponse.deserializeBinary
);


/**
 * @param {!proto.NuntioConnect.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.NuntioConnect.ConnectAdminResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.NuntioConnect.ConnectAdminResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.NuntioConnect.AdminServiceClient.prototype.getAppById =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NuntioConnect.AdminService/GetAppById',
      request,
      metadata || {},
      methodDescriptor_AdminService_GetAppById,
      callback);
};


/**
 * @param {!proto.NuntioConnect.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.NuntioConnect.ConnectAdminResponse>}
 *     Promise that resolves to the response
 */
proto.NuntioConnect.AdminServicePromiseClient.prototype.getAppById =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NuntioConnect.AdminService/GetAppById',
      request,
      metadata || {},
      methodDescriptor_AdminService_GetAppById);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.NuntioConnect.ConnectAdminRequest,
 *   !proto.NuntioConnect.ConnectAdminResponse>}
 */
const methodDescriptor_AdminService_UpdateAppDetails = new grpc.web.MethodDescriptor(
  '/NuntioConnect.AdminService/UpdateAppDetails',
  grpc.web.MethodType.UNARY,
  proto.NuntioConnect.ConnectAdminRequest,
  proto.NuntioConnect.ConnectAdminResponse,
  /**
   * @param {!proto.NuntioConnect.ConnectAdminRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.NuntioConnect.ConnectAdminResponse.deserializeBinary
);


/**
 * @param {!proto.NuntioConnect.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.NuntioConnect.ConnectAdminResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.NuntioConnect.ConnectAdminResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.NuntioConnect.AdminServiceClient.prototype.updateAppDetails =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NuntioConnect.AdminService/UpdateAppDetails',
      request,
      metadata || {},
      methodDescriptor_AdminService_UpdateAppDetails,
      callback);
};


/**
 * @param {!proto.NuntioConnect.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.NuntioConnect.ConnectAdminResponse>}
 *     Promise that resolves to the response
 */
proto.NuntioConnect.AdminServicePromiseClient.prototype.updateAppDetails =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NuntioConnect.AdminService/UpdateAppDetails',
      request,
      metadata || {},
      methodDescriptor_AdminService_UpdateAppDetails);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.NuntioConnect.ConnectAdminRequest,
 *   !proto.NuntioConnect.ConnectAdminResponse>}
 */
const methodDescriptor_AdminService_UpdateAppOAuth = new grpc.web.MethodDescriptor(
  '/NuntioConnect.AdminService/UpdateAppOAuth',
  grpc.web.MethodType.UNARY,
  proto.NuntioConnect.ConnectAdminRequest,
  proto.NuntioConnect.ConnectAdminResponse,
  /**
   * @param {!proto.NuntioConnect.ConnectAdminRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.NuntioConnect.ConnectAdminResponse.deserializeBinary
);


/**
 * @param {!proto.NuntioConnect.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.NuntioConnect.ConnectAdminResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.NuntioConnect.ConnectAdminResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.NuntioConnect.AdminServiceClient.prototype.updateAppOAuth =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NuntioConnect.AdminService/UpdateAppOAuth',
      request,
      metadata || {},
      methodDescriptor_AdminService_UpdateAppOAuth,
      callback);
};


/**
 * @param {!proto.NuntioConnect.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.NuntioConnect.ConnectAdminResponse>}
 *     Promise that resolves to the response
 */
proto.NuntioConnect.AdminServicePromiseClient.prototype.updateAppOAuth =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NuntioConnect.AdminService/UpdateAppOAuth',
      request,
      metadata || {},
      methodDescriptor_AdminService_UpdateAppOAuth);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.NuntioConnect.ConnectAdminRequest,
 *   !proto.NuntioConnect.ConnectAdminResponse>}
 */
const methodDescriptor_AdminService_UpdateAppSecurity = new grpc.web.MethodDescriptor(
  '/NuntioConnect.AdminService/UpdateAppSecurity',
  grpc.web.MethodType.UNARY,
  proto.NuntioConnect.ConnectAdminRequest,
  proto.NuntioConnect.ConnectAdminResponse,
  /**
   * @param {!proto.NuntioConnect.ConnectAdminRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.NuntioConnect.ConnectAdminResponse.deserializeBinary
);


/**
 * @param {!proto.NuntioConnect.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.NuntioConnect.ConnectAdminResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.NuntioConnect.ConnectAdminResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.NuntioConnect.AdminServiceClient.prototype.updateAppSecurity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NuntioConnect.AdminService/UpdateAppSecurity',
      request,
      metadata || {},
      methodDescriptor_AdminService_UpdateAppSecurity,
      callback);
};


/**
 * @param {!proto.NuntioConnect.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.NuntioConnect.ConnectAdminResponse>}
 *     Promise that resolves to the response
 */
proto.NuntioConnect.AdminServicePromiseClient.prototype.updateAppSecurity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NuntioConnect.AdminService/UpdateAppSecurity',
      request,
      metadata || {},
      methodDescriptor_AdminService_UpdateAppSecurity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.NuntioConnect.ConnectAdminRequest,
 *   !proto.NuntioConnect.ConnectAdminResponse>}
 */
const methodDescriptor_AdminService_GetAppMetrics = new grpc.web.MethodDescriptor(
  '/NuntioConnect.AdminService/GetAppMetrics',
  grpc.web.MethodType.UNARY,
  proto.NuntioConnect.ConnectAdminRequest,
  proto.NuntioConnect.ConnectAdminResponse,
  /**
   * @param {!proto.NuntioConnect.ConnectAdminRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.NuntioConnect.ConnectAdminResponse.deserializeBinary
);


/**
 * @param {!proto.NuntioConnect.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.NuntioConnect.ConnectAdminResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.NuntioConnect.ConnectAdminResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.NuntioConnect.AdminServiceClient.prototype.getAppMetrics =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NuntioConnect.AdminService/GetAppMetrics',
      request,
      metadata || {},
      methodDescriptor_AdminService_GetAppMetrics,
      callback);
};


/**
 * @param {!proto.NuntioConnect.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.NuntioConnect.ConnectAdminResponse>}
 *     Promise that resolves to the response
 */
proto.NuntioConnect.AdminServicePromiseClient.prototype.getAppMetrics =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NuntioConnect.AdminService/GetAppMetrics',
      request,
      metadata || {},
      methodDescriptor_AdminService_GetAppMetrics);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.NuntioConnect.ConnectAdminRequest,
 *   !proto.NuntioConnect.ConnectAdminResponse>}
 */
const methodDescriptor_AdminService_DeleteApp = new grpc.web.MethodDescriptor(
  '/NuntioConnect.AdminService/DeleteApp',
  grpc.web.MethodType.UNARY,
  proto.NuntioConnect.ConnectAdminRequest,
  proto.NuntioConnect.ConnectAdminResponse,
  /**
   * @param {!proto.NuntioConnect.ConnectAdminRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.NuntioConnect.ConnectAdminResponse.deserializeBinary
);


/**
 * @param {!proto.NuntioConnect.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.NuntioConnect.ConnectAdminResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.NuntioConnect.ConnectAdminResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.NuntioConnect.AdminServiceClient.prototype.deleteApp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NuntioConnect.AdminService/DeleteApp',
      request,
      metadata || {},
      methodDescriptor_AdminService_DeleteApp,
      callback);
};


/**
 * @param {!proto.NuntioConnect.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.NuntioConnect.ConnectAdminResponse>}
 *     Promise that resolves to the response
 */
proto.NuntioConnect.AdminServicePromiseClient.prototype.deleteApp =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NuntioConnect.AdminService/DeleteApp',
      request,
      metadata || {},
      methodDescriptor_AdminService_DeleteApp);
};


module.exports = proto.NuntioConnect;

