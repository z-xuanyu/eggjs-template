/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-05-08 17:41:12
 * @LastEditTime: 2021-05-17 11:58:39
 * @Description: 用户控制器
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
 * @controller 会员（用户）
 */
class UserController extends Controller {

  /**
   * @summary 获取会员列表
   * @description 会员列表
   * @router get /users
   * @request query number pageNo eg:1
   * @request query number pageSize eg:10
   * @response 200 baseResponse 成功
   * @apikey 接口授权
   */

  async index() {
    const ctx = this.ctx;
    const query = {
      limit: toInt(ctx.query.pageSize),
      offset: toInt(ctx.query.pageNo),
    };
    ctx.body = await ctx.service.user.list(query);
  }


  /**
   * @summary 获取会员信息
   * @description 会员信息
   * @router get /users/{id}
   * @request path number *id
   * @response 200 baseResponse 成功
   * @apikey 接口授权
   */

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.user.find(toInt(ctx.params.id));
  }


  /**
   * @summary 添加会员
   * @description 添加会员
   * @router post /users
   * @request body createUserDto *body
   * @response 200 baseResponse 成功
   * @apikey 接口授权
   */

  async create() {
    const ctx = this.ctx;
    ctx.validate(ctx.rule.createUserDto, ctx.request.body);
    const user = await ctx.service.user.create(ctx.request.body);
    ctx.returnBody(200, '成功', user, true);
  }


  /**
   * @summary 更新会员信息
   * @description 添加会员
   * @router put /users/{id}
   * @request path number *id
   * @request body updateUserDto *body
   * @response 200 baseResponse 成功
   * @apikey 接口授权
   */

  async update() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const body = ctx.request.body;
    ctx.validate(ctx.rule.updateUserDto, body); // 校验类型
    const user = await ctx.service.user.update({ id, updates: body });
    ctx.returnBody(200, '成功', user, true);
  }


  /**
   * @summary 删除会员
   * @description 删除会员
   * @router delete /users/{id}
   * @request path number *id
   * @response 200 baseResponse 成功
   * @apikey 接口授权
   */

  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    await ctx.service.user.del(id);
    ctx.status = 200;
  }
}

module.exports = UserController;
