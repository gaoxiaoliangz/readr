require('babel-polyfill')
import { render } from 'react-dom'
import React from 'react'
import { browserHistory, hashHistory, match } from 'react-router'
import routes from '../isomorphic/routes'
import syncRoutes from '../isomorphic/routes/index.sync'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from '../isomorphic/store/configureStore'
import rootSaga from '../isomorphic/store/sagas'
import helpers from '../isomorphic/helpers'
import AppContainer from './containers/AppContainer'
import Root from '../isomorphic/containers/Root'
import Test from '../isomorphic/containers/Test'

const routerHistory = helpers.isServerRoutingEnabled()
  ? browserHistory
  : hashHistory

const store = configureStore()
const history = syncHistoryWithStore(routerHistory, store)
const rootEle = document.getElementById('root')

store.runSaga(rootSaga)

// render(
//   <AppContainer>
//     <Test/>
//   </AppContainer>,
//   rootEle
// )

// if (module.hot) {
//   module.hot.accept('./containers/Test', () => {
//     const NextRoot = require('./containers/Test').default

//     console.info('hot patching')
//     render(
//       <AppContainer>
//         <NextRoot/>
//       </AppContainer>,
//       rootEle
//     )
//   })
// }


render(
  <AppContainer>
    <Root history={history} routes={syncRoutes} store={store} />
  </AppContainer>,
  rootEle
)

if (module.hot) {
  console.info('hot patching')
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root').default

    render(
      <AppContainer>
        <NextRoot history={history} routes={syncRoutes} store={store} />
      </AppContainer>,
      rootEle
    )
  })
}

// match({ history, routes }, (error, redirectLocation, renderProps) => {

//   console.log(renderProps);

//   render(
//     <Root
//       store={store}
//       routerProps={renderProps}
//       />,
//     rootEle
//   )
// })


// if (module.hot) {
//   module.hot.accept('./containers/Root2', () => {
//     console.log('hehe');

//     // const NextRoot = require('./containers/Root2').default
//     // render(
//     //   <AppContainer>
//     //     <NextRoot
//     //       store={store}
//     //       renderProps={renderProps}
//     //       />
//     //   </AppContainer>,
//     //   rootEle
//     // )
//   })
// }
