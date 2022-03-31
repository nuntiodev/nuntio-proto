/**
 * @fileoverview gRPC-Web generated client stub for SocialConnect
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var social_pb = require('./social_pb.js')
const proto = {};
proto.SocialConnect = require('./social_connect_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.SocialConnect.PublicConnectServiceClient =
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
proto.SocialConnect.PublicConnectServicePromiseClient =
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
 *   !proto.SocialConnect.ConnectPublicRequest,
 *   !proto.SocialConnect.ConnectPublicResponse>}
 */
const methodDescriptor_PublicConnectService_Heartbeat = new grpc.web.MethodDescriptor(
  '/SocialConnect.PublicConnectService/Heartbeat',
  grpc.web.MethodType.UNARY,
  proto.SocialConnect.ConnectPublicRequest,
  proto.SocialConnect.ConnectPublicResponse,
  /**
   * @param {!proto.SocialConnect.ConnectPublicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SocialConnect.ConnectPublicResponse.deserializeBinary
);


/**
 * @param {!proto.SocialConnect.ConnectPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SocialConnect.ConnectPublicResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SocialConnect.ConnectPublicResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SocialConnect.PublicConnectServiceClient.prototype.heartbeat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SocialConnect.PublicConnectService/Heartbeat',
      request,
      metadata || {},
      methodDescriptor_PublicConnectService_Heartbeat,
      callback);
};


/**
 * @param {!proto.SocialConnect.ConnectPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SocialConnect.ConnectPublicResponse>}
 *     Promise that resolves to the response
 */
proto.SocialConnect.PublicConnectServicePromiseClient.prototype.heartbeat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SocialConnect.PublicConnectService/Heartbeat',
      request,
      metadata || {},
      methodDescriptor_PublicConnectService_Heartbeat);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SocialConnect.ConnectPublicRequest,
 *   !proto.SocialConnect.ConnectPublicResponse>}
 */
const methodDescriptor_PublicConnectService_ValidateLoginChallenge = new grpc.web.MethodDescriptor(
  '/SocialConnect.PublicConnectService/ValidateLoginChallenge',
  grpc.web.MethodType.UNARY,
  proto.SocialConnect.ConnectPublicRequest,
  proto.SocialConnect.ConnectPublicResponse,
  /**
   * @param {!proto.SocialConnect.ConnectPublicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SocialConnect.ConnectPublicResponse.deserializeBinary
);


/**
 * @param {!proto.SocialConnect.ConnectPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SocialConnect.ConnectPublicResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SocialConnect.ConnectPublicResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SocialConnect.PublicConnectServiceClient.prototype.validateLoginChallenge =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SocialConnect.PublicConnectService/ValidateLoginChallenge',
      request,
      metadata || {},
      methodDescriptor_PublicConnectService_ValidateLoginChallenge,
      callback);
};


/**
 * @param {!proto.SocialConnect.ConnectPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SocialConnect.ConnectPublicResponse>}
 *     Promise that resolves to the response
 */
proto.SocialConnect.PublicConnectServicePromiseClient.prototype.validateLoginChallenge =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SocialConnect.PublicConnectService/ValidateLoginChallenge',
      request,
      metadata || {},
      methodDescriptor_PublicConnectService_ValidateLoginChallenge);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SocialConnect.ConnectPublicRequest,
 *   !proto.SocialConnect.ConnectPublicResponse>}
 */
const methodDescriptor_PublicConnectService_Login = new grpc.web.MethodDescriptor(
  '/SocialConnect.PublicConnectService/Login',
  grpc.web.MethodType.UNARY,
  proto.SocialConnect.ConnectPublicRequest,
  proto.SocialConnect.ConnectPublicResponse,
  /**
   * @param {!proto.SocialConnect.ConnectPublicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SocialConnect.ConnectPublicResponse.deserializeBinary
);


/**
 * @param {!proto.SocialConnect.ConnectPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SocialConnect.ConnectPublicResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SocialConnect.ConnectPublicResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SocialConnect.PublicConnectServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SocialConnect.PublicConnectService/Login',
      request,
      metadata || {},
      methodDescriptor_PublicConnectService_Login,
      callback);
};


/**
 * @param {!proto.SocialConnect.ConnectPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SocialConnect.ConnectPublicResponse>}
 *     Promise that resolves to the response
 */
proto.SocialConnect.PublicConnectServicePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SocialConnect.PublicConnectService/Login',
      request,
      metadata || {},
      methodDescriptor_PublicConnectService_Login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SocialConnect.ConnectPublicRequest,
 *   !proto.SocialConnect.ConnectPublicResponse>}
 */
const methodDescriptor_PublicConnectService_ValidateConsentChallenge = new grpc.web.MethodDescriptor(
  '/SocialConnect.PublicConnectService/ValidateConsentChallenge',
  grpc.web.MethodType.UNARY,
  proto.SocialConnect.ConnectPublicRequest,
  proto.SocialConnect.ConnectPublicResponse,
  /**
   * @param {!proto.SocialConnect.ConnectPublicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SocialConnect.ConnectPublicResponse.deserializeBinary
);


/**
 * @param {!proto.SocialConnect.ConnectPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SocialConnect.ConnectPublicResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SocialConnect.ConnectPublicResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SocialConnect.PublicConnectServiceClient.prototype.validateConsentChallenge =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SocialConnect.PublicConnectService/ValidateConsentChallenge',
      request,
      metadata || {},
      methodDescriptor_PublicConnectService_ValidateConsentChallenge,
      callback);
};


/**
 * @param {!proto.SocialConnect.ConnectPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SocialConnect.ConnectPublicResponse>}
 *     Promise that resolves to the response
 */
proto.SocialConnect.PublicConnectServicePromiseClient.prototype.validateConsentChallenge =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SocialConnect.PublicConnectService/ValidateConsentChallenge',
      request,
      metadata || {},
      methodDescriptor_PublicConnectService_ValidateConsentChallenge);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SocialConnect.ConnectPublicRequest,
 *   !proto.SocialConnect.ConnectPublicResponse>}
 */
const methodDescriptor_PublicConnectService_GiveConsent = new grpc.web.MethodDescriptor(
  '/SocialConnect.PublicConnectService/GiveConsent',
  grpc.web.MethodType.UNARY,
  proto.SocialConnect.ConnectPublicRequest,
  proto.SocialConnect.ConnectPublicResponse,
  /**
   * @param {!proto.SocialConnect.ConnectPublicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SocialConnect.ConnectPublicResponse.deserializeBinary
);


/**
 * @param {!proto.SocialConnect.ConnectPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SocialConnect.ConnectPublicResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SocialConnect.ConnectPublicResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SocialConnect.PublicConnectServiceClient.prototype.giveConsent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SocialConnect.PublicConnectService/GiveConsent',
      request,
      metadata || {},
      methodDescriptor_PublicConnectService_GiveConsent,
      callback);
};


/**
 * @param {!proto.SocialConnect.ConnectPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SocialConnect.ConnectPublicResponse>}
 *     Promise that resolves to the response
 */
proto.SocialConnect.PublicConnectServicePromiseClient.prototype.giveConsent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SocialConnect.PublicConnectService/GiveConsent',
      request,
      metadata || {},
      methodDescriptor_PublicConnectService_GiveConsent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SocialConnect.ConnectPublicRequest,
 *   !proto.SocialConnect.ConnectPublicResponse>}
 */
const methodDescriptor_PublicConnectService_Logout = new grpc.web.MethodDescriptor(
  '/SocialConnect.PublicConnectService/Logout',
  grpc.web.MethodType.UNARY,
  proto.SocialConnect.ConnectPublicRequest,
  proto.SocialConnect.ConnectPublicResponse,
  /**
   * @param {!proto.SocialConnect.ConnectPublicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SocialConnect.ConnectPublicResponse.deserializeBinary
);


/**
 * @param {!proto.SocialConnect.ConnectPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SocialConnect.ConnectPublicResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SocialConnect.ConnectPublicResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SocialConnect.PublicConnectServiceClient.prototype.logout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SocialConnect.PublicConnectService/Logout',
      request,
      metadata || {},
      methodDescriptor_PublicConnectService_Logout,
      callback);
};


/**
 * @param {!proto.SocialConnect.ConnectPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SocialConnect.ConnectPublicResponse>}
 *     Promise that resolves to the response
 */
proto.SocialConnect.PublicConnectServicePromiseClient.prototype.logout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SocialConnect.PublicConnectService/Logout',
      request,
      metadata || {},
      methodDescriptor_PublicConnectService_Logout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SocialConnect.ConnectPublicRequest,
 *   !proto.SocialConnect.ConnectPublicResponse>}
 */
const methodDescriptor_PublicConnectService_CreateUser = new grpc.web.MethodDescriptor(
  '/SocialConnect.PublicConnectService/CreateUser',
  grpc.web.MethodType.UNARY,
  proto.SocialConnect.ConnectPublicRequest,
  proto.SocialConnect.ConnectPublicResponse,
  /**
   * @param {!proto.SocialConnect.ConnectPublicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SocialConnect.ConnectPublicResponse.deserializeBinary
);


/**
 * @param {!proto.SocialConnect.ConnectPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SocialConnect.ConnectPublicResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SocialConnect.ConnectPublicResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SocialConnect.PublicConnectServiceClient.prototype.createUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SocialConnect.PublicConnectService/CreateUser',
      request,
      metadata || {},
      methodDescriptor_PublicConnectService_CreateUser,
      callback);
};


/**
 * @param {!proto.SocialConnect.ConnectPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SocialConnect.ConnectPublicResponse>}
 *     Promise that resolves to the response
 */
proto.SocialConnect.PublicConnectServicePromiseClient.prototype.createUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SocialConnect.PublicConnectService/CreateUser',
      request,
      metadata || {},
      methodDescriptor_PublicConnectService_CreateUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SocialConnect.ConnectPublicRequest,
 *   !proto.SocialConnect.ConnectPublicResponse>}
 */
const methodDescriptor_PublicConnectService_SendResetEmail = new grpc.web.MethodDescriptor(
  '/SocialConnect.PublicConnectService/SendResetEmail',
  grpc.web.MethodType.UNARY,
  proto.SocialConnect.ConnectPublicRequest,
  proto.SocialConnect.ConnectPublicResponse,
  /**
   * @param {!proto.SocialConnect.ConnectPublicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SocialConnect.ConnectPublicResponse.deserializeBinary
);


/**
 * @param {!proto.SocialConnect.ConnectPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SocialConnect.ConnectPublicResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SocialConnect.ConnectPublicResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SocialConnect.PublicConnectServiceClient.prototype.sendResetEmail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SocialConnect.PublicConnectService/SendResetEmail',
      request,
      metadata || {},
      methodDescriptor_PublicConnectService_SendResetEmail,
      callback);
};


/**
 * @param {!proto.SocialConnect.ConnectPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SocialConnect.ConnectPublicResponse>}
 *     Promise that resolves to the response
 */
proto.SocialConnect.PublicConnectServicePromiseClient.prototype.sendResetEmail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SocialConnect.PublicConnectService/SendResetEmail',
      request,
      metadata || {},
      methodDescriptor_PublicConnectService_SendResetEmail);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SocialConnect.ConnectPublicRequest,
 *   !proto.SocialConnect.ConnectPublicResponse>}
 */
const methodDescriptor_PublicConnectService_ResetPassword = new grpc.web.MethodDescriptor(
  '/SocialConnect.PublicConnectService/ResetPassword',
  grpc.web.MethodType.UNARY,
  proto.SocialConnect.ConnectPublicRequest,
  proto.SocialConnect.ConnectPublicResponse,
  /**
   * @param {!proto.SocialConnect.ConnectPublicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SocialConnect.ConnectPublicResponse.deserializeBinary
);


/**
 * @param {!proto.SocialConnect.ConnectPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SocialConnect.ConnectPublicResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SocialConnect.ConnectPublicResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SocialConnect.PublicConnectServiceClient.prototype.resetPassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SocialConnect.PublicConnectService/ResetPassword',
      request,
      metadata || {},
      methodDescriptor_PublicConnectService_ResetPassword,
      callback);
};


/**
 * @param {!proto.SocialConnect.ConnectPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SocialConnect.ConnectPublicResponse>}
 *     Promise that resolves to the response
 */
proto.SocialConnect.PublicConnectServicePromiseClient.prototype.resetPassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SocialConnect.PublicConnectService/ResetPassword',
      request,
      metadata || {},
      methodDescriptor_PublicConnectService_ResetPassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SocialConnect.ConnectPublicRequest,
 *   !proto.SocialConnect.ConnectPublicResponse>}
 */
const methodDescriptor_PublicConnectService_Verify = new grpc.web.MethodDescriptor(
  '/SocialConnect.PublicConnectService/Verify',
  grpc.web.MethodType.UNARY,
  proto.SocialConnect.ConnectPublicRequest,
  proto.SocialConnect.ConnectPublicResponse,
  /**
   * @param {!proto.SocialConnect.ConnectPublicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SocialConnect.ConnectPublicResponse.deserializeBinary
);


/**
 * @param {!proto.SocialConnect.ConnectPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SocialConnect.ConnectPublicResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SocialConnect.ConnectPublicResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SocialConnect.PublicConnectServiceClient.prototype.verify =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SocialConnect.PublicConnectService/Verify',
      request,
      metadata || {},
      methodDescriptor_PublicConnectService_Verify,
      callback);
};


/**
 * @param {!proto.SocialConnect.ConnectPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SocialConnect.ConnectPublicResponse>}
 *     Promise that resolves to the response
 */
proto.SocialConnect.PublicConnectServicePromiseClient.prototype.verify =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SocialConnect.PublicConnectService/Verify',
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
proto.SocialConnect.AdminConnectServiceClient =
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
proto.SocialConnect.AdminConnectServicePromiseClient =
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
 *   !proto.SocialConnect.ConnectAdminRequest,
 *   !proto.SocialConnect.ConnectAdminResponse>}
 */
const methodDescriptor_AdminConnectService_Heartbeat = new grpc.web.MethodDescriptor(
  '/SocialConnect.AdminConnectService/Heartbeat',
  grpc.web.MethodType.UNARY,
  proto.SocialConnect.ConnectAdminRequest,
  proto.SocialConnect.ConnectAdminResponse,
  /**
   * @param {!proto.SocialConnect.ConnectAdminRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SocialConnect.ConnectAdminResponse.deserializeBinary
);


/**
 * @param {!proto.SocialConnect.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SocialConnect.ConnectAdminResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SocialConnect.ConnectAdminResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SocialConnect.AdminConnectServiceClient.prototype.heartbeat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SocialConnect.AdminConnectService/Heartbeat',
      request,
      metadata || {},
      methodDescriptor_AdminConnectService_Heartbeat,
      callback);
};


/**
 * @param {!proto.SocialConnect.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SocialConnect.ConnectAdminResponse>}
 *     Promise that resolves to the response
 */
proto.SocialConnect.AdminConnectServicePromiseClient.prototype.heartbeat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SocialConnect.AdminConnectService/Heartbeat',
      request,
      metadata || {},
      methodDescriptor_AdminConnectService_Heartbeat);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SocialConnect.ConnectAdminRequest,
 *   !proto.SocialConnect.ConnectAdminResponse>}
 */
const methodDescriptor_AdminConnectService_Create = new grpc.web.MethodDescriptor(
  '/SocialConnect.AdminConnectService/Create',
  grpc.web.MethodType.UNARY,
  proto.SocialConnect.ConnectAdminRequest,
  proto.SocialConnect.ConnectAdminResponse,
  /**
   * @param {!proto.SocialConnect.ConnectAdminRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SocialConnect.ConnectAdminResponse.deserializeBinary
);


/**
 * @param {!proto.SocialConnect.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SocialConnect.ConnectAdminResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SocialConnect.ConnectAdminResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SocialConnect.AdminConnectServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SocialConnect.AdminConnectService/Create',
      request,
      metadata || {},
      methodDescriptor_AdminConnectService_Create,
      callback);
};


/**
 * @param {!proto.SocialConnect.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SocialConnect.ConnectAdminResponse>}
 *     Promise that resolves to the response
 */
proto.SocialConnect.AdminConnectServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SocialConnect.AdminConnectService/Create',
      request,
      metadata || {},
      methodDescriptor_AdminConnectService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SocialConnect.ConnectAdminRequest,
 *   !proto.SocialConnect.ConnectAdminResponse>}
 */
const methodDescriptor_AdminConnectService_GetById = new grpc.web.MethodDescriptor(
  '/SocialConnect.AdminConnectService/GetById',
  grpc.web.MethodType.UNARY,
  proto.SocialConnect.ConnectAdminRequest,
  proto.SocialConnect.ConnectAdminResponse,
  /**
   * @param {!proto.SocialConnect.ConnectAdminRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SocialConnect.ConnectAdminResponse.deserializeBinary
);


/**
 * @param {!proto.SocialConnect.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SocialConnect.ConnectAdminResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SocialConnect.ConnectAdminResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SocialConnect.AdminConnectServiceClient.prototype.getById =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SocialConnect.AdminConnectService/GetById',
      request,
      metadata || {},
      methodDescriptor_AdminConnectService_GetById,
      callback);
};


/**
 * @param {!proto.SocialConnect.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SocialConnect.ConnectAdminResponse>}
 *     Promise that resolves to the response
 */
proto.SocialConnect.AdminConnectServicePromiseClient.prototype.getById =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SocialConnect.AdminConnectService/GetById',
      request,
      metadata || {},
      methodDescriptor_AdminConnectService_GetById);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SocialConnect.ConnectAdminRequest,
 *   !proto.SocialConnect.ConnectAdminResponse>}
 */
const methodDescriptor_AdminConnectService_UpdateDetails = new grpc.web.MethodDescriptor(
  '/SocialConnect.AdminConnectService/UpdateDetails',
  grpc.web.MethodType.UNARY,
  proto.SocialConnect.ConnectAdminRequest,
  proto.SocialConnect.ConnectAdminResponse,
  /**
   * @param {!proto.SocialConnect.ConnectAdminRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SocialConnect.ConnectAdminResponse.deserializeBinary
);


/**
 * @param {!proto.SocialConnect.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SocialConnect.ConnectAdminResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SocialConnect.ConnectAdminResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SocialConnect.AdminConnectServiceClient.prototype.updateDetails =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SocialConnect.AdminConnectService/UpdateDetails',
      request,
      metadata || {},
      methodDescriptor_AdminConnectService_UpdateDetails,
      callback);
};


/**
 * @param {!proto.SocialConnect.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SocialConnect.ConnectAdminResponse>}
 *     Promise that resolves to the response
 */
proto.SocialConnect.AdminConnectServicePromiseClient.prototype.updateDetails =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SocialConnect.AdminConnectService/UpdateDetails',
      request,
      metadata || {},
      methodDescriptor_AdminConnectService_UpdateDetails);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SocialConnect.ConnectAdminRequest,
 *   !proto.SocialConnect.ConnectAdminResponse>}
 */
const methodDescriptor_AdminConnectService_UpdateOauth = new grpc.web.MethodDescriptor(
  '/SocialConnect.AdminConnectService/UpdateOauth',
  grpc.web.MethodType.UNARY,
  proto.SocialConnect.ConnectAdminRequest,
  proto.SocialConnect.ConnectAdminResponse,
  /**
   * @param {!proto.SocialConnect.ConnectAdminRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SocialConnect.ConnectAdminResponse.deserializeBinary
);


/**
 * @param {!proto.SocialConnect.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SocialConnect.ConnectAdminResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SocialConnect.ConnectAdminResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SocialConnect.AdminConnectServiceClient.prototype.updateOauth =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SocialConnect.AdminConnectService/UpdateOauth',
      request,
      metadata || {},
      methodDescriptor_AdminConnectService_UpdateOauth,
      callback);
};


/**
 * @param {!proto.SocialConnect.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SocialConnect.ConnectAdminResponse>}
 *     Promise that resolves to the response
 */
proto.SocialConnect.AdminConnectServicePromiseClient.prototype.updateOauth =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SocialConnect.AdminConnectService/UpdateOauth',
      request,
      metadata || {},
      methodDescriptor_AdminConnectService_UpdateOauth);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SocialConnect.ConnectAdminRequest,
 *   !proto.SocialConnect.ConnectAdminResponse>}
 */
const methodDescriptor_AdminConnectService_Delete = new grpc.web.MethodDescriptor(
  '/SocialConnect.AdminConnectService/Delete',
  grpc.web.MethodType.UNARY,
  proto.SocialConnect.ConnectAdminRequest,
  proto.SocialConnect.ConnectAdminResponse,
  /**
   * @param {!proto.SocialConnect.ConnectAdminRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SocialConnect.ConnectAdminResponse.deserializeBinary
);


/**
 * @param {!proto.SocialConnect.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SocialConnect.ConnectAdminResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SocialConnect.ConnectAdminResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SocialConnect.AdminConnectServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SocialConnect.AdminConnectService/Delete',
      request,
      metadata || {},
      methodDescriptor_AdminConnectService_Delete,
      callback);
};


/**
 * @param {!proto.SocialConnect.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SocialConnect.ConnectAdminResponse>}
 *     Promise that resolves to the response
 */
proto.SocialConnect.AdminConnectServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SocialConnect.AdminConnectService/Delete',
      request,
      metadata || {},
      methodDescriptor_AdminConnectService_Delete);
};


module.exports = proto.SocialConnect;

