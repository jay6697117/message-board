'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  // 登录页
  async login() {
    const { ctx } = this
    await ctx.render('/login', { pageTitle: '登录' })
  }

  // 消息列表页
  async message() {
    const { ctx } = this
    await ctx.render('/message', { pageTitle: '首页' })
  }
}

module.exports = HomeController;
