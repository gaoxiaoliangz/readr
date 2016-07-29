import React from 'react'
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

import Root from '../containers/root'
import App from '../containers/App'

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


// export default {
//   path: '/',
//   component: App,
//   indexRoute: {
//     getComponents(nextState, callback) {
//       require.ensure([], function (require) {
//         const Home: any = require('../containers/home')
//         callback(null, Home.default)
//       })
//     }
//   },
//   childRoutes: [
//     {
//       path: 'book/:id',
//       getComponents(nextState, callback) {
//         require.ensure([], function (require) {
//           callback(null, (require('../containers/book-info') as any).default)
//         })
//       }
//     },
//   ]
// }


export default {
  path: '/',
  component: App,
  indexRoute: {
    getComponents(nextState, callback) {
      require.ensure([], function (require) {
        callback(null, (require('../containers/home') as any).default)
      })
    }
  },
  childRoutes: [
    {
      path: 'book/:id',
      getComponents(nextState, callback) {
        require.ensure([], function (require) {
          callback(null, (require('../containers/book-info') as any).default)
        })
      }
    },
  ]
}
