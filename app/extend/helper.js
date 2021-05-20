/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-05-11 15:22:57
 * @LastEditTime: 2021-05-18 10:32:09
 * @motto: Still water run deep
 * @Description: 封装函数
 * @FilePath: \ayu-cms\app\extend\helper.js
 */
'use strict';
// 引入加密插件
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
module.exports = {
  /**
     * 密码加密助手函数
     * @param {String} password 原始密码
     * @return {String} 返回加密后的密码
     */
  bcryptData(password) {
    // 生成盐
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  },
  /**
     * 解密助手函数
     * @param {*} password 未加密的密码
     * @param {*} user_password 加密的密码
     * @return Promise 两个密码比对，比对成功返回true 失败返回 false
     */

  async comparePwd(password, user_password) {
    return await bcrypt.compare(password, user_password);
  },

  /**
   * @description: 生成用token令牌
   * @param {*} data 需要生成的用户信息
   * @return {*} 返回：加密token令牌
   */

  generateToken(data) {
    return jwt.sign({
      data,
    }, this.config.jwt.secret, {
      expiresIn: this.config.jwt.expiresIn,
    });
  },

  /**
   * @description: 验证token
   * @param {*} token 用户令牌toekn
   * @return {*} 返回：令牌用户信息
   */

  verifyToken(token) {
    return jwt.verify(token, this.config.jwt.secret);
  },

  /**
   * @description: 推送信息
   * @param {*} action 时间
   * @param {*} payload 数据
   * @param {*} metadata 元信息
   */

  parseMsg(action, payload = {}, metadata = {}) {
    // 封装 meta 数据,添加当前时间轴
    const meta = Object.assign({}, {
      timestamp: Date.now(),
    }, metadata);
    // 格式化返回数据
    return {
      meta,
      data: {
        action,
        payload,
      },
    };
  },
};
