/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-05-18 11:27:43
 * @LastEditTime: 2021-05-18 12:06:58
 * @Description: redis缓存服务
 */

'use strict';
const Service = require('egg').Service;

class CacheService extends Service {

  /**
   * @description: 设置 redis 缓存
   * @param { String } key key 键
   * @param {String | Object | array}} value 值
   * @param { Number  } expir expir 过期时间 单位秒
   * @return { String } 返回成功字符串OK
   */

  async set(key, value, expir = 0) {
    const { redis } = this.app;
    if (expir) return await redis.set(key, JSON.stringify(value));
    return await redis.set(key, JSON.stringify(value), 'EX', expir);
  }


  /**
   * @description: 获取redis 缓存
   * @param { String } key 键
   * @return { String | array | Object } 返回获取的数据
   */

  async get(key) {
    const { redis } = this.app;
    const result = await redis.get(key);
    return JSON.parse(result);
  }


  /**
   * @description: redis 自增
   * @param { String } key 键
   * @param { Number } number 自增的值
   * @return { Number } 返回递增值
   */

  async incr(key, number = 1) {
    const { redis } = this.app;
    if (number === 1) return await redis.incr(key);
    return await redis.incrby(key, number);
  }


  /**
   * @description: 查询长度
   * @param { String } key 键
   * @return { Number } 返回数据长度
   */

  async strlen(key) {
    const { redis } = this.app;
    return await redis.strlen(key);
  }
}

module.exports = CacheService;
