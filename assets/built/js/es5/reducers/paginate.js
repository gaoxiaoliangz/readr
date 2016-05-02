'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); // import merge from 'lodash/merge'
// import union from 'lodash/array/union'


exports.default = paginate;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Creates a reducer managing pagination, given the action types to handle,
// and a function telling how to extract the key from an action.
function paginate(_ref) {
  var types = _ref.types;
  var mapActionToKey = _ref.mapActionToKey;

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected types to be an array of three elements.');
  }
  if (!types.every(function (t) {
    return typeof t === 'string';
  })) {
    throw new Error('Expected types to be strings.');
  }
  if (typeof mapActionToKey !== 'function') {
    throw new Error('Expected mapActionToKey to be a function.');
  }

  var _types = _slicedToArray(types, 3);

  var requestType = _types[0];
  var successType = _types[1];
  var failureType = _types[2];


  function updatePagination() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? {
      isFetching: false,
      nextPageUrl: undefined,
      pageCount: 0,
      ids: []
    } : arguments[0];
    var action = arguments[1];

    switch (action.type) {
      case requestType:
        return Object.assign({}, state, {
          isFetching: true
        });
      case successType:
        return Object.assign({}, state, {
          isFetching: false,
          ids: _lodash2.default.union(state.ids, action.response.result),
          nextPageUrl: action.response.nextPageUrl,
          pageCount: state.pageCount + 1
        });
      case failureType:
        return Object.assign({}, state, {
          isFetching: false
        });
      default:
        return state;
    }
  }

  return function updatePaginationByKey() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var action = arguments[1];

    switch (action.type) {
      case requestType:
      case successType:
      case failureType:
        var key = mapActionToKey(action);

        if (typeof key !== 'string') {
          throw new Error('Expected key to be a string.');
        }
        return Object.assign({}, state, _defineProperty({}, key, updatePagination(state[key], action)));
      default:
        return state;
    }
  };
}
