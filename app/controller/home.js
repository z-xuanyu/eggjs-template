/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-04-21 09:53:20
 * @LastEditTime: 2021-05-13 11:34:12
 * @motto: Still water run deep
 * @Description: 首页控制器
 * @FilePath: \ayu-cms\app\controller\home.js
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('home');
  }
}

module.exports = HomeController;
