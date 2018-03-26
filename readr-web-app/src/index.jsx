import React from 'react'
import 'rxjs'
import { AppContainer } from 'react-hot-loader'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import './styles/main.scss?global' // eslint-disable-line
import store from './store'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  )
}

render(App)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(App)
  })
}
