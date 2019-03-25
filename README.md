# qtalk_web_sdk

## 常用命令

1. 启动开发模式
  ```
  npm start
  ```
2. 在浏览器中预览网站 `http://localhost:5001`

3. 其他命令
  ```sh
  # 编译工程
  npm run build:prod

## 目录结构

```
.
├── /assets/                            # 静态资源，如图片、字体
├── /config/                            # webpack配置文件
│   ├── /packing.js                     # 和构建工具相关的配置
│   ├── /webpack.build.babel.js         # webpack编译环境配置文件
│   └── /webpack.serve:dist.js          # webpack预览编译后结果的配置文件
├── /mock/                              # 模拟数据
│   ├── /api/                           # API接口类型模拟数据
│   └── /pages/                         # 页面初始化类型模拟数据
├── /prd/                               # 项目编译输出目录
├── /src/                               # 项目源码目录
│   ├── /entries/                       # webpack打包入口js
│   ├── /profiles/                      # 类似maven的profiles，设置不同环境下的配置
│   └── /templates/                     # 后端模版，如jade、smarty
├── .babelrc                            # babel配置
├── .editorconfig                       # 代码编辑器配置
├── .eslintrc                           # eslint配置
├── package.json                          
└── README.md                   
```

### 接口
#### 初始化接口
- 用户信息： /api/domain/get_vcard_info
- 获取会话列表: /package/qtapi/getrbl.qunar ##
- 获取单人历史消息: /package/qtapi/getmsgs.qunar ##

- 群列表: /api/get_increment_mucs
- 获取群历史消息: /package/qtapi/getmucmsgs.qunar ##

- 获取置顶信息: /api/conf/get_person
- 设置置顶: /api/domain/get_muc_vcard

- 获取组织架构: /api/getdeps ##
- 获取用户个性签名: /api/get_user_profile
- 获取直属领导，员工编号: /ops/opsapp/api/info ##
- ... ... 
- 具体看entry.js 代码逻辑

#### 搜索接口
- 搜索结果 : /package/qtalkweb/s/qtalk/search.php   ability -> searchurl
- 用户状态 : /package/qtalkweb/api/domain/get_user_status

####聊天
- 表情：fileurl + /file/v1/emo/d/e/EmojiOne/bb/fixed 
- 音频资源：/zhuanti/20180423_qtalk_msg.mp3  -----本地assets文件夹



