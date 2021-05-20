/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-04-26 15:49:53
 * @LastEditTime: 2021-05-17 15:53:19
 * @motto: Still water run deep
 * @Description: 管理员控制器
 * @FilePath: \ayu-cms\app\controller\admin.js
 */

'use strict';
const Controller = require('egg').Controller;

// 转换为int
function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}
/**
 * @controller 管理员
 */
class AdminController extends Controller {

  /**
   * @summary 获取管理员列表
   * @description 管理员列表
   * @router get /admins
   * @request query number pageNo eg:1
   * @request query number pageSize eg:10
   * @response 200 baseResponse ok
   * @apikey 接口授权
   */

  async index() {
    const ctx = this.ctx;
    const query = {
      limit: toInt(ctx.query.pageSize),
      offset: toInt(ctx.query.pageNo),
    };
    const info = await ctx.service.admin.list(query);
    ctx.returnBody(200, '成功', info, true);
  }

  /**
   * @summary 添加管理员
   * @description 添加管理员
   * @router post /admins
   * @request body createAdminRequest *body
   * @response 200 baseResponse ok
   * @apikey 接口授权
   */

  async create() {
    const { ctx } = this;
    ctx.validate(ctx.rule.createAdminRequest, ctx.request.body); // 校验
    const info = await ctx.service.admin.create(ctx.request.body);
    ctx.returnBody(200, '成功', info, true);
  }

  /**
   * @summary 管理员头像上传
   * @description 头像上传
   * @router post /admins/uploadAvtart
   * @request formData number id 用户ID
   * @request formData file *file
   * @response 200 baseResponse ok
   * @apikey 接口授权
   */

  async uploadAvtart() {
    const { ctx, service } = this;
    const stream = await ctx.getFileStream();
    const origin = ctx.origin;
    const info = await service.admin.uploadavatar(origin, stream);
    ctx.returnBody(200, '成功', info, true);
  }
}

module.exports = AdminController;
