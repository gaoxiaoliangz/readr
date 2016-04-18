'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SET_VIEW = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _book = require('actions/book');

Object.keys(_book).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _book[key];
    }
  });
});

var _notification = require('actions/notification');

Object.keys(_notification).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _notification[key];
    }
  });
});

var _user = require('actions/user');

Object.keys(_user).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _user[key];
    }
  });
});

var _confirm = require('actions/confirm');

Object.keys(_confirm).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _confirm[key];
    }
  });
});
exports.setView = setView;
exports.promisedCallApi = promisedCallApi;
exports.wrap = wrap;
exports.promisedWrap = promisedWrap;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _STYLES = require('constants/STYLES');

var styles = _interopRequireWildcard(_STYLES);

var _utils = require('utils');

var _APIS = require('constants/APIS');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SET_VIEW = exports.SET_VIEW = 'SET_VIEW';
function setView(view) {
  return {
    type: SET_VIEW,
    view: view
  };
}

// todo: merge with api.js
function promisedCallApi(CALL_API, actionArgObj) {
  return function (dispatch, getState) {
    var endpoint = CALL_API.endpoint;
    var apiUrl = CALL_API.apiUrl;
    var types = CALL_API.types;

    var _types = _slicedToArray(types, 3);

    var requestType = _types[0];
    var successType = _types[1];
    var failureType = _types[2];


    function actionWith(data) {
      var finalAction = Object.assign({}, actionArgObj, data);
      return finalAction;
    }

    dispatch(actionWith({ type: requestType }));

    if (typeof endpoint === 'function') {
      endpoint = endpoint(getState());
    }

    if (typeof apiUrl === 'undefined') {
      apiUrl = _APIS.API_ROOT;
    }

    var fullUrl = apiUrl + endpoint;

    return new Promise(function (resolve, reject) {
      (0, _utils.callApi)(fullUrl).then(function (response) {
        dispatch(actionWith({
          response: response,
          type: successType
        }));
        resolve(getState);
      }, function (error) {
        dispatch(actionWith({
          type: failureType,
          error: error.message || 'Oops!'
        }));
        reject(error);
      });
    });
  };
}

function wrap(func) {
  return function (dispatch, getState) {
    func(dispatch, getState);
  };
}

function promisedWrap(func) {
  return function (dispatch, getState) {
    return new Promise(function (resolve) {
      func(dispatch, getState);
      resolve(getState);
    });
  };
}
