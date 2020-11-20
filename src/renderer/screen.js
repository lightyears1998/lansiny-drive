'use strict'
const config = require('../../config')
const Brush = require('./brush')

class Screen {
  constructor({ canvas, ctx, FPS = 60, brush = new Brush() }) {
    this.canvas = canvas
    this.ctx = ctx
    this.brush = brush
    if (FPS > config.display.maxFPS) {
      this.FPS = config.display.maxFPS
    } else if (FPS < config.display.minFPS) {
      this.FPS = config.display.minFPS
    } else {
      this.FPS = FPS
    }
  }

  // TODO：待优化 动画循环
  run() {
    setInterval(() => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.brush.update()
      this.brush.render({ ctx: this.ctx })
    }, 1000 / this.FPS)
  }
}

module.exports = Screen
