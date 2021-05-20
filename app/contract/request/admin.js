/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-05-14 09:57:07
 * @LastEditTime: 2021-05-17 10:37:39
 * @motto: Still water run deep
 * @Description: Modify here please
 * @FilePath: \ayu-cms\app\contract\request\admin.js
 */
'use strict';

module.exports = {
  createAdminRequest: {
    name: { type: 'string', required: true, description: '名称' },
    email: { type: 'string', required: true, example: '812006298@qq.com', format: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, description: '邮箱' },
    phone: { type: 'string', required: false, example: '15800021934', format: /^1[34578]\d{9}$/, description: '电话' },
    gender: { type: 'number', required: false, description: '性别' },
    password: { type: 'string', required: true, description: '电话号码' },
  },
  updateAdminRequest: {
    name: { type: 'string', required: true, description: '名称' },
    email: { type: 'string', required: true, example: '812006298@qq.com', format: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, description: '邮箱' },
    phone: { type: 'string', required: false, example: '15800021934', format: /^1[34578]\d{9}$/, description: '电话' },
    gender: { type: 'number', required: false, description: '性别' },
  },
  adminLoginDto: {
    email: { type: 'string', required: true, description: '邮箱' },
    password: { type: 'string', required: true, description: '密码' },
  },
};
