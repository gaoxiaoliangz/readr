'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.promisedCallApi = promisedCallApi;
exports.dispatchWrap = dispatchWrap;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _styles = require('constants/styles');

var styles = _interopRequireWildcard(_styles);

var _utils = require('utils');

var _apiUrls = require('constants/api-urls');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      apiUrl = _apiUrls.API_ROOT;
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

function dispatchWrap(shellFunction) {
  return function (dispatch, getState) {
    return shellFunction(dispatch, getState);
  };
}
