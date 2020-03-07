'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  const { home, user } = controller
  
  // 页面引导
  router.get('/', home.login)
  router.get('/message', home.message)

  // api 供ajax调用
  router.get('/api/user/list', user.index)
  router.post('/api/user/login', user.login)
}
