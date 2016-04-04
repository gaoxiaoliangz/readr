// server rendering ///////////////////////////////////////////////////////////
var React = require('react')
var Component = require('react').Component
var createStore = require('redux').createStore
var Provider = require('react-redux').Provider
var renderToString = require('react-dom/server').renderToString
var reactRoutes = require('./modules_es5/routes').default
var configureStore = require('./modules_es5/store/configureStore').default
import Router, { match, RouterContext } from 'react-router'

const store = configureStore()
const initialState = store.getState()

// const html = renderToString(
//   <Provider store={store}>
//     <div>
//       <App />
//     </div>
//   </Provider>
// )




app.use(routes.apiBaseUri, routes.api())
app.get("*",function(req, res, next){
  match({ routes: reactRoutes, location: req.url }, function(error, redirectLocation, renderProps) {
    if (error) {
      res.status(500).render('error', {
        message: error.message,
        error: env === 'development'?error:{},
        env: env
      })
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      res.status(200).render('index', {
        env: env,
        html: renderToString(<RouterContext {...renderProps} />),
        initialState: JSON.stringify(initialState)
      })
    } else {
      let err = new Error('Not Found')
      err.status = 404;
      res.status(404).render('error', {
        message: err.message,
        error: env === 'development'?err:{},
        env: env
      })
    }
  })
})
