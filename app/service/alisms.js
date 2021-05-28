/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-05-20 17:00:20
 * @LastEditTime: 2021-05-20 17:21:21
 * @Description: Modify here please
 */

'use strict';
const Service = require('egg').Service;

class AlismsService extends Service {
  async sendCode() {

    const { phone } = this.ctx.request.body;
    // 2. 缓存中查询该手机号是否存在
    const sendCodePhone = await this.service.cache.get(`sendCode_${phone}`);
    if (sendCodePhone) this.ctx.errorHandle('您操作的太快了，验证码还未过期!', {}, 30001);

    // 3. 生成随机四位验证码
    const randomCode = this.ctx.random();
    // 调试环境 不请求阿里服务器
    if (!this.config.aliSMS.isopen) {
      await this._devCode(phone, randomCode);
    }

    // 4. 请求阿里云API发送验证码
    const ret = await this.service.alisms.sendSMS(phone, randomCode);

    if (ret.Code === 'OK') {
      // 5.发送成功写入redis缓存 60 秒过期
      this.service.cache.set(`sendCode_${phone}`, randomCode, this.config.aliSMS.expire);
      // 6.写入消息队列

      this.ctx.succHandle('发送验证码成功!');
    }
  }

  // 模拟发送短信验证码
  async _devCode(phone, randomCode) {
    this.service.cache.set(`sendCode_${phone}`, randomCode, this.config.aliSMS.expire);
    return randomCode;
  }
}

module.exports = AlismsService;
