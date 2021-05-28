/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-05-13 17:24:34
 * @LastEditTime: 2021-05-25 14:09:54
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


  /**
   * @description: 小程序登录接口
   * @param {string} code 小程序用户登录code
   * @return {string} 用户令牌token
   */

  async wxLogin(code) {
    // 小程序appId
    const appId = 'wx38e9ca4801b37264';
    // 小程序秘钥
    const appSecret = '6c19ad691115d8bc3d25753b3376c2ac';
    // 获取用户登录唯一标识openid
    const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`;
    const res = await this.ctx.curl(url, {
      dataType: 'json',
    });

    // 查询openid是否已经存在，，
    const opendId = res.opendId;
    const user = await this.ctx.model.User.findOne({
      open_id: opendId,
    });
    console.log(res);
    // 如果存在进行登录逻辑,生成用户token，否则创建一个新的用户信息
    if (user) {
      // 生成token
      const token = this.ctx.helper.generateToken(code);
      return token;
    }
    // 新建用户信息
    const newUser = await this.ctx.model.User.create({ open_id: opendId });
    // 返回新用户的token
    if (newUser) return this.ctx.helper.generateToken(code);
  }
}

module.exports = AccountService;
