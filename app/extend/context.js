/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-05-11 18:15:58
 * @LastEditTime: 2021-05-13 14:38:10
 * @motto: Still water run deep
 * @Description: Modify here please
 * @FilePath: \ayu-cms\app\extend\context.js
 */
'use strict';
module.exports = {
  /**
   * 返回客户端内容
   * @param status // 返回状态
   * @param message // 返回内容
   * @param data // 返回内容
   */

  returnBody(status = 10001, message = 'ok', data = {}, success = false) {
    this.status = status;
    this.body = {
      code: status,
      data,
      message,
      success,
    };
  },
};
