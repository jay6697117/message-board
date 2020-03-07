'use strict'

const Controller = require('egg').Controller

const USER_LIST = [
  {
    name: 'admin',
    password: 'admin'
  }, {
    name: '张三',
    password: '123456'
  }
]

class UserController extends Controller {
  async index() {
    const { ctx } = this

    ctx.body = USER_LIST
  }

  async login() {
    const { ctx } = this
    const { username, password } = ctx.request.body
    
    console.log(username, password)

    let isRight = false
    USER_LIST.forEach((item, idx) => {
      if (item.name === username && item.password === password) {
        isRight = true
      }
    })

    ctx.body = isRight
  }

  async logout() {
  }
}

module.exports = UserController