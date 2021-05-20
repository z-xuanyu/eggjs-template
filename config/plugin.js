/*
 * @Author: xuanyu
 * @Date: 2021-04-21 09:53:20
 * @LastEditTime: 2021-05-17 14:11:24
 * @LastEditors: xuanyu
 * @Description: 插件配置
 * @FilePath: \ayu-cms\config\plugin.js
 */
'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  static: {
    enable: true,
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  redis: {
    enable: true,
    package: 'egg-redis',
  },
  io: {
    enable: true,
    package: 'egg-socket.io',
  },
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  swaggerdoc: {
    enable: true,
    package: 'egg-swagger-doc',
  },
};
