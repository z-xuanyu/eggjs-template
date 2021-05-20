/*
 * @Author: xuanyu
 * @Date: 2021-04-29 16:40:51
 * @LastEditTime: 2021-05-13 16:11:56
 * @LastEditors: xuanyu
 * @Description: In User Settings Edit
 * @FilePath: \ayu-cms\database\migrations\20210429084051-init-users.js
 */
'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('users', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(30),
      age: INTEGER,
      created_at: DATE,
      updated_at: DATE,
    });
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    console.log(Sequelize);
    await queryInterface.dropTable('users');
  },
};
