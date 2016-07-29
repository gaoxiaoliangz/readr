// import React from 'react'
// import { Router, Route, IndexRoute } from 'react-router'
// import NoMatch from '../containers/no-match'
// import Viewer from '../containers/viewer'
// import Signin from '../containers/signin'
// import Signup from '../containers/signup'
// import Profile from '../containers/profile'
// import BookShelf from '../containers/book-shelf'
// import Settings from '../containers/settings'
// import Archive from '../containers/archive'
// import Collection from '../containers/collection'
// import ArchivedCollection from '../containers/archived-collection'
import Root from './containers/root'
import AppMaster from './containers/app-master'
import AppCommon from './containers/app-common'
import ConsoleMaster from './containers/console-master'

// export default (
//   <Router>
//     <Route path="/" component={Root}>
//       <Route component={App}>
//         <IndexRoute component={Home} />
//       </Route>
//     </Route>
//   </Router>
// )

// export default {
//   component: 'div',
//   childRoutes: [{
//     path: '/',
//     component: Root,
//     childRoutes: [{
//       path: '/',
//       component: App,
//       childRoutes: [{
//         path: '/',
//         component: Home
//       }]
//     }]
//   }]
// }

export default {
  path: '/',
  component: Root,
  indexRoute: {
    getComponents(nextState, callback) {
      require.ensure([], function (require) {
        callback(null, (require('./containers/app-home') as any).default)
      })
    }
  },
  childRoutes: [
    {
      path: 'book/:id',
      getComponents(nextState, callback) {
        require.ensure([], function (require) {
          callback(null, (require('./containers/book-detail') as any).default)
        })
      }
    },
  ]
}
