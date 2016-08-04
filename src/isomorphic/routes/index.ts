import Root from '../containers/Root'
import AppMaster from '../containers/AppMaster'
import AppCommon from '../containers/AppCommon'
import ConsoleMaster from '../containers/ConsoleMaster'

export default {
  component: Root,

  childRoutes: [{
    component: AppMaster,

    childRoutes: [{
      component: AppCommon,

      childRoutes: [
        require('./AppHome'),
        require('./Browse'),
        require('./BookDetail'),
        require('./Collections'),
        require('./CollectionDetail'),
        require('./Signin'),
        require('./Signup'),

        {
          path: 'user',

          childRoutes: [
            require('./Shelf'),
            require('./Preference'),
            require('./Profile'),
          ]
        },
        // require('./NoMatch'),
      ]
    }, {
      component: ConsoleMaster,

      path: 'console',

      childRoutes: [
        require('./ManageBooks'),
        require('./ManageUsers'),
        require('./AddBook'),
        require('./AddCollection'),
        require('./NoMatch'),
      ]
    }]
  }]
}
