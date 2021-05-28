/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-05-28 15:06:34
 * @LastEditTime: 2021-05-28 15:07:40
 * @Description: Modify here please
 */
'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Role = app.model.define('Role', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    role_name: STRING(30),
    created_at: DATE,
    updated_at: DATE,
  });

  return Role;
};

