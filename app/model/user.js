/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-05-08 17:39:50
 * @LastEditTime: 2021-05-13 16:19:34
 * @motto: Still water run deep
 * @Description: Modify here please
 * @FilePath: \ayu-cms\app\model\user.js
 */
'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    age: INTEGER,
    phone: {
      type: STRING,
      allowNull: false,
      unique: true,
      comment: '手机号码，唯一',
    },
    created_at: DATE,
    updated_at: DATE,
  });

  return User;
};
