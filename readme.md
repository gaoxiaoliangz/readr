线上版本 http://readrweb.com

# 规范

## 服务器支持的选项
nodemon bin/server
node bin/server

--noServerRendering
关闭服务端渲染，启用服务端路径匹配，如果组件内有错误会阻塞服务启动

--noServerRouting
关闭服务端路径匹配，此时服务端渲染也会关闭，组件内错误不会影响服务端，前端使用 hash routing

--hot
开启实时更新前端资源

## 服务器需要的几种模式
### fe:hot
前端，热重载

### fe
前端，无热重载，文件写入式（开发，生产）

### server:dev
服务端渲染调试（开发模式，开启服务端渲染，关闭热重载，响应文件修改）

### server:prod | npm start
服务端生产（生产模式，开启服务端渲染，关闭热重载，响应文件修改）

## 文件构建及监听
### build:css | chunks | node | dll
资源构建

### build:css.prod | chunks.prod
构建生产环境资源

### watch:css | chunks | node
资源监听

### watch:css.prod | chunks.prod
生产环境资源监听

## 文件拷贝、清理
### copy:assets
资源压缩/拷贝

### clean:all
清理 assets/built 和 bin

### clean:built
清理 assets/built

## 其他命令
### test
测试

### publish
发布

## 命名规范
获取 API 数据的函数以 fetch 开头
API 数据实体的标识和 options 分开传参，分别为 id, options
数据提交 API 的参数为 data

### api payload 保留字段名
options, data, id, response, error

未完待续 ...
