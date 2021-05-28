/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-05-28 12:21:05
 * @LastEditTime: 2021-05-28 15:04:34
 * @Description: Modify here please
 */
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('admins', 'avatar', {
          type: Sequelize.STRING,
        }, { transaction: t }),
        queryInterface.addColumn('admins', 'login_time', {
          type: Sequelize.DATE,
        }, { transaction: t }),
        queryInterface.addColumn('admins', 'login_count', {
          type: Sequelize.STRING,
          defaultValue: 0,
        }, { transaction: t }),
      ]);
    });
  },

  down: (queryInterface, Sequelize) => {
    console.log(Sequelize);
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('admins', 'avatar', { transaction: t }),
        queryInterface.removeColumn('admins', 'login_time', { transaction: t }),
        queryInterface.removeColumn('admins', 'login_count', { transaction: t }),
      ]);
    });
  },
};
