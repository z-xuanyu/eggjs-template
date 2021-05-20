/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-05-18 11:02:18
 * @LastEditTime: 2021-05-18 11:11:30
 * @Description: Modify here please
 */
'use strict';

const Controller = require('egg').Controller;

/**
 * @controller 邮件服务
 */
class sendMailController extends Controller {

  /**
   * @summary 邮件发送
   * @description 邮件服务
   * @router post /sendMail
   * @response 200 baseResponse ok
   * @apikey 接口授权
   */

  async sendMail() {
    const { ctx } = this;
    const email = '969718197@qq.com'; // 接收者的邮箱
    const text = '测试';
    const subject = '测试邮件';
    // const text = '这是一封测试邮件';
    const html = '<h2>测试一下::</h2><a class="elem-a" href="https://baidu.com"><span class="content-elem-span">测试链接</span></a>';
    const has_send = await this.service.sendMail.sendMail(email, subject, text, html);
    has_send ? ctx.returnBody(200, '发送成功', null, true) : ctx.returnBody(1001, '发送失败', null, true);
  }
}

module.exports = sendMailController;
