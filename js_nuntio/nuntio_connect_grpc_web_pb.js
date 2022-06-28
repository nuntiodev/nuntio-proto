/**
 * @fileoverview gRPC-Web generated client stub for Connect
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.Connect = require('./nuntio_connect_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.Connect.AuthenticateClient =
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
proto.Connect.AuthenticatePromiseClient =
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
 *   !proto.Connect.AuthenticateRequest,
 *   !proto.Connect.AuthenticateResponse>}
 */
const methodDescriptor_Authenticate_Heartbeat = new grpc.web.MethodDescriptor(
  '/Connect.Authenticate/Heartbeat',
  grpc.web.MethodType.UNARY,
  proto.Connect.AuthenticateRequest,
  proto.Connect.AuthenticateResponse,
  /**
   * @param {!proto.Connect.AuthenticateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Connect.AuthenticateResponse.deserializeBinary
);


/**
 * @param {!proto.Connect.AuthenticateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Connect.AuthenticateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Connect.AuthenticateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Connect.AuthenticateClient.prototype.heartbeat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Connect.Authenticate/Heartbeat',
      request,
      metadata || {},
      methodDescriptor_Authenticate_Heartbeat,
      callback);
};


/**
 * @param {!proto.Connect.AuthenticateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Connect.AuthenticateResponse>}
 *     Promise that resolves to the response
 */
proto.Connect.AuthenticatePromiseClient.prototype.heartbeat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Connect.Authenticate/Heartbeat',
      request,
      metadata || {},
      methodDescriptor_Authenticate_Heartbeat);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Connect.AuthenticateRequest,
 *   !proto.Connect.AuthenticateResponse>}
 */
const methodDescriptor_Authenticate_ValidateLoginChallenge = new grpc.web.MethodDescriptor(
  '/Connect.Authenticate/ValidateLoginChallenge',
  grpc.web.MethodType.UNARY,
  proto.Connect.AuthenticateRequest,
  proto.Connect.AuthenticateResponse,
  /**
   * @param {!proto.Connect.AuthenticateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Connect.AuthenticateResponse.deserializeBinary
);


/**
 * @param {!proto.Connect.AuthenticateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Connect.AuthenticateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Connect.AuthenticateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Connect.AuthenticateClient.prototype.validateLoginChallenge =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Connect.Authenticate/ValidateLoginChallenge',
      request,
      metadata || {},
      methodDescriptor_Authenticate_ValidateLoginChallenge,
      callback);
};


/**
 * @param {!proto.Connect.AuthenticateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Connect.AuthenticateResponse>}
 *     Promise that resolves to the response
 */
proto.Connect.AuthenticatePromiseClient.prototype.validateLoginChallenge =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Connect.Authenticate/ValidateLoginChallenge',
      request,
      metadata || {},
      methodDescriptor_Authenticate_ValidateLoginChallenge);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Connect.AuthenticateRequest,
 *   !proto.Connect.AuthenticateResponse>}
 */
const methodDescriptor_Authenticate_Login = new grpc.web.MethodDescriptor(
  '/Connect.Authenticate/Login',
  grpc.web.MethodType.UNARY,
  proto.Connect.AuthenticateRequest,
  proto.Connect.AuthenticateResponse,
  /**
   * @param {!proto.Connect.AuthenticateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Connect.AuthenticateResponse.deserializeBinary
);


/**
 * @param {!proto.Connect.AuthenticateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Connect.AuthenticateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Connect.AuthenticateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Connect.AuthenticateClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Connect.Authenticate/Login',
      request,
      metadata || {},
      methodDescriptor_Authenticate_Login,
      callback);
};


/**
 * @param {!proto.Connect.AuthenticateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Connect.AuthenticateResponse>}
 *     Promise that resolves to the response
 */
proto.Connect.AuthenticatePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Connect.Authenticate/Login',
      request,
      metadata || {},
      methodDescriptor_Authenticate_Login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Connect.AuthenticateRequest,
 *   !proto.Connect.AuthenticateResponse>}
 */
const methodDescriptor_Authenticate_ValidateConsentChallenge = new grpc.web.MethodDescriptor(
  '/Connect.Authenticate/ValidateConsentChallenge',
  grpc.web.MethodType.UNARY,
  proto.Connect.AuthenticateRequest,
  proto.Connect.AuthenticateResponse,
  /**
   * @param {!proto.Connect.AuthenticateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Connect.AuthenticateResponse.deserializeBinary
);


/**
 * @param {!proto.Connect.AuthenticateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Connect.AuthenticateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Connect.AuthenticateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Connect.AuthenticateClient.prototype.validateConsentChallenge =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Connect.Authenticate/ValidateConsentChallenge',
      request,
      metadata || {},
      methodDescriptor_Authenticate_ValidateConsentChallenge,
      callback);
};


/**
 * @param {!proto.Connect.AuthenticateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Connect.AuthenticateResponse>}
 *     Promise that resolves to the response
 */
proto.Connect.AuthenticatePromiseClient.prototype.validateConsentChallenge =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Connect.Authenticate/ValidateConsentChallenge',
      request,
      metadata || {},
      methodDescriptor_Authenticate_ValidateConsentChallenge);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Connect.AuthenticateRequest,
 *   !proto.Connect.AuthenticateResponse>}
 */
const methodDescriptor_Authenticate_GiveConsent = new grpc.web.MethodDescriptor(
  '/Connect.Authenticate/GiveConsent',
  grpc.web.MethodType.UNARY,
  proto.Connect.AuthenticateRequest,
  proto.Connect.AuthenticateResponse,
  /**
   * @param {!proto.Connect.AuthenticateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Connect.AuthenticateResponse.deserializeBinary
);


/**
 * @param {!proto.Connect.AuthenticateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Connect.AuthenticateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Connect.AuthenticateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Connect.AuthenticateClient.prototype.giveConsent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Connect.Authenticate/GiveConsent',
      request,
      metadata || {},
      methodDescriptor_Authenticate_GiveConsent,
      callback);
};


/**
 * @param {!proto.Connect.AuthenticateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Connect.AuthenticateResponse>}
 *     Promise that resolves to the response
 */
proto.Connect.AuthenticatePromiseClient.prototype.giveConsent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Connect.Authenticate/GiveConsent',
      request,
      metadata || {},
      methodDescriptor_Authenticate_GiveConsent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Connect.AuthenticateRequest,
 *   !proto.Connect.AuthenticateResponse>}
 */
const methodDescriptor_Authenticate_Logout = new grpc.web.MethodDescriptor(
  '/Connect.Authenticate/Logout',
  grpc.web.MethodType.UNARY,
  proto.Connect.AuthenticateRequest,
  proto.Connect.AuthenticateResponse,
  /**
   * @param {!proto.Connect.AuthenticateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Connect.AuthenticateResponse.deserializeBinary
);


/**
 * @param {!proto.Connect.AuthenticateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Connect.AuthenticateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Connect.AuthenticateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Connect.AuthenticateClient.prototype.logout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Connect.Authenticate/Logout',
      request,
      metadata || {},
      methodDescriptor_Authenticate_Logout,
      callback);
};


/**
 * @param {!proto.Connect.AuthenticateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Connect.AuthenticateResponse>}
 *     Promise that resolves to the response
 */
proto.Connect.AuthenticatePromiseClient.prototype.logout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Connect.Authenticate/Logout',
      request,
      metadata || {},
      methodDescriptor_Authenticate_Logout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Connect.AuthenticateRequest,
 *   !proto.Connect.AuthenticateResponse>}
 */
const methodDescriptor_Authenticate_CreateUser = new grpc.web.MethodDescriptor(
  '/Connect.Authenticate/CreateUser',
  grpc.web.MethodType.UNARY,
  proto.Connect.AuthenticateRequest,
  proto.Connect.AuthenticateResponse,
  /**
   * @param {!proto.Connect.AuthenticateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Connect.AuthenticateResponse.deserializeBinary
);


/**
 * @param {!proto.Connect.AuthenticateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Connect.AuthenticateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Connect.AuthenticateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Connect.AuthenticateClient.prototype.createUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Connect.Authenticate/CreateUser',
      request,
      metadata || {},
      methodDescriptor_Authenticate_CreateUser,
      callback);
};


/**
 * @param {!proto.Connect.AuthenticateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Connect.AuthenticateResponse>}
 *     Promise that resolves to the response
 */
proto.Connect.AuthenticatePromiseClient.prototype.createUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Connect.Authenticate/CreateUser',
      request,
      metadata || {},
      methodDescriptor_Authenticate_CreateUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Connect.AuthenticateRequest,
 *   !proto.Connect.AuthenticateResponse>}
 */
const methodDescriptor_Authenticate_SendResetEmail = new grpc.web.MethodDescriptor(
  '/Connect.Authenticate/SendResetEmail',
  grpc.web.MethodType.UNARY,
  proto.Connect.AuthenticateRequest,
  proto.Connect.AuthenticateResponse,
  /**
   * @param {!proto.Connect.AuthenticateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Connect.AuthenticateResponse.deserializeBinary
);


/**
 * @param {!proto.Connect.AuthenticateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Connect.AuthenticateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Connect.AuthenticateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Connect.AuthenticateClient.prototype.sendResetEmail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Connect.Authenticate/SendResetEmail',
      request,
      metadata || {},
      methodDescriptor_Authenticate_SendResetEmail,
      callback);
};


/**
 * @param {!proto.Connect.AuthenticateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Connect.AuthenticateResponse>}
 *     Promise that resolves to the response
 */
proto.Connect.AuthenticatePromiseClient.prototype.sendResetEmail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Connect.Authenticate/SendResetEmail',
      request,
      metadata || {},
      methodDescriptor_Authenticate_SendResetEmail);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Connect.AuthenticateRequest,
 *   !proto.Connect.AuthenticateResponse>}
 */
const methodDescriptor_Authenticate_ResetPassword = new grpc.web.MethodDescriptor(
  '/Connect.Authenticate/ResetPassword',
  grpc.web.MethodType.UNARY,
  proto.Connect.AuthenticateRequest,
  proto.Connect.AuthenticateResponse,
  /**
   * @param {!proto.Connect.AuthenticateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Connect.AuthenticateResponse.deserializeBinary
);


/**
 * @param {!proto.Connect.AuthenticateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Connect.AuthenticateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Connect.AuthenticateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Connect.AuthenticateClient.prototype.resetPassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Connect.Authenticate/ResetPassword',
      request,
      metadata || {},
      methodDescriptor_Authenticate_ResetPassword,
      callback);
};


/**
 * @param {!proto.Connect.AuthenticateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Connect.AuthenticateResponse>}
 *     Promise that resolves to the response
 */
proto.Connect.AuthenticatePromiseClient.prototype.resetPassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Connect.Authenticate/ResetPassword',
      request,
      metadata || {},
      methodDescriptor_Authenticate_ResetPassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Connect.AuthenticateRequest,
 *   !proto.Connect.AuthenticateResponse>}
 */
const methodDescriptor_Authenticate_Verify = new grpc.web.MethodDescriptor(
  '/Connect.Authenticate/Verify',
  grpc.web.MethodType.UNARY,
  proto.Connect.AuthenticateRequest,
  proto.Connect.AuthenticateResponse,
  /**
   * @param {!proto.Connect.AuthenticateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Connect.AuthenticateResponse.deserializeBinary
);


/**
 * @param {!proto.Connect.AuthenticateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Connect.AuthenticateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Connect.AuthenticateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Connect.AuthenticateClient.prototype.verify =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Connect.Authenticate/Verify',
      request,
      metadata || {},
      methodDescriptor_Authenticate_Verify,
      callback);
};


/**
 * @param {!proto.Connect.AuthenticateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Connect.AuthenticateResponse>}
 *     Promise that resolves to the response
 */
proto.Connect.AuthenticatePromiseClient.prototype.verify =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Connect.Authenticate/Verify',
      request,
      metadata || {},
      methodDescriptor_Authenticate_Verify);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.Connect.ServiceClient =
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
proto.Connect.ServicePromiseClient =
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
 *   !proto.Connect.ConnectRequest,
 *   !proto.Connect.ConnectResponse>}
 */
const methodDescriptor_Service_Heartbeat = new grpc.web.MethodDescriptor(
  '/Connect.Service/Heartbeat',
  grpc.web.MethodType.UNARY,
  proto.Connect.ConnectRequest,
  proto.Connect.ConnectResponse,
  /**
   * @param {!proto.Connect.ConnectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Connect.ConnectResponse.deserializeBinary
);


/**
 * @param {!proto.Connect.ConnectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Connect.ConnectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Connect.ConnectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Connect.ServiceClient.prototype.heartbeat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Connect.Service/Heartbeat',
      request,
      metadata || {},
      methodDescriptor_Service_Heartbeat,
      callback);
};


/**
 * @param {!proto.Connect.ConnectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Connect.ConnectResponse>}
 *     Promise that resolves to the response
 */
proto.Connect.ServicePromiseClient.prototype.heartbeat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Connect.Service/Heartbeat',
      request,
      metadata || {},
      methodDescriptor_Service_Heartbeat);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Connect.ConnectRequest,
 *   !proto.Connect.ConnectResponse>}
 */
const methodDescriptor_Service_Create = new grpc.web.MethodDescriptor(
  '/Connect.Service/Create',
  grpc.web.MethodType.UNARY,
  proto.Connect.ConnectRequest,
  proto.Connect.ConnectResponse,
  /**
   * @param {!proto.Connect.ConnectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Connect.ConnectResponse.deserializeBinary
);


/**
 * @param {!proto.Connect.ConnectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Connect.ConnectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Connect.ConnectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Connect.ServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Connect.Service/Create',
      request,
      metadata || {},
      methodDescriptor_Service_Create,
      callback);
};


/**
 * @param {!proto.Connect.ConnectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Connect.ConnectResponse>}
 *     Promise that resolves to the response
 */
proto.Connect.ServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Connect.Service/Create',
      request,
      metadata || {},
      methodDescriptor_Service_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Connect.ConnectRequest,
 *   !proto.Connect.ConnectResponse>}
 */
const methodDescriptor_Service_GetById = new grpc.web.MethodDescriptor(
  '/Connect.Service/GetById',
  grpc.web.MethodType.UNARY,
  proto.Connect.ConnectRequest,
  proto.Connect.ConnectResponse,
  /**
   * @param {!proto.Connect.ConnectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Connect.ConnectResponse.deserializeBinary
);


/**
 * @param {!proto.Connect.ConnectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Connect.ConnectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Connect.ConnectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Connect.ServiceClient.prototype.getById =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Connect.Service/GetById',
      request,
      metadata || {},
      methodDescriptor_Service_GetById,
      callback);
};


/**
 * @param {!proto.Connect.ConnectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Connect.ConnectResponse>}
 *     Promise that resolves to the response
 */
proto.Connect.ServicePromiseClient.prototype.getById =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Connect.Service/GetById',
      request,
      metadata || {},
      methodDescriptor_Service_GetById);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Connect.ConnectRequest,
 *   !proto.Connect.ConnectResponse>}
 */
const methodDescriptor_Service_UpdateDetails = new grpc.web.MethodDescriptor(
  '/Connect.Service/UpdateDetails',
  grpc.web.MethodType.UNARY,
  proto.Connect.ConnectRequest,
  proto.Connect.ConnectResponse,
  /**
   * @param {!proto.Connect.ConnectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Connect.ConnectResponse.deserializeBinary
);


/**
 * @param {!proto.Connect.ConnectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Connect.ConnectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Connect.ConnectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Connect.ServiceClient.prototype.updateDetails =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Connect.Service/UpdateDetails',
      request,
      metadata || {},
      methodDescriptor_Service_UpdateDetails,
      callback);
};


/**
 * @param {!proto.Connect.ConnectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Connect.ConnectResponse>}
 *     Promise that resolves to the response
 */
proto.Connect.ServicePromiseClient.prototype.updateDetails =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Connect.Service/UpdateDetails',
      request,
      metadata || {},
      methodDescriptor_Service_UpdateDetails);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Connect.ConnectRequest,
 *   !proto.Connect.ConnectResponse>}
 */
const methodDescriptor_Service_Delete = new grpc.web.MethodDescriptor(
  '/Connect.Service/Delete',
  grpc.web.MethodType.UNARY,
  proto.Connect.ConnectRequest,
  proto.Connect.ConnectResponse,
  /**
   * @param {!proto.Connect.ConnectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Connect.ConnectResponse.deserializeBinary
);


/**
 * @param {!proto.Connect.ConnectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Connect.ConnectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Connect.ConnectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Connect.ServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Connect.Service/Delete',
      request,
      metadata || {},
      methodDescriptor_Service_Delete,
      callback);
};


/**
 * @param {!proto.Connect.ConnectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Connect.ConnectResponse>}
 *     Promise that resolves to the response
 */
proto.Connect.ServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Connect.Service/Delete',
      request,
      metadata || {},
      methodDescriptor_Service_Delete);
};


module.exports = proto.Connect;

