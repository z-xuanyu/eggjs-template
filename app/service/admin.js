/* eslint-disable jsdoc/check-param-names */
/*
 * @Author: xuanyu
 * @Date: 2021-04-26 15:49:48
 * @LastEditTime: 2021-05-17 14:23:09
 * @LastEditors: xuanyu
 * @Description: In User Settings Edit
 * @FilePath: \ayu-cms\app\service\admin.js
 */
'use strict';
const Service = require('egg').Service;
const fs = require('fs');
const path = require('path');
class AdminService extends Service {

  /**
   * @description: 管理员列表
   * @param {*} pageNo 当前页面
   * @param {*} pageSize 页数量
   * @return {*} 返回：管理员列表数据
   */

  async list({ pageNo = 0, pageSize = 10 }) {
    return this.ctx.model.Admin.findAndCountAll({
      offset: pageNo,
      limit: pageSize,
      order: [[ 'created_at', 'desc' ], [ 'id', 'desc' ]],
    });
  }


  /**
   * @description: 新建管理員
   * @param {*} info 参数对象
   * @return {*} 返回:管理员信息
   */

  async create(info) {
    return await this.ctx.model.Admin.create(info);
  }


  /**
   * @description: 管理员头像上传
   * @param {*} origin 源目录
   * @param {*} stream 文件
   * @return {*}
   */

  async uploadavatar(origin, stream) {
    const writerStream = fs.createWriteStream(path.join(this.config.baseDir, `app/public/${stream.filename}`));
    stream.pipe(writerStream);
    return `${origin}/public/${stream.filename}`;
  }
}

module.exports = AdminService;

