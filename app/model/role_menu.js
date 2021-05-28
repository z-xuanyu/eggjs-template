/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-05-28 15:13:40
 * @LastEditTime: 2021-05-28 15:36:46
 * @Description: Modify here please
 */
'use strict';

module.exports = app => {
  const { INTEGER } = app.Sequelize;

  const RoleMenu = app.model.define('role_menu', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    role_id: {
      type: INTEGER,
    },
    menu_id: {
      type: INTEGER,
    },
  });
  RoleMenu.associate = () => {
    app.model.RoleMenu.belongsTo(app.model.Role, { as: 'role', foreignKey: 'role_id', targetKey: 'id' });
    app.model.RoleMenu.belongsTo(app.model.Menu, { as: 'menu', foreignKey: 'menu_id', targetKey: 'id' });
  };
  return RoleMenu;
};
