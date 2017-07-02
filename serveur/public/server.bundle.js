/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	eval("__webpack_require__(1);\nmodule.exports = __webpack_require__(2);\n\n\n//////////////////\n// WEBPACK FOOTER\n// multi node\n// module id = 0\n// module chunks = 0\n//# sourceURL=webpack:///multi_node?");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	eval("module.exports = require(\"babel-polyfill\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"babel-polyfill\"\n// module id = 1\n// module chunks = 0\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(3);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _serveFavicon = __webpack_require__(7);\n\nvar _serveFavicon2 = _interopRequireDefault(_serveFavicon);\n\nvar _cors = __webpack_require__(4);\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _indexControlleur = __webpack_require__(15);\n\nvar _indexControlleur2 = _interopRequireDefault(_indexControlleur);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\n\napp.options('*', _cors2.default);\napp.use((0, _serveFavicon2.default)('./images/favicon.png'));\n\nvar port = process.env.PORT || 3000;\n\napp.use(_express2.default.static('/public'));\n\napp.use('/', _indexControlleur2.default);\n\nvar server = app.listen(port, function () {\n  console.log('server is listenning @ localhost:', server.address().port);\n});\n\nexports.default = server;\n\n//////////////////\n// WEBPACK FOOTER\n// ./serveur/index.js\n// module id = 2\n// module chunks = 0\n//# sourceURL=webpack:///./serveur/index.js?");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	eval("module.exports = require(\"express\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"express\"\n// module id = 3\n// module chunks = 0\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	eval("(function () {\n\n  'use strict';\n\n  var assign = __webpack_require__(5);\n  var vary = __webpack_require__(6);\n\n  var defaults = {\n      origin: '*',\n      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',\n      preflightContinue: false,\n      optionsSuccessStatus: 204\n    };\n\n  function isString(s) {\n    return typeof s === 'string' || s instanceof String;\n  }\n\n  function isOriginAllowed(origin, allowedOrigin) {\n    if (Array.isArray(allowedOrigin)) {\n      for (var i = 0; i < allowedOrigin.length; ++i) {\n        if (isOriginAllowed(origin, allowedOrigin[i])) {\n          return true;\n        }\n      }\n      return false;\n    } else if (isString(allowedOrigin)) {\n      return origin === allowedOrigin;\n    } else if (allowedOrigin instanceof RegExp) {\n      return allowedOrigin.test(origin);\n    } else {\n      return !!allowedOrigin;\n    }\n  }\n\n  function configureOrigin(options, req) {\n    var requestOrigin = req.headers.origin,\n      headers = [],\n      isAllowed;\n\n    if (!options.origin || options.origin === '*') {\n      // allow any origin\n      headers.push([{\n        key: 'Access-Control-Allow-Origin',\n        value: '*'\n      }]);\n    } else if (isString(options.origin)) {\n      // fixed origin\n      headers.push([{\n        key: 'Access-Control-Allow-Origin',\n        value: options.origin\n      }]);\n      headers.push([{\n        key: 'Vary',\n        value: 'Origin'\n      }]);\n    } else {\n      isAllowed = isOriginAllowed(requestOrigin, options.origin);\n      // reflect origin\n      headers.push([{\n        key: 'Access-Control-Allow-Origin',\n        value: isAllowed ? requestOrigin : false\n      }]);\n      headers.push([{\n        key: 'Vary',\n        value: 'Origin'\n      }]);\n    }\n\n    return headers;\n  }\n\n  function configureMethods(options) {\n    var methods = options.methods;\n    if (methods.join) {\n      methods = options.methods.join(','); // .methods is an array, so turn it into a string\n    }\n    return {\n      key: 'Access-Control-Allow-Methods',\n      value: methods\n    };\n  }\n\n  function configureCredentials(options) {\n    if (options.credentials === true) {\n      return {\n        key: 'Access-Control-Allow-Credentials',\n        value: 'true'\n      };\n    }\n    return null;\n  }\n\n  function configureAllowedHeaders(options, req) {\n    var allowedHeaders = options.allowedHeaders || options.headers;\n    var headers = [];\n\n    if (!allowedHeaders) {\n      allowedHeaders = req.headers['access-control-request-headers']; // .headers wasn't specified, so reflect the request headers\n      headers.push([{\n        key: 'Vary',\n        value: 'Access-Control-Request-Headers'\n      }]);\n    } else if (allowedHeaders.join) {\n      allowedHeaders = allowedHeaders.join(','); // .headers is an array, so turn it into a string\n    }\n    if (allowedHeaders && allowedHeaders.length) {\n      headers.push([{\n        key: 'Access-Control-Allow-Headers',\n        value: allowedHeaders\n      }]);\n    }\n\n    return headers;\n  }\n\n  function configureExposedHeaders(options) {\n    var headers = options.exposedHeaders;\n    if (!headers) {\n      return null;\n    } else if (headers.join) {\n      headers = headers.join(','); // .headers is an array, so turn it into a string\n    }\n    if (headers && headers.length) {\n      return {\n        key: 'Access-Control-Expose-Headers',\n        value: headers\n      };\n    }\n    return null;\n  }\n\n  function configureMaxAge(options) {\n    var maxAge = options.maxAge && options.maxAge.toString();\n    if (maxAge && maxAge.length) {\n      return {\n        key: 'Access-Control-Max-Age',\n        value: maxAge\n      };\n    }\n    return null;\n  }\n\n  function applyHeaders(headers, res) {\n    for (var i = 0, n = headers.length; i < n; i++) {\n      var header = headers[i];\n      if (header) {\n        if (Array.isArray(header)) {\n          applyHeaders(header, res);\n        } else if (header.key === 'Vary' && header.value) {\n          vary(res, header.value);\n        } else if (header.value) {\n          res.setHeader(header.key, header.value);\n        }\n      }\n    }\n  }\n\n  function cors(options, req, res, next) {\n    var headers = [],\n      method = req.method && req.method.toUpperCase && req.method.toUpperCase();\n\n    if (method === 'OPTIONS') {\n      // preflight\n      headers.push(configureOrigin(options, req));\n      headers.push(configureCredentials(options, req));\n      headers.push(configureMethods(options, req));\n      headers.push(configureAllowedHeaders(options, req));\n      headers.push(configureMaxAge(options, req));\n      headers.push(configureExposedHeaders(options, req));\n      applyHeaders(headers, res);\n\n      if (options.preflightContinue ) {\n        next();\n      } else {\n        res.statusCode = options.optionsSuccessStatus || defaults.optionsSuccessStatus;\n        res.end();\n      }\n    } else {\n      // actual response\n      headers.push(configureOrigin(options, req));\n      headers.push(configureCredentials(options, req));\n      headers.push(configureExposedHeaders(options, req));\n      applyHeaders(headers, res);\n      next();\n    }\n  }\n\n  function middlewareWrapper(o) {\n    // if options are static (either via defaults or custom options passed in), wrap in a function\n    var optionsCallback = null;\n    if (typeof o === 'function') {\n      optionsCallback = o;\n    } else {\n      optionsCallback = function (req, cb) {\n        cb(null, o);\n      };\n    }\n\n    return function corsMiddleware(req, res, next) {\n      optionsCallback(req, function (err, options) {\n        if (err) {\n          next(err);\n        } else {\n          var corsOptions = assign({}, defaults, options);\n          var originCallback = null;\n          if (corsOptions.origin && typeof corsOptions.origin === 'function') {\n            originCallback = corsOptions.origin;\n          } else if (corsOptions.origin) {\n            originCallback = function (origin, cb) {\n              cb(null, corsOptions.origin);\n            };\n          }\n\n          if (originCallback) {\n            originCallback(req.headers.origin, function (err2, origin) {\n              if (err2 || !origin) {\n                next(err2);\n              } else {\n                corsOptions.origin = origin;\n                cors(corsOptions, req, res, next);\n              }\n            });\n          } else {\n            next();\n          }\n        }\n      });\n    };\n  }\n\n  // can pass either an options hash, an options delegate, or nothing\n  module.exports = middlewareWrapper;\n\n}());\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/cors/lib/index.js\n// module id = 4\n// module chunks = 0\n//# sourceURL=webpack:///./~/cors/lib/index.js?");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	eval("module.exports = require(\"object-assign\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"object-assign\"\n// module id = 5\n// module chunks = 0\n//# sourceURL=webpack:///external_%22object-assign%22?");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	eval("module.exports = require(\"vary\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"vary\"\n// module id = 6\n// module chunks = 0\n//# sourceURL=webpack:///external_%22vary%22?");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	eval("/*!\n * serve-favicon\n * Copyright(c) 2010 Sencha Inc.\n * Copyright(c) 2011 TJ Holowaychuk\n * Copyright(c) 2014-2017 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n'use strict'\n\n/**\n * Module dependencies.\n * @private\n */\n\nvar Buffer = __webpack_require__(8).Buffer\nvar etag = __webpack_require__(9)\nvar fresh = __webpack_require__(10)\nvar fs = __webpack_require__(11)\nvar ms = __webpack_require__(12)\nvar parseUrl = __webpack_require__(13)\nvar path = __webpack_require__(14)\nvar resolve = path.resolve\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = favicon\n\n/**\n * Module variables.\n * @private\n */\n\nvar ONE_YEAR_MS = 60 * 60 * 24 * 365 * 1000 // 1 year\n\n/**\n * Serves the favicon located by the given `path`.\n *\n * @public\n * @param {String|Buffer} path\n * @param {Object} [options]\n * @return {Function} middleware\n */\n\nfunction favicon (path, options) {\n  var opts = options || {}\n\n  var icon // favicon cache\n  var maxAge = calcMaxAge(opts.maxAge)\n\n  if (!path) {\n    throw new TypeError('path to favicon.ico is required')\n  }\n\n  if (Buffer.isBuffer(path)) {\n    icon = createIcon(Buffer.from(path), maxAge)\n  } else if (typeof path === 'string') {\n    path = resolveSync(path)\n  } else {\n    throw new TypeError('path to favicon.ico must be string or buffer')\n  }\n\n  return function favicon (req, res, next) {\n    if (parseUrl(req).pathname !== '/favicon.ico') {\n      next()\n      return\n    }\n\n    if (req.method !== 'GET' && req.method !== 'HEAD') {\n      res.statusCode = req.method === 'OPTIONS' ? 200 : 405\n      res.setHeader('Allow', 'GET, HEAD, OPTIONS')\n      res.setHeader('Content-Length', '0')\n      res.end()\n      return\n    }\n\n    if (icon) {\n      send(req, res, icon)\n      return\n    }\n\n    fs.readFile(path, function (err, buf) {\n      if (err) return next(err)\n      icon = createIcon(buf, maxAge)\n      send(req, res, icon)\n    })\n  }\n}\n\n/**\n * Calculate the max-age from a configured value.\n *\n * @private\n * @param {string|number} val\n * @return {number}\n */\n\nfunction calcMaxAge (val) {\n  var num = typeof val === 'string'\n    ? ms(val)\n    : val\n\n  return num != null\n    ? Math.min(Math.max(0, num), ONE_YEAR_MS)\n    : ONE_YEAR_MS\n}\n\n/**\n * Create icon data from Buffer and max-age.\n *\n * @private\n * @param {Buffer} buf\n * @param {number} maxAge\n * @return {object}\n */\n\nfunction createIcon (buf, maxAge) {\n  return {\n    body: buf,\n    headers: {\n      'Cache-Control': 'public, max-age=' + Math.floor(maxAge / 1000),\n      'ETag': etag(buf)\n    }\n  }\n}\n\n/**\n * Create EISDIR error.\n *\n * @private\n * @param {string} path\n * @return {Error}\n */\n\nfunction createIsDirError (path) {\n  var error = new Error('EISDIR, illegal operation on directory \\'' + path + '\\'')\n  error.code = 'EISDIR'\n  error.errno = 28\n  error.path = path\n  error.syscall = 'open'\n  return error\n}\n\n/**\n * Determine if the cached representation is fresh.\n *\n * @param {object} req\n * @param {object} res\n * @return {boolean}\n * @private\n */\n\nfunction isFresh (req, res) {\n  return fresh(req.headers, {\n    'etag': res.getHeader('ETag'),\n    'last-modified': res.getHeader('Last-Modified')\n  })\n}\n\n/**\n * Resolve the path to icon.\n *\n * @param {string} iconPath\n * @private\n */\n\nfunction resolveSync (iconPath) {\n  var path = resolve(iconPath)\n  var stat = fs.statSync(path)\n\n  if (stat.isDirectory()) {\n    throw createIsDirError(path)\n  }\n\n  return path\n}\n\n/**\n * Send icon data in response to a request.\n *\n * @private\n * @param {IncomingMessage} req\n * @param {OutgoingMessage} res\n * @param {object} icon\n */\n\nfunction send (req, res, icon) {\n  // Set headers\n  var headers = icon.headers\n  var keys = Object.keys(headers)\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i]\n    res.setHeader(key, headers[key])\n  }\n\n  // Validate freshness\n  if (isFresh(req, res)) {\n    res.statusCode = 304\n    res.end()\n    return\n  }\n\n  // Send icon\n  res.statusCode = 200\n  res.setHeader('Content-Length', icon.body.length)\n  res.setHeader('Content-Type', 'image/x-icon')\n  res.end(icon.body)\n}\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/serve-favicon/index.js\n// module id = 7\n// module chunks = 0\n//# sourceURL=webpack:///./~/serve-favicon/index.js?");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	eval("module.exports = require(\"safe-buffer\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"safe-buffer\"\n// module id = 8\n// module chunks = 0\n//# sourceURL=webpack:///external_%22safe-buffer%22?");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	eval("module.exports = require(\"etag\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"etag\"\n// module id = 9\n// module chunks = 0\n//# sourceURL=webpack:///external_%22etag%22?");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	eval("module.exports = require(\"fresh\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"fresh\"\n// module id = 10\n// module chunks = 0\n//# sourceURL=webpack:///external_%22fresh%22?");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	eval("module.exports = require(\"fs\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"fs\"\n// module id = 11\n// module chunks = 0\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	eval("module.exports = require(\"ms\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"ms\"\n// module id = 12\n// module chunks = 0\n//# sourceURL=webpack:///external_%22ms%22?");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	eval("module.exports = require(\"parseurl\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"parseurl\"\n// module id = 13\n// module chunks = 0\n//# sourceURL=webpack:///external_%22parseurl%22?");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	eval("module.exports = require(\"path\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"path\"\n// module id = 14\n// module chunks = 0\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(3);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _helloControlleur = __webpack_require__(16);\n\nvar _helloControlleur2 = _interopRequireDefault(_helloControlleur);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = _express2.default.Router({ mergeParams: true });\n\napp.use(function (req, res, next) {\n  console.log('Request Made');\n\n  res.header('Access-Control-Allow-Origin', '*');\n  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');\n  next();\n});\n\napp.use('/hello', _helloControlleur2.default);\n// on ajoute toute les requete des api de cette facon.\n\nexports.default = app;\n\n//////////////////\n// WEBPACK FOOTER\n// ./serveur/controlleurs/indexControlleur.js\n// module id = 15\n// module chunks = 0\n//# sourceURL=webpack:///./serveur/controlleurs/indexControlleur.js?");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(3);\n\nvar _express2 = _interopRequireDefault(_express);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = _express2.default.Router({ mergeParams: true });\n\nvar helloFunction = function helloFunction(req, res, next) {\n  console.log('hello world');\n  res.status(200);\n  res.json(\"the hello world has been send\");\n};\n\napp.route('/').all(function (req, res, next) {\n  console.log('req@HelleApi');\n  // NodeLogger.info(req);\n  // console.log(req);\n  // runs for all HTTP verbs first\n  // think of it as route specific middleware!\n  next();\n}).get(helloFunction);\n\nexports.default = app;\n\n//////////////////\n// WEBPACK FOOTER\n// ./serveur/controlleurs/helloControlleur.js\n// module id = 16\n// module chunks = 0\n//# sourceURL=webpack:///./serveur/controlleurs/helloControlleur.js?");

/***/ })
/******/ ]);