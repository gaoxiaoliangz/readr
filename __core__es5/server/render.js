'use strict';

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// server rendering ///////////////////////////////////////////////////////////
var React = require('react');
var Component = require('react').Component;
var createStore = require('redux').createStore;
var Provider = require('react-redux').Provider;
var renderToString = require('react-dom/server').renderToString;
var reactRoutes = require('./modules_es5/routes').default;
var configureStore = require('./modules_es5/store/configureStore').default;


var store = configureStore();
var initialState = store.getState();

// const html = renderToString(
//   <Provider store={store}>
//     <div>
//       <App />
//     </div>
//   </Provider>
// )

app.use(routes.apiBaseUri, routes.api());
app.get("*", function (req, res, next) {
  (0, _reactRouter.match)({ routes: reactRoutes, location: req.url }, function (error, redirectLocation, renderProps) {
    if (error) {
      res.status(500).render('error', {
        message: error.message,
        error: env === 'development' ? error : {},
        env: env
      });
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      res.status(200).render('index', {
        env: env,
        html: renderToString(React.createElement(_reactRouter.RouterContext, renderProps)),
        initialState: JSON.stringify(initialState)
      });
    } else {
      var err = new Error('Not Found');
      err.status = 404;
      res.status(404).render('error', {
        message: err.message,
        error: env === 'development' ? err : {},
        env: env
      });
    }
  });
});
