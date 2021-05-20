/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2021-05-11 17:51:42
 * @LastEditTime: 2021-05-13 11:20:19
 * @motto: Still water run deep
 * @Description: 授权中间件
 * @FilePath: \ayu-cms\app\middleware\auth.js
 */
'use strict';
module.exports = options => {
  return async (ctx, next) => {
    // 排除不需要验证 token 的路由
    if (options.allowed.indexOf(ctx.request.url) > -1) return await next(options);
    // 获取 header 头token
    const { authorization = '' } = ctx.header;
    if (!authorization) return ctx.returnBody(401, '抱歉！你没有权限访问接口！请联系管理员！');
    const token = authorization.replace('Bearer ', '');
    // 校验token
    try {
      ctx.helper.verifyToken(token);
    } catch (err) {
      if (err.name === 'TokenExpiredError') return ctx.returnBody(401, '您的token 已过期! 请重新获取令牌');
      if (err) return ctx.returnBody(401, '您的Token 令牌不合法!');
    }
    // 继续执行
    await next(options);
  };
};
