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
proto.NuntioConnect.PublicConnectServiceClient =
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
proto.NuntioConnect.PublicConnectServicePromiseClient =
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
const methodDescriptor_PublicConnectService_Heartbeat = new grpc.web.MethodDescriptor(
  '/NuntioConnect.PublicConnectService/Heartbeat',
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
proto.NuntioConnect.PublicConnectServiceClient.prototype.heartbeat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NuntioConnect.PublicConnectService/Heartbeat',
      request,
      metadata || {},
      methodDescriptor_PublicConnectService_Heartbeat,
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
proto.NuntioConnect.PublicConnectServicePromiseClient.prototype.heartbeat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NuntioConnect.PublicConnectService/Heartbeat',
      request,
      metadata || {},
      methodDescriptor_PublicConnectService_Heartbeat);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.NuntioConnect.ConnectPublicRequest,
 *   !proto.NuntioConnect.ConnectPublicResponse>}
 */
const methodDescriptor_PublicConnectService_ValidateLoginChallenge = new grpc.web.MethodDescriptor(
  '/NuntioConnect.PublicConnectService/ValidateLoginChallenge',
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
proto.NuntioConnect.PublicConnectServiceClient.prototype.validateLoginChallenge =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NuntioConnect.PublicConnectService/ValidateLoginChallenge',
      request,
      metadata || {},
      methodDescriptor_PublicConnectService_ValidateLoginChallenge,
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
proto.NuntioConnect.PublicConnectServicePromiseClient.prototype.validateLoginChallenge =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NuntioConnect.PublicConnectService/ValidateLoginChallenge',
      request,
      metadata || {},
      methodDescriptor_PublicConnectService_ValidateLoginChallenge);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.NuntioConnect.ConnectPublicRequest,
 *   !proto.NuntioConnect.ConnectPublicResponse>}
 */
const methodDescriptor_PublicConnectService_Login = new grpc.web.MethodDescriptor(
  '/NuntioConnect.PublicConnectService/Login',
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
proto.NuntioConnect.PublicConnectServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NuntioConnect.PublicConnectService/Login',
      request,
      metadata || {},
      methodDescriptor_PublicConnectService_Login,
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
proto.NuntioConnect.PublicConnectServicePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NuntioConnect.PublicConnectService/Login',
      request,
      metadata || {},
      methodDescriptor_PublicConnectService_Login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.NuntioConnect.ConnectPublicRequest,
 *   !proto.NuntioConnect.ConnectPublicResponse>}
 */
const methodDescriptor_PublicConnectService_ValidateConsentChallenge = new grpc.web.MethodDescriptor(
  '/NuntioConnect.PublicConnectService/ValidateConsentChallenge',
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
proto.NuntioConnect.PublicConnectServiceClient.prototype.validateConsentChallenge =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NuntioConnect.PublicConnectService/ValidateConsentChallenge',
      request,
      metadata || {},
      methodDescriptor_PublicConnectService_ValidateConsentChallenge,
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
proto.NuntioConnect.PublicConnectServicePromiseClient.prototype.validateConsentChallenge =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NuntioConnect.PublicConnectService/ValidateConsentChallenge',
      request,
      metadata || {},
      methodDescriptor_PublicConnectService_ValidateConsentChallenge);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.NuntioConnect.ConnectPublicRequest,
 *   !proto.NuntioConnect.ConnectPublicResponse>}
 */
const methodDescriptor_PublicConnectService_GiveConsent = new grpc.web.MethodDescriptor(
  '/NuntioConnect.PublicConnectService/GiveConsent',
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
proto.NuntioConnect.PublicConnectServiceClient.prototype.giveConsent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NuntioConnect.PublicConnectService/GiveConsent',
      request,
      metadata || {},
      methodDescriptor_PublicConnectService_GiveConsent,
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
proto.NuntioConnect.PublicConnectServicePromiseClient.prototype.giveConsent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NuntioConnect.PublicConnectService/GiveConsent',
      request,
      metadata || {},
      methodDescriptor_PublicConnectService_GiveConsent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.NuntioConnect.ConnectPublicRequest,
 *   !proto.NuntioConnect.ConnectPublicResponse>}
 */
const methodDescriptor_PublicConnectService_Logout = new grpc.web.MethodDescriptor(
  '/NuntioConnect.PublicConnectService/Logout',
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
proto.NuntioConnect.PublicConnectServiceClient.prototype.logout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NuntioConnect.PublicConnectService/Logout',
      request,
      metadata || {},
      methodDescriptor_PublicConnectService_Logout,
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
proto.NuntioConnect.PublicConnectServicePromiseClient.prototype.logout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NuntioConnect.PublicConnectService/Logout',
      request,
      metadata || {},
      methodDescriptor_PublicConnectService_Logout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.NuntioConnect.ConnectPublicRequest,
 *   !proto.NuntioConnect.ConnectPublicResponse>}
 */
const methodDescriptor_PublicConnectService_CreateUser = new grpc.web.MethodDescriptor(
  '/NuntioConnect.PublicConnectService/CreateUser',
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
proto.NuntioConnect.PublicConnectServiceClient.prototype.createUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NuntioConnect.PublicConnectService/CreateUser',
      request,
      metadata || {},
      methodDescriptor_PublicConnectService_CreateUser,
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
proto.NuntioConnect.PublicConnectServicePromiseClient.prototype.createUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NuntioConnect.PublicConnectService/CreateUser',
      request,
      metadata || {},
      methodDescriptor_PublicConnectService_CreateUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.NuntioConnect.ConnectPublicRequest,
 *   !proto.NuntioConnect.ConnectPublicResponse>}
 */
const methodDescriptor_PublicConnectService_SendResetEmail = new grpc.web.MethodDescriptor(
  '/NuntioConnect.PublicConnectService/SendResetEmail',
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
proto.NuntioConnect.PublicConnectServiceClient.prototype.sendResetEmail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NuntioConnect.PublicConnectService/SendResetEmail',
      request,
      metadata || {},
      methodDescriptor_PublicConnectService_SendResetEmail,
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
proto.NuntioConnect.PublicConnectServicePromiseClient.prototype.sendResetEmail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NuntioConnect.PublicConnectService/SendResetEmail',
      request,
      metadata || {},
      methodDescriptor_PublicConnectService_SendResetEmail);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.NuntioConnect.ConnectPublicRequest,
 *   !proto.NuntioConnect.ConnectPublicResponse>}
 */
const methodDescriptor_PublicConnectService_ResetPassword = new grpc.web.MethodDescriptor(
  '/NuntioConnect.PublicConnectService/ResetPassword',
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
proto.NuntioConnect.PublicConnectServiceClient.prototype.resetPassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NuntioConnect.PublicConnectService/ResetPassword',
      request,
      metadata || {},
      methodDescriptor_PublicConnectService_ResetPassword,
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
proto.NuntioConnect.PublicConnectServicePromiseClient.prototype.resetPassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NuntioConnect.PublicConnectService/ResetPassword',
      request,
      metadata || {},
      methodDescriptor_PublicConnectService_ResetPassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.NuntioConnect.ConnectPublicRequest,
 *   !proto.NuntioConnect.ConnectPublicResponse>}
 */
const methodDescriptor_PublicConnectService_Verify = new grpc.web.MethodDescriptor(
  '/NuntioConnect.PublicConnectService/Verify',
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
proto.NuntioConnect.PublicConnectServiceClient.prototype.verify =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NuntioConnect.PublicConnectService/Verify',
      request,
      metadata || {},
      methodDescriptor_PublicConnectService_Verify,
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
proto.NuntioConnect.PublicConnectServicePromiseClient.prototype.verify =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NuntioConnect.PublicConnectService/Verify',
      request,
      metadata || {},
      methodDescriptor_PublicConnectService_Verify);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.NuntioConnect.AdminConnectServiceClient =
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
proto.NuntioConnect.AdminConnectServicePromiseClient =
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
 *   !proto.NuntioConnect.ConnectAdminResponse>}
 */
const methodDescriptor_AdminConnectService_Heartbeat = new grpc.web.MethodDescriptor(
  '/NuntioConnect.AdminConnectService/Heartbeat',
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
proto.NuntioConnect.AdminConnectServiceClient.prototype.heartbeat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NuntioConnect.AdminConnectService/Heartbeat',
      request,
      metadata || {},
      methodDescriptor_AdminConnectService_Heartbeat,
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
proto.NuntioConnect.AdminConnectServicePromiseClient.prototype.heartbeat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NuntioConnect.AdminConnectService/Heartbeat',
      request,
      metadata || {},
      methodDescriptor_AdminConnectService_Heartbeat);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.NuntioConnect.ConnectAdminRequest,
 *   !proto.NuntioConnect.ConnectAdminResponse>}
 */
const methodDescriptor_AdminConnectService_CreateApp = new grpc.web.MethodDescriptor(
  '/NuntioConnect.AdminConnectService/CreateApp',
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
proto.NuntioConnect.AdminConnectServiceClient.prototype.createApp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NuntioConnect.AdminConnectService/CreateApp',
      request,
      metadata || {},
      methodDescriptor_AdminConnectService_CreateApp,
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
proto.NuntioConnect.AdminConnectServicePromiseClient.prototype.createApp =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NuntioConnect.AdminConnectService/CreateApp',
      request,
      metadata || {},
      methodDescriptor_AdminConnectService_CreateApp);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.NuntioConnect.ConnectAdminRequest,
 *   !proto.NuntioConnect.ConnectAdminResponse>}
 */
const methodDescriptor_AdminConnectService_GetAppById = new grpc.web.MethodDescriptor(
  '/NuntioConnect.AdminConnectService/GetAppById',
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
proto.NuntioConnect.AdminConnectServiceClient.prototype.getAppById =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NuntioConnect.AdminConnectService/GetAppById',
      request,
      metadata || {},
      methodDescriptor_AdminConnectService_GetAppById,
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
proto.NuntioConnect.AdminConnectServicePromiseClient.prototype.getAppById =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NuntioConnect.AdminConnectService/GetAppById',
      request,
      metadata || {},
      methodDescriptor_AdminConnectService_GetAppById);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.NuntioConnect.ConnectAdminRequest,
 *   !proto.NuntioConnect.ConnectAdminResponse>}
 */
const methodDescriptor_AdminConnectService_UpdateAppDetails = new grpc.web.MethodDescriptor(
  '/NuntioConnect.AdminConnectService/UpdateAppDetails',
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
proto.NuntioConnect.AdminConnectServiceClient.prototype.updateAppDetails =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NuntioConnect.AdminConnectService/UpdateAppDetails',
      request,
      metadata || {},
      methodDescriptor_AdminConnectService_UpdateAppDetails,
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
proto.NuntioConnect.AdminConnectServicePromiseClient.prototype.updateAppDetails =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NuntioConnect.AdminConnectService/UpdateAppDetails',
      request,
      metadata || {},
      methodDescriptor_AdminConnectService_UpdateAppDetails);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.NuntioConnect.ConnectAdminRequest,
 *   !proto.NuntioConnect.ConnectAdminResponse>}
 */
const methodDescriptor_AdminConnectService_UpdateAppOAuth = new grpc.web.MethodDescriptor(
  '/NuntioConnect.AdminConnectService/UpdateAppOAuth',
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
proto.NuntioConnect.AdminConnectServiceClient.prototype.updateAppOAuth =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NuntioConnect.AdminConnectService/UpdateAppOAuth',
      request,
      metadata || {},
      methodDescriptor_AdminConnectService_UpdateAppOAuth,
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
proto.NuntioConnect.AdminConnectServicePromiseClient.prototype.updateAppOAuth =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NuntioConnect.AdminConnectService/UpdateAppOAuth',
      request,
      metadata || {},
      methodDescriptor_AdminConnectService_UpdateAppOAuth);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.NuntioConnect.ConnectAdminRequest,
 *   !proto.NuntioConnect.ConnectAdminResponse>}
 */
const methodDescriptor_AdminConnectService_UpdateAppSecurity = new grpc.web.MethodDescriptor(
  '/NuntioConnect.AdminConnectService/UpdateAppSecurity',
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
proto.NuntioConnect.AdminConnectServiceClient.prototype.updateAppSecurity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NuntioConnect.AdminConnectService/UpdateAppSecurity',
      request,
      metadata || {},
      methodDescriptor_AdminConnectService_UpdateAppSecurity,
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
proto.NuntioConnect.AdminConnectServicePromiseClient.prototype.updateAppSecurity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NuntioConnect.AdminConnectService/UpdateAppSecurity',
      request,
      metadata || {},
      methodDescriptor_AdminConnectService_UpdateAppSecurity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.NuntioConnect.ConnectAdminRequest,
 *   !proto.NuntioConnect.ConnectAdminResponse>}
 */
const methodDescriptor_AdminConnectService_GetAppMetrics = new grpc.web.MethodDescriptor(
  '/NuntioConnect.AdminConnectService/GetAppMetrics',
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
proto.NuntioConnect.AdminConnectServiceClient.prototype.getAppMetrics =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NuntioConnect.AdminConnectService/GetAppMetrics',
      request,
      metadata || {},
      methodDescriptor_AdminConnectService_GetAppMetrics,
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
proto.NuntioConnect.AdminConnectServicePromiseClient.prototype.getAppMetrics =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NuntioConnect.AdminConnectService/GetAppMetrics',
      request,
      metadata || {},
      methodDescriptor_AdminConnectService_GetAppMetrics);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.NuntioConnect.ConnectAdminRequest,
 *   !proto.NuntioConnect.ConnectAdminResponse>}
 */
const methodDescriptor_AdminConnectService_DeleteApp = new grpc.web.MethodDescriptor(
  '/NuntioConnect.AdminConnectService/DeleteApp',
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
proto.NuntioConnect.AdminConnectServiceClient.prototype.deleteApp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NuntioConnect.AdminConnectService/DeleteApp',
      request,
      metadata || {},
      methodDescriptor_AdminConnectService_DeleteApp,
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
proto.NuntioConnect.AdminConnectServicePromiseClient.prototype.deleteApp =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NuntioConnect.AdminConnectService/DeleteApp',
      request,
      metadata || {},
      methodDescriptor_AdminConnectService_DeleteApp);
};


module.exports = proto.NuntioConnect;

