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

  // 下一帧
  next() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.brush.update()
    this.brush.paint({ ctx: this.ctx })
  }
}

module.exports = Screen
