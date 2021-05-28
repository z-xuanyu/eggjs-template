/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-05-28 15:08:05
 * @LastEditTime: 2021-05-28 15:28:58
 * @Description: Modify here please
 */
'use strict';

module.exports = app => {
  const { INTEGER } = app.Sequelize;

  const AdminRole = app.model.define('admin_role', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    admin_id: {
      type: INTEGER },
  });
  AdminRole.associate = () => {
    app.model.AdminRole.belongsTo(app.model.Admin, { as: 'admin', foreignKey: 'admin_id', targetKey: 'id' });
  };
  return AdminRole;
};
