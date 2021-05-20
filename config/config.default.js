/*
 * @Author: xuanyu
 * @Date: 2021-04-21 09:53:20
 * @LastEditTime: 2021-05-18 10:34:15
 * @LastEditors: xuanyu
 * @Description: 默认的配置文件
 */
/* eslint valid-jsdoc: "off" */

'use strict';


/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1618969896330_4675';
  /**
   * egg-swagger-doc default config
   * @member Config#swagger-doc
   * @property {String} dirScanner - 插件扫描的文档路径
   * @property {String} basePath - api前置路由
   * @property {Object} apiInfo - 可参考Swagger文档中的Info
   * @property {Array[String]} apiInfo - 可参考Swagger文档中的Info
   * @property {Array[String]} schemes - 访问地址协议http或者https
   * @property {Array[String]} consumes - contentType的集合
   * @property {Array[String]} produces - contentType的集合
   * @property {Object} securityDefinitions - 安全验证，具体参考swagger官方文档
   * @property {Boolean} enableSecurity - 是否使用安全验证
   * @property {Boolean} routeMap - 是否自动生成route
   * @property {Boolean} enable - swagger-ui是否可以访问
   */
  config.swaggerdoc = {
    dirScanner: './app/controller',
    apiInfo: {
      title: 'YuApi接口文档',
      description: 'YuApi接口文档',
      version: '1.0.0',
    },
    schemes: [ 'http' ],
    enable: true,
    routerMap: true,
    securityDefinitions: {
      apikey: {
        type: 'apiKey',
        name: 'authorization',
        in: 'header',
      },
    },
    enableSecurity: true,
  };
  // jwt
  config.jwt = {
    secret: 'xuanyu',
    expiresIn: 60 * 60 * 2, // 2小时过期
  };
  // add your middleware config here
  config.middleware = [ 'auth', 'errorHandler' ];
  config.auth = {
    allowed: [ '/', '/admin/login', '/admin/register', '/swagger-ui.html', '/swagger-doc', '/swagger-doc.html', '/swagger-ui-bundle.js', '/swagger-ui-standalone-preset.js', '/favicon-16x16.png', '/favicon-32x32.png', '/swagger-ui.css' ],
  };
  // 配置与Mysql数据库的连接
  config.sequelize = {
    // 数据库信息配置
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'ayu_cms',
    username: 'root',
    password: '123456',
  };
  // 关闭csrf
  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
  };
  config.redis = {
    client: {
      port: 6379,
      host: '127.0.0.1',
      password: '',
      db: 0,
    },
  };
  // socket.io;
  config.io = {
    init: {},
    namespace: {
      '/': {
        connectionMiddleware: [ 'authIo' ],
        packetMiddleware: [],
      },
    },
    redis: {
      host: '127.0.0.1',
      port: 6379,
    },
  };
  // 配置上传文件白名单
  config.multipart = {
    fileExtensions: [ '.pdf', '.txt' ],
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  return {
    ...config,
    ...userConfig,
  };
};
