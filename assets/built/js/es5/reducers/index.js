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

var _paginate = require('./paginate');

var _paginate2 = _interopRequireDefault(_paginate);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

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
    types: ['BOOK_LIST_REQUEST', 'BOOK_LIST_SUCCESS', 'BOOK_LIST_FAILURE']
  }),
  doubanBookSearchResults: (0, _paginate2.default)({
    mapActionToKey: function mapActionToKey(action) {
      return action.query;
    },
    types: ['DOUBAN_BOOK_SEARCH_REQUEST', 'DOUBAN_BOOK_SEARCH_SUCCESS', 'DOUBAN_BOOK_SEARCH_FAILURE']
  })
});

var components = (0, _redux.combineReducers)({
  notification: _notification2.default
});

var rootReducer = (0, _redux.combineReducers)({
  components: components,
  routing: _reactRouterRedux.routerReducer,
  entities: entities,
  pagination: pagination,
  session: session
});

exports.default = rootReducer;
