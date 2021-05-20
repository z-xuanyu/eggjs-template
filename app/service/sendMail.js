/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-05-18 10:55:37
 * @LastEditTime: 2021-05-18 11:01:50
 * @Description: 邮件服务
 */
'use strict';
const Service = require('egg').Service;
const nodemailer = require('nodemailer');
const user_email = '812006298@qq.com';
const auth_code = 'fttlcuxaqxeobdhg';
const transporter = nodemailer.createTransport({
  service: 'qq',
  secureConnection: true,
  port: 465,
  auth: {
    user: user_email, // 账号
    pass: auth_code, // 授权码

  },
});

class sendMailService extends Service {
  async sendMail(email, subject, text, html) {

    const mailOptions = {
      from: user_email, // 发送者,与上面的user一致
      to: email, // 接收者,可以同时发送多个,以逗号隔开
      subject, // 标题
      text, // 文本
      html,
    };

    try {
      await transporter.sendMail(mailOptions);
      return true;
    } catch (err) {
      return false;
    }
  }
}

module.exports = sendMailService;
