/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-05-08 17:40:22
 * @LastEditTime: 2021-05-13 17:42:06
 * @motto: Still water run deep
 * @Description: Modify here please
 * @FilePath: \ayu-cms\app\service\user.js
 */
'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async list({
    offset = 0,
    limit = 10,
  }) {
    return this.ctx.model.User.findAndCountAll({
      offset,
      limit,
      order: [
        [ 'created_at', 'desc' ],
        [ 'id', 'desc' ],
      ],
    });
  }
  /**
     * @description: 查找用户信息
     * @param {*} id
     * @return {*}
     */

  async find(id) {
    const user = await this.ctx.model.User.findByPk(id);
    if (!user) {
      this.ctx.throw(404, 'user not found');
    }
    return user;
  }

  /**
     * @description: 新增会员
     * @param {*} user 参数对象
     * @return {*}
     */

  async create(user) {
    return this.ctx.model.User.create(user);
  }


  /**
     * @description: 更新会员信息
     * @param {*} id 会员id
     * @param {*} updates 会员更新的信息参数对象
     * @return {*}
     */

  async update({
    id,
    updates,
  }) {
    const user = await this.ctx.model.User.findByPk(id);
    if (!user) {
      this.ctx.throw(404, 'user not found');
    }
    return user.update(updates);
  }

  /**
     * @description: 删除会员信息
     * @param {*} id 会员id
     * @return {*}
     */

  async del(id) {
    const user = await this.ctx.model.User.findByPk(id);
    if (!user) {
      this.ctx.throw(404, 'user not found');
    }
    return user.destroy();
  }
}

module.exports = UserService;
