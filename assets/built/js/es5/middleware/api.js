'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Schemas = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _utils = require('utils');

var _APIS = require('constants/APIS');

var _normalizr = require('normalizr');

var bookSchema = new _normalizr.Schema('books', {
  idAttribute: 'id'
});

var bookProgressSchema = new _normalizr.Schema('bookProgress', {
  idAttribute: 'id'
});

var Schemas = exports.Schemas = {
  BOOK: bookSchema,
  BOOK_PROGRESS: bookProgressSchema,
  BOOK_ARRAY: (0, _normalizr.arrayOf)(bookSchema)
};

exports.default = function (store) {
  return function (next) {
    return function (action) {
      var CALL_API = action.CALL_API;
      if (typeof CALL_API === 'undefined') {
        return next(action);
      }

      var endpoint = CALL_API.endpoint;
      var apiUrl = CALL_API.apiUrl;
      var types = CALL_API.types;
      var schema = CALL_API.schema;

      var _types = _slicedToArray(types, 3);

      var requestType = _types[0];
      var successType = _types[1];
      var failureType = _types[2];


      function actionWith(data) {
        var finalAction = Object.assign({}, action, data);
        delete finalAction.CALL_API;
        return finalAction;
      }

      next(actionWith({ type: requestType }));

      if (typeof endpoint === 'function') {
        endpoint = endpoint(store.getState());
      }

      if (typeof apiUrl === 'undefined') {
        apiUrl = _APIS.API_ROOT;
      }

      var fullUrl = apiUrl + endpoint;

      return (0, _utils.callApi)({ fullUrl: fullUrl, schema: schema }).then(function (response) {
        return next(actionWith({
          response: response,
          type: successType
        }));
      }, function (error) {
        return next(actionWith({
          type: failureType,
          error: error.message || 'Oops!'
        }));
      });
    };
  };
};
