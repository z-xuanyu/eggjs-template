/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-05-28 14:30:29
 * @LastEditTime: 2021-05-28 14:47:21
 * @Description: Modify here please
 */
'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 menu 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, BOOLEAN } = Sequelize;
    await queryInterface.createTable('menu', {
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
  },
  // 在执行数据库降级时调用的函数，删除 menu 表
  down: async (queryInterface, Sequelize) => {
    console.log(Sequelize);
    await queryInterface.dropTable('menu');
  },
};
