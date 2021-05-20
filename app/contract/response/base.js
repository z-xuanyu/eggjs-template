/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-05-14 10:11:48
 * @LastEditTime: 2021-05-14 10:11:59
 * @motto: Still water run deep
 * @Description: Modify here please
 * @FilePath: \ayu-cms\app\contract\response\base.js
 */
'use strict';

module.exports = {
  baseResponse: {
    result: { type: 'boolean', required: true },
    errorMessage: { type: 'string' },
  },
};
