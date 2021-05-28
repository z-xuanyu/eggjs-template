/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-05-28 14:09:19
 * @LastEditTime: 2021-05-28 14:20:32
 * @Description: Modify here please
 */
'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 roles 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('roles', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      role_name: STRING(30),
      created_at: DATE,
      updated_at: DATE,
    });
  },
  // 在执行数据库降级时调用的函数，删除 roles 表
  down: async (queryInterface, Sequelize) => {
    console.log(Sequelize);
    await queryInterface.dropTable('roles');
  },
};

