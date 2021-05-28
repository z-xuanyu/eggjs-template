/*
 * @Author: xuanyu
 * @Date: 2021-04-29 16:59:22
 * @LastEditTime: 2021-05-28 12:12:22
 * @LastEditors: xuanyu
 * @Description: In User Settings Edit
 * @FilePath: \ayu-cms\database\migrations\20210429085922-init-admins.js
 */
'use strict';
/*
 * 管理员实体
 *
 */
module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const {
      INTEGER,
      DATE,
      STRING,
      DECIMAL,
    } = Sequelize;
    await queryInterface.createTable('admins', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: STRING(30),
      phone: STRING(30),
      email: {
        type: STRING(30),
        allowNull: false,
        unique: true,
        comment: '邮箱，唯一',
      },
      password: STRING,
      gender: {
        type: DECIMAL,
        allowNull: false,
        defaultValue: 3,
        comment: '性别（1 男性，2 女性，3 保密）',
      },
      is_delete: INTEGER,
      created_at: DATE,
      updated_at: DATE,
    });
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('admins');
  },
};
