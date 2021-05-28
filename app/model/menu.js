/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-05-28 15:11:02
 * @LastEditTime: 2021-05-28 15:12:52
 * @Description: Modify here please
 */
'use strict';

module.exports = app => {
  const { INTEGER, STRING, BOOLEAN } = app.Sequelize;

  const Menu = app.model.define('menu', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: STRING(30),
    icon: STRING(30),
    parent_id: {
      type: INTEGER,
      defaultValue: 0,
    },
    path: STRING,
    component: STRING,
    alwaysShow: {
      type: BOOLEAN,
      defaultValue: false,
    },
    hidden: {
      type: BOOLEAN,
      defaultValue: false,
    },
    activeMenu: STRING,
  });

  return Menu;
};
