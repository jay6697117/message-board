'use strict'

const Controller = require('egg').Controller

const MESSAGE_LIST = require('../mock/message')

class MessageController extends Controller {
  async index() {
    const { ctx } = this

    ctx.body = MESSAGE_LIST
  }

  async add() {
    const { ctx } = this

    const message = ctx.request.body
    MESSAGE_LIST.push(message)

    ctx.body = MESSAGE_LIST
  }

  async del() {
    const { ctx } = this

    const { index } = ctx.request.body
    if (!index || !parseInt(index)) {
      ctx.body = '非数字类型'
      return
    }
    
    MESSAGE_LIST.splice(index, 1)
    ctx.body = {
      msg: '删除成功'
    }
  }
}

module.exports = MessageController