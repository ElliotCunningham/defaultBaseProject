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

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(3);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _serveFavicon = __webpack_require__(4);\n\nvar _serveFavicon2 = _interopRequireDefault(_serveFavicon);\n\nvar _cors = __webpack_require__(5);\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _indexControlleur = __webpack_require__(6);\n\nvar _indexControlleur2 = _interopRequireDefault(_indexControlleur);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\n\napp.options('*', _cors2.default);\napp.use((0, _serveFavicon2.default)('./images/favicon.png'));\n\nvar port = process.env.PORT || 3000;\n\napp.use(_express2.default.static('/public'));\n\napp.use('/', _indexControlleur2.default);\n\nvar server = app.listen(port, function () {\n  console.log('server is listenning @ localhost:', server.address().port);\n});\n\nexports.default = server;\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/index.js\n// module id = 2\n// module chunks = 0\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	eval("module.exports = require(\"express\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"express\"\n// module id = 3\n// module chunks = 0\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	eval("module.exports = require(\"serve-favicon\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"serve-favicon\"\n// module id = 4\n// module chunks = 0\n//# sourceURL=webpack:///external_%22serve-favicon%22?");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	eval("module.exports = require(\"cors\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"cors\"\n// module id = 5\n// module chunks = 0\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(3);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _helloControlleur = __webpack_require__(7);\n\nvar _helloControlleur2 = _interopRequireDefault(_helloControlleur);\n\nvar _couchControlleur = __webpack_require__(8);\n\nvar _couchControlleur2 = _interopRequireDefault(_couchControlleur);\n\nvar _usersControlleur = __webpack_require__(13);\n\nvar _usersControlleur2 = _interopRequireDefault(_usersControlleur);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = _express2.default.Router({ mergeParams: true });\n\napp.use(function (req, res, next) {\n  console.log('Request Made');\n  res.header('Access-Control-Allow-Origin', '*');\n  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');\n  next();\n});\n\napp.use('/hello', _helloControlleur2.default);\napp.use('/couch', _couchControlleur2.default);\napp.use('/users', _usersControlleur2.default);\n\nexports.default = app;\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/controlleurs/indexControlleur.js\n// module id = 6\n// module chunks = 0\n//# sourceURL=webpack:///./server/controlleurs/indexControlleur.js?");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(3);\n\nvar _express2 = _interopRequireDefault(_express);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = _express2.default.Router({ mergeParams: true });\n\nvar helloFunction = function helloFunction(req, res, next) {\n  console.log('hello world');\n  res.status(200);\n  res.json(\"the hello world has been send\");\n};\n\napp.route('/').all(function (req, res, next) {\n  console.log('req@HelleApi');\n  // NodeLogger.info(req);\n  // console.log(req);\n  // runs for all HTTP verbs first\n  // think of it as route specific middleware!\n  next();\n}).get(helloFunction);\n\nexports.default = app;\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/controlleurs/helloControlleur.js\n// module id = 7\n// module chunks = 0\n//# sourceURL=webpack:///./server/controlleurs/helloControlleur.js?");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(3);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _userBddApi = __webpack_require__(9);\n\nvar _userBddApi2 = _interopRequireDefault(_userBddApi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = _express2.default.Router({ mergeParams: true });\n\nvar getAllAvaibleDataBase = function getAllAvaibleDataBase(req, res, next) {\n  console.log('req @ getAllAvaibleDataBase');\n  res.status(200);\n  res.json({ res: true });\n};\n\nvar getAllAvaibleUsers = function getAllAvaibleUsers(req, res, next) {\n  console.log('req @ getAllAvaibleUsers');\n  _userBddApi2.default.getAllUsers().then(function (result) {\n    res.status(200);\n    res.json(result);\n  }).catch(function (err) {\n    res.status(404);\n    res.json(err);\n  });\n};\n\napp.route('/all').all(function (req, res, next) {\n  console.log('req @ all');\n  next();\n}).get(getAllAvaibleDataBase);\n\napp.route('/users').all(function (req, res, next) {\n  console.log('req @ users');\n  next();\n}).get(getAllAvaibleUsers);\n\nexports.default = app;\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/controlleurs/couchControlleur.js\n// module id = 8\n// module chunks = 0\n//# sourceURL=webpack:///./server/controlleurs/couchControlleur.js?");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _NanoApi2 = __webpack_require__(10);\n\nvar _NanoApi3 = _interopRequireDefault(_NanoApi2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar userBddApi = function (_NanoApi) {\n  _inherits(userBddApi, _NanoApi);\n\n  function userBddApi() {\n    _classCallCheck(this, userBddApi);\n\n    var _this = _possibleConstructorReturn(this, (userBddApi.__proto__ || Object.getPrototypeOf(userBddApi)).call(this, 'users'));\n\n    console.log('connect to users Api');\n    return _this;\n  }\n\n  _createClass(userBddApi, [{\n    key: 'getAllUsers',\n    value: function getAllUsers() {\n      return this.getAllDocs();\n    }\n  }]);\n\n  return userBddApi;\n}(_NanoApi3.default);\n\nexports.default = new userBddApi();\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/lib/userBddApi.js\n// module id = 9\n// module chunks = 0\n//# sourceURL=webpack:///./server/lib/userBddApi.js?");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _nano = __webpack_require__(11);\n\nvar _nano2 = _interopRequireDefault(_nano);\n\nvar _couchdb = __webpack_require__(12);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar NanoApi = function () {\n  function NanoApi(bddName) {\n    _classCallCheck(this, NanoApi);\n\n    this.bdd = bddName;\n    this.url = this._defineUrl();\n    this.nano = false;\n  }\n\n  _createClass(NanoApi, [{\n    key: '_defineUrl',\n    value: function _defineUrl() {\n      var url = 'http://' + _couchdb.__ADMIN_LOGIN__ + ':' + _couchdb.__ADMIN_PASS__ + '@' + _couchdb.__COUCH_URL__ + '/';\n      console.log('url for request =>', url);\n      return url;\n    }\n  }, {\n    key: '_initNanoApi',\n    value: function _initNanoApi() {\n      this.nano = new _nano2.default(this.url).use(this.bdd);\n    }\n  }, {\n    key: 'getAllDocs',\n    value: function getAllDocs() {\n      var _this = this;\n\n      this._initNanoApi();\n      return new Promise(function (resolve, reject) {\n        _this.nano.list({ include_docs: true }, function (err, docs) {\n          if (err) return reject(err);\n          return resolve(docs);\n        });\n      });\n    }\n  }]);\n\n  return NanoApi;\n}();\n\nexports.default = NanoApi;\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/lib/api/NanoApi.js\n// module id = 10\n// module chunks = 0\n//# sourceURL=webpack:///./server/lib/api/NanoApi.js?");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	eval("module.exports = require(\"nano\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"nano\"\n// module id = 11\n// module chunks = 0\n//# sourceURL=webpack:///external_%22nano%22?");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	eval("'use strict';\n\nmodule.exports = {\n  __COUCH_URL__: '127.0.0.1:5984',\n  __ADMIN_LOGIN__: 'couchAdmin',\n  __ADMIN_PASS__: '19AdminPass'\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/config/couchdb.js\n// module id = 12\n// module chunks = 0\n//# sourceURL=webpack:///./server/config/couchdb.js?");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(3);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _valideResponse = __webpack_require__(14);\n\nvar _valideResponse2 = _interopRequireDefault(_valideResponse);\n\nvar _errorResponse = __webpack_require__(15);\n\nvar _errorResponse2 = _interopRequireDefault(_errorResponse);\n\nvar _users = __webpack_require__(16);\n\nvar _users2 = _interopRequireDefault(_users);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = _express2.default.Router({ mergeParams: true });\n\nvar getAllUsersRequest = function getAllUsersRequest(req, res, next) {\n  _valideResponse2.default.valideResponseWithData(req, res, next, _users2.default);\n};\n\napp.route('/').all(function (req, res, next) {\n  console.log('req @ user');\n  console.log('users', _users2.default);\n  next();\n}).get(getAllUsersRequest);\n\nexports.default = app;\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/controlleurs/usersControlleur.js\n// module id = 13\n// module chunks = 0\n//# sourceURL=webpack:///./server/controlleurs/usersControlleur.js?");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar valideResponse = function valideResponse(req, res, next) {\n  res.status(200);\n  res.json({ status: 'ok', message: 'request is send corectly' });\n};\n\nvar valideResponseWithData = function valideResponseWithData(req, res, next, data) {\n  res.status(200);\n  res.json(data);\n};\n\nexports.default = {\n  valideResponse: valideResponse,\n  valideResponseWithData: valideResponseWithData\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/locales/valideResponse.js\n// module id = 14\n// module chunks = 0\n//# sourceURL=webpack:///./server/locales/valideResponse.js?");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar errorNotFound = function errorNotFound(req, res, next) {\n  res.status(404);\n  res.json({ status: 'not found', error: 'the request is not found' });\n};\n\nvar errorDataAndStatus = function errorDataAndStatus(req, res, next, error, status) {\n  res.status(status);\n  res.json(error);\n};\n\nvar internalErrorServer = function internalErrorServer(req, res, next) {\n  res.status(500);\n  res.json(\"internal error in server\");\n};\n\nexports.default = {\n  errorNotFound: errorNotFound,\n  internalErrorServer: internalErrorServer,\n  errorDataAndStatus: errorDataAndStatus\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/locales/errorResponse.js\n// module id = 15\n// module chunks = 0\n//# sourceURL=webpack:///./server/locales/errorResponse.js?");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar users = [{\n  _id: \"user_2072017.10H\",\n  _rev: \"1-94a9e5a3075470b67b8baccd3fb97637\",\n  userName: \"elliot\",\n  password: \"mdpElliot\",\n  prenom: \"elliot\",\n  nom: \"cunningham\",\n  joueur: true\n}];\n\nexports.default = users;\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/models/users.js\n// module id = 16\n// module chunks = 0\n//# sourceURL=webpack:///./server/models/users.js?");

/***/ })
/******/ ]);