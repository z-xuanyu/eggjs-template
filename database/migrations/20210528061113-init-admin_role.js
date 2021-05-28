/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-05-28 14:11:13
 * @LastEditTime: 2021-05-28 15:24:49
 * @Description: Modify here please
 */
'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 admin_role 中间关系表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER } = Sequelize;
    await queryInterface.createTable('admin_role', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      admin_id: {
        type: INTEGER,
      },
    });
  },
  // 在执行数据库降级时调用的函数，删除 admin_role 中间关系表
  down: async queryInterface => {
    await queryInterface.dropTable('admin_role');
  },
};

