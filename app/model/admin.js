/*
 * @Author: xuanyu
 * @Date: 2021-04-29 16:21:51
 * @LastEditTime: 2021-05-13 15:44:34
 * @LastEditors: xuanyu
 * @Description: 管理员模型定义
 * @FilePath: \ayu-cms\app\model\admin.js
 */
'use strict';
const moment = require('moment');
const bcrypt = require('bcryptjs');
module.exports = app => {
  const {
    STRING,
    INTEGER,
    DATE,
    DECIMAL,
  } = app.Sequelize;

  const Admin = app.model.define('admin', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: STRING(30),
    phone: STRING(30),
    email: {
      type: STRING(30),
      validate: {
        isEmail: {
          args: true,
          msg: '邮箱格式不正确',
        },
      },
      allowNull: false,
    },
    password: {
      type: STRING,
      // 密码自动加盐
      set(val) {
        const salt = bcrypt.genSaltSync(10);
        const pwd = bcrypt.hashSync(val, salt);
        // 传入2个参数，第一个是字段名称，第二个是加密字符串
        this.setDataValue('password', pwd);
      },
    },
    gender: {
      type: DECIMAL,
      allowNull: false,
      defaultValue: 3,
      comment: '性别（1 男性，2 女性，3 保密）',
    },
    is_delete: {
      type: INTEGER,
      defaultValue: 0,
    },
    created_at: {
      type: DATE,
      get() {
        return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
      },
    },
    updated_at: {
      type: DATE,
      get() {
        return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss');
      },
    },
  });

  return Admin;
};
