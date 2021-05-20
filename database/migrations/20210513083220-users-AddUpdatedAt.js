/*
 * @Author: xuanyu
 * @Date: 2021-04-29 16:40:51
 * @LastEditTime: 2021-05-13 17:20:26
 * @LastEditors: xuanyu
 * @Description: 数据库迁移添加新字段
 * @FilePath: \ayu-cms\database\migrations\20210513083220-users-AddUpdatedAt.js
 */
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('users', 'phone', {
          type: Sequelize.STRING,
        }, { transaction: t }),
      ]);
    });
  },

  down: (queryInterface, Sequelize) => {
    console.log(Sequelize);
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('users', 'phone', { transaction: t }),
      ]);
    });
  },
};

