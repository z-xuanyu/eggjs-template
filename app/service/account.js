/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-05-13 17:24:34
 * @LastEditTime: 2021-05-13 17:49:20
 * @motto: Still water run deep
 * @Description: Modify here please
 * @FilePath: \ayu-cms\app\service\account.js
 */
'use strict';
const Service = require('egg').Service;

class AccountService extends Service {


  /**
   * @description: 管理员注册
   * @param {*} info 参数对象
   * @return {*} 返回：注册的会员信息
   */

  async regAdmin(info) {
    return await this.ctx.model.Admin.create(info);
  }
  /**
   * @description: 管理员登录
   * @param {*} email 管理员邮箱
   * @param {*} password 管理员密码
   * @return {*} 返回：管理员信息和身份令牌
   */

  async adminLogin({ email, password }) {
    console.log(password, email);
    const user = await this.ctx.model.Admin.findOne({
      where: {
        email,
      },
    });
    if (!user) return '用户不存在！';
    // 验证密码
    const isValid = await this.ctx.helper.comparePwd(password, user.password);
    if (!isValid) return '密码错误！';

    // 生成token
    const token = this.ctx.helper.generateToken(email);
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token,
    };
  }
}

module.exports = AccountService;
