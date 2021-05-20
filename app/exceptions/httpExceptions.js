/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-05-13 15:02:54
 * @LastEditTime: 2021-05-13 15:03:28
 * @motto: Still water run deep
 * @Description: Modify here please
 * @FilePath: \ayu-cms\app\exceptions\httpExceptions.js
 */
'use strict';
class HttpExceptions extends Error {
  constructor(msg = '服务器异常', code = 1, httpCode = 400) {
    super();
    this.code = code;
    this.msg = msg;
    this.httpCode = httpCode;
  }
}

module.exports = { HttpExceptions };
