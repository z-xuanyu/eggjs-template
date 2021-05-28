/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-04-21 09:53:20
 * @LastEditTime: 2021-05-25 15:14:13
 * @motto: Still water run deep
 * @Description: 路由管理
 * @FilePath: \ayu-cms\app\router.js
 */

'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io } = app;
  router.get('/', controller.home.index); // 首页

  /**
   * 后台管理站接口
   * 接口前缀：/api/v1/
   */
  router.resources('admins', '/api/v1/admins', controller.admin); // 管理员管理
  router.post('/admin/login', controller.account.adminLogin); // 管理员登录
  router.post('/admin/register', controller.account.regAdmin); // 管理员注册


  /**
   * 前台接口接口
   * 接口前缀：/api/v2/
   */
  router.resources('users', '/api/v2/users', controller.user);


  /**
   * 小程序接口
   */
  router.post('/wx/login', controller.account.wxLogin);


  // socket.io
  io.of('/').route('exchange', io.controller.nsp.exchange);
};
