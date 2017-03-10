const menus = [
  {
    component: 'books',
    displayName: '',
    path: '/console/books',
    subMenu: [
      {
        component: 'managebooks',
        displayName: '书籍管理',
        path: '/console/books'
      },
      // {
      //   component: 'addbook',
      //   displayName: '添加书籍',
      //   path: '/console/books/new'
      // },
      {
        component: 'addcollection',
        displayName: '添加合集',
        path: '/console/collections/new'
      }
    ]
  },
  {
    component: 'users',
    displayName: '',
    path: '/console/users',
    subMenu: [
      {
        component: 'manageusers',
        displayName: '用户管理',
        path: '/console/users'
      }
    ]
  },
  // {
  //   component: 'database',
  //   displayName: '',
  //   path: '/console/db',
  //   subMenu: []
  // },
  // {
  //   component: 'statistics',
  //   displayName: '',
  //   path: '/console/statistics',
  //   subMenu: []
  // }
]

export default menus
