const menus = [
  {
    component: 'books',
    displayName: '',
    path: 'console/managebooks',
    subMenu: [
      {
        component: 'managebooks',
        displayName: 'Manage Books',
        path: 'console'
      },
      {
        component: 'addbook',
        displayName: 'Add Book',
        path: 'console/addbook'
      },
      {
        component: 'addcollection',
        displayName: 'Add Collection',
        path: 'console/collection/new'
      }
    ]
  },
  {
    component: 'users',
    displayName: '',
    path: 'console/manageusers',
    subMenu: [
      {
        component: 'manageusers',
        displayName: 'Manage Users',
        path: 'console/manageusers'
      }
    ]
  },
  {
    component: 'database',
    displayName: '',
    path: 'console/managebooks',
    subMenu: []
  },
  {
    component: 'statistics',
    displayName: '',
    path: 'console/managebooks',
    subMenu: []
  }
]

export default menus
