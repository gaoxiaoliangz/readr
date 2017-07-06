const menus = [
  {
    icon: 'book',
    displayName: '',
    path: '/console/books',
    subMenu: [
      {
        displayName: '书籍管理',
        path: '/console/books'
      },
      {
        displayName: '添加合集',
        path: '/console/collections/new'
      }
    ]
  },
  {
    icon: 'users',
    displayName: '',
    path: '/console/users',
    subMenu: [
      {
        displayName: '用户管理',
        path: '/console/users'
      }
    ]
  },
  {
    icon: 'doc',
    displayName: '',
    path: '/console/posts',
    subMenu: [
      {
        displayName: '添加页面',
        path: '/console/posts/new'
      },
      {
        displayName: '页面管理',
        path: '/console/posts'
      },
    ]
  }
]

export default menus
