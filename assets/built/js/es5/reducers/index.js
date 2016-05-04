'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _book = require('./book');

var _book2 = _interopRequireDefault(_book);

var _notification = require('./notification');

var _notification2 = _interopRequireDefault(_notification);

var _reactRouterRedux = require('react-router-redux');

var _actions = require('../actions');

var ActionTypes = _interopRequireWildcard(_actions);

var _paginate = require('./paginate');

var _paginate2 = _interopRequireDefault(_paginate);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Updates an entity cache in response to any action with response.entities.
function entities() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var action = arguments[1];

  if (action.response && action.response.entities) {
    return _lodash2.default.merge({}, state, action.response.entities);
  }

  return state;
}

// Updates error message to notify about the failed fetches.
function errorMessage() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
  var action = arguments[1];
  var type = action.type;
  var error = action.error;


  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null;
  } else if (error) {
    return action.error;
  }

  return state;
}

function session() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? { user: { role: 'visitor' } } : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'USER_AUTH_REQUEST':
      return Object.assign({}, state, {
        isFetching: true
      });

    case 'USER_AUTH_SUCCESS':
      return Object.assign({}, state, {
        isFetching: false,
        user: action.response
      });

    case 'USER_AUTH_FAILURE':
      return Object.assign({}, state, {
        isFetching: false,
        user: action.response
      });

    default:
      return state;
  }
}

// Updates the pagination data for different actions.
var pagination = (0, _redux.combineReducers)({
  bookList: (0, _paginate2.default)({
    mapActionToKey: function mapActionToKey(action) {
      return 'all';
    },
    types: [ActionTypes.BOOK_LIST_REQUEST, ActionTypes.BOOK_LIST_SUCCESS, ActionTypes.BOOK_LIST_FAILURE]
  })
});

var components = (0, _redux.combineReducers)({
  notification: _notification2.default
});

var rootReducer = (0, _redux.combineReducers)({
  book: _book2.default,
  components: components,
  routing: _reactRouterRedux.routerReducer,
  entities: entities,
  pagination: pagination,
  session: session
});

exports.default = rootReducer;
