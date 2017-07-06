/**
 * path is the link, on the menu. It's also used to match current selecting menu,
 * when match reg is not specified
 */

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
        path: '/console/posts',
        match: /(?!\/console\/posts\/new)\/console\/posts/
      },
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
  }
]

export default menus
