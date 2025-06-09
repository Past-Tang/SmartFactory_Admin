# 若依权限管理系统(智工慧厂前端)

## 项目简介

本项目是基于uni-app框架开发的权限管理系统，支持多端适配。系统提供完整的用户权限管理功能，包括用户管理、通知公告等模块，适用于需要权限控制的各类应用场景。

## 技术栈

- 前端框架：Vue.js 2.x
- 多端开发框架：uni-app
- UI组件库：uView UI
- 状态管理：Vuex
- 路由管理：自定义路由

## 功能模块

- **用户认证**：登录、注销
- **首页**：系统概览
- **应用管理**：
  - 用户管理
  - 通知公告
- **数据报表**：数据可视化展示
- **个人中心**：个人资料、操作日志

## 安装与运行

### 环境要求

- Node.js
- HBuilderX（推荐）

### 安装依赖

```bash
npm install
```

### 开发环境运行

```bash
npm run dev:h5        # H5端开发
npm run dev:mp-weixin # 微信小程序开发
# 其他平台类似
```

### 生产环境构建

```bash
npm run build:h5        # H5端构建
npm run build:mp-weixin # 微信小程序构建
# 其他平台类似
```

## 项目结构

```
├── api                 # 接口请求
├── components          # 公共组件
├── config              # 配置文件
├── pages               # 页面文件
│   ├── center          # 个人中心相关页面
│   ├── index           # 首页相关
│   ├── login           # 登录相关
│   ├── work            # 应用相关页面
│   └── item            # 数据报表相关
├── router              # 路由配置
├── static              # 静态资源
│   ├── img             # 图片资源
│   └── style.scss      # 全局样式
├── store               # Vuex状态管理
├── uni_modules         # uni-app模块
│   └── uview-ui        # uView UI组件库
├── utils               # 工具函数
├── App.vue             # 应用入口组件
├── main.js             # 应用入口JS
├── manifest.json       # 应用配置
├── pages.json          # 页面配置
└── uni.scss            # 全局样式变量
```

## 多端支持

- H5
- 微信小程序
- 支付宝小程序
- 百度小程序
- 头条小程序
- App (Android/iOS)

## 注意事项

- H5端开发时，相关配置在vue.config.js中调整
- 小程序开发需要在manifest.json中配置对应的AppID 