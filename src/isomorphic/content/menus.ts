const menus = [
  {
    component: 'books',
    displayName: '',
    path: '/console/books',
    subMenu: [
      {
        component: 'managebooks',
        displayName: 'Manage Books',
        path: '/console/books'
      },
      {
        component: 'addbook',
        displayName: 'Add Book',
        path: '/console/books/new'
      },
      {
        component: 'addcollection',
        displayName: 'Add Collection',
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
        displayName: 'Manage Users',
        path: '/console/users'
      }
    ]
  },
  {
    component: 'database',
    displayName: '',
    path: '/console/db',
    subMenu: []
  },
  {
    component: 'statistics',
    displayName: '',
    path: '/console/statistics',
    subMenu: []
  }
]

export default menus
