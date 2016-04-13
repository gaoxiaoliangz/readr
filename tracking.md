# tracking




##bugs
- 移动端书籍详情页面，登录注册页面没有适配



## todo list
### 优化
- 定义异常处理规范
- 添加前后端数据验证
- API 添加权限控制模块
- 路由添加权限判断
- 移除无用代码
- server rendering markup 和实时渲染的不同
- 分离 polyfill(babel-polyfill)
- jade warning
- API 返回的 book content 比纯文本大了好几倍

### 功能
- 添加管理后台页面
- 添加用户管理
- 添加书籍管理

### 用户体验
- "在豆瓣查看" 和阅读按钮距离太近
- 页面添加加载图标
- addbook 添加完成后提示不自动消失，内容清除




## tracked
### v0.2.0
- 点开一本书返回到书籍列表，重新打开另一本，看到的内容是对的，但是滚动后加载的内容变为上本书的内容

### v0.2.1
- 未登录状态打开书籍无法看到内容
- 移动端滚动屏幕会一直显示加载图标

### v0.2.2
- 移除了 transform-es2015-modules-commonjs
- 服务端渲染添加开发和生成环境判断，以生成匹配的 markup
- development 模式默认禁用服务端渲染
- 移除了旧的参考文件
- 修复了写入 localStorage 异常导致页面无法显示的问题
