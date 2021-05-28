/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-05-25 10:45:14
 * @LastEditTime: 2021-05-25 10:45:59
 * @Description: Modify here please
 */
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('users', 'open_id', {
          type: Sequelize.STRING,
        }, { transaction: t }),
      ]);
    });
  },

  down: (queryInterface, Sequelize) => {
    console.log(Sequelize);
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('users', 'open_id', { transaction: t }),
      ]);
    });
  },
};
