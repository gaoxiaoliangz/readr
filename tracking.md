# tracking



##bugs
- windows 下字体问题

## todo list
- react 动画
- 进度跳转

- remove promisedApi calls
- map scrollTop to state


### 添加 API
- 删除书籍
- 修改用户资料
- 重置密码
- 发送邮件
- 添加书单
- 获取书单
- 修改书单
- 收藏书籍
- 获取收藏
- 移除收藏


### 优化
- 添加前后端数据验证
- API 添加权限控制模块
- 路由添加权限判断
- 使用 hash 作为文件名

### 规范
- 添加单元测试

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
- 修复了点开一本书返回到书籍列表，重新打开另一本，看到的内容是对的，但是滚动后加载的内容变为上本书的内容的问题

### v0.2.1
- 修复未登录状态打开书籍无法看到内容
- 修复移动端滚动屏幕会一直显示加载图标

### v0.2.2
- 移除了 transform-es2015-modules-commonjs
- 服务端渲染添加开发和生产环境判断，以生成匹配的 markup
- development 模式默认禁用服务端渲染
- 移除了旧的参考文件
- 修复了写入 localStorage 异常导致页面无法显示的问题

### v0.3.0
- 使用 pipeline.js 来处理任务流
- 使用 nodemon 代替 supervisor，自动重启服务
- 修复了 jade 语法警告
- 解决了不同模式下服务端渲染和客户端渲染 dom 不一致的问题
- 重构了服务端 API
- 添加了 API 数据验证
- 添加了自定义错误类
- API 添加了语言国际化标准支持
- 补全了所有错误类
- 完善了错误信息提示
- 定义了异常处理规范
- i18n 优化，提供对应语言版本的具体信息
- 优化了多终端进度同步，现在会提示是否跳转到最新进度
- 移动端点击页面可显示 panel
- 移动端页面适配

### v0.3.2
- 从 chunk 分离了 polyfill(babel-polyfill, fetch)
- 移除了 babelrc: false 选项，定义了 hmr babel 环境
- 移除了 jQuery，使用 fetch，和定制的 jsonp
- 配置了 webpack，生产环境不输出 dev tools
