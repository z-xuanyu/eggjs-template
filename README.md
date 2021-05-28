<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-04-21 09:53:20
 * @LastEditTime: 2021-05-25 10:54:05
 * @Description: Modify here please
-->

# 文档说明：
### 技术栈：
- Eggjs
- Mysql
- Node
- JavaSript
- Sequelize


### 数据库迁移工具 -- Sequelize
- 初始化一个新的表
```bash
npx sequelize migration:generate --name=init-users
```
执行完后会在 database/migrations 目录下生成一个 migration 文件(${timestamp}-init-users.js)，我们修改它来处理初始化 users 表：

```bash
'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
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
  down: async queryInterface => {
    await queryInterface.dropTable('users');
  },
};
```

- 执行 migrate 进行数据库变更
  ```bash
    # 升级数据库
    npx sequelize db:migrate
    # 如果有问题需要回滚，可以通过 `db:migrate:undo` 回退一个变更
    # npx sequelize db:migrate:undo
    # 可以通过 `db:migrate:undo:all` 回退到初始状态
    # npx sequelize db:migrate:undo:all
  ```

#### 表添加新的字段
- 先使用sequelize-cli生成一个迁移文件更新的文件:例如
```bash
npx sequelize migration:generate --name=users-add-password-update
```
- 把生成的文件修改以下示例：
```bash
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('users', 'password', {
          type: Sequelize.STRING,
        }, { transaction: t }),
      ]);
    });
  },

  down: (queryInterface, Sequelize) => {
    console.log(Sequelize);
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('users', 'password', { transaction: t }),
      ]);
    });
  },
};
```
  - 然后实行迁移更新
  ```bash
  npx sequelize db:migrate
  ```
### 开发

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```