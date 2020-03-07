'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  const { home, user, message } = controller
  
  /**
   * 页面引导
   */
  router.get('/', home.login)
  router.get('/message', home.message)

  /**
   * api 供ajax调用
   */

  // 用户api
  router.get('/api/user/list', user.index)
  router.post('/api/user/login', user.login)
  // 消息api
  router.get('/api/message/list', message.index)
  router.post('/api/message/add', message.add)
  router.post('/api/message/del', message.del)
}
