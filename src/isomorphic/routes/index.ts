import Root from '../containers/Root'
import AppMaster from '../containers/AppMaster'
import AppCommon from '../containers/AppCommon'

export default {
  component: Root,
  childRoutes: [{
    component: AppMaster,
    childRoutes: [{
      component: AppCommon,
      childRoutes: [
        require('./AppHome'),
        require('./BookDetail'),
      ]
    }]
  }]
}
