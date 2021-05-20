/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-05-17 11:35:16
 * @LastEditTime: 2021-05-17 11:59:18
 * @Description: 会员dto
 */
'use strict';
module.exports = {
  createUserDto: {
    name: { type: 'string', required: true, description: '名称' },
    age: { type: 'number', required: true, description: '年龄' },
    phone: { type: 'string', required: true, description: '手机号码' },
  },
  updateUserDto: {
    name: { type: 'string', required: true, description: '名称' },
    age: { type: 'number', required: true, description: '年龄' },
    phone: { type: 'string', required: true, description: '手机号码' },
  },
};
