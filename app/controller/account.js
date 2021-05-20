/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-05-13 17:23:58
 * @LastEditTime: 2021-05-17 14:49:31
 * @motto: Still water run deep
 * @Description: Modify here please
 * @FilePath: \ayu-cms\app\controller\account.js
 */
'use strict';
const Controller = require('egg').Controller;
/**
 * @controller 注册登录
 */
class AccountController extends Controller {

  /**
   * @summary 管理员注册
   * @description 创建管理账号
   * @router post /admin/register
   * @request body createAdminRequest *body
   * @response 200 baseResponse 创建成功
   */

  async regAdmin() {
    const { ctx } = this;
    ctx.validate(ctx.rule.createAdminRequest, ctx.request.body);
    const info = await ctx.service.account.regAdmin(ctx.request.body);
    ctx.returnBody(200, '成功', info, true);
  }
  /**
   * @summary 管理员登录
   * @description 创建管理账号
   * @router post /admin/login
   * @request body adminLoginDto *body
   * @response 200 baseResponse 创建成功
   */

  async adminLogin() {
    const {
      ctx,
    } = this;
    ctx.validate(ctx.rule.adminLoginDto, ctx.request.body);
    const user = await ctx.service.account.adminLogin(ctx.request.body);
    ctx.returnBody(200, '成功', user, true);
  }
}

module.exports = AccountController;
