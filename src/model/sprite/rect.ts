

const Sprite = require('../../renderer/sprite')
const config = require('../../../config')

export class Rect extends Sprite {
  constructor({
    // 父类属性
    name = 'rect01',
    width = 25,
    height = 25,
    isAction = true,
    // 新属性
    fillStyle = 'rgba(255, 255, 255, 1)',
    borderStyle = 'rgba(120, 120, 120, 1)',
    borderWidth = 1
  }) {
    super({ group: 'rect', name, width, height, isAction })
    this.fillStyle = fillStyle
    this.borderStyle = borderStyle
    this.borderWidth = borderWidth
  }

  draw({ ctx }) {
    ctx.fillStyle = this.borderStyle
    ctx.fillRect(
      this.position.x,
      this.position.y,
      this.width + this.borderWidth * 2,
      this.height + this.borderWidth * 2
    )
    ctx.fillStyle = this.fillStyle
    ctx.fillRect(
      this.position.x + this.borderWidth,
      this.position.y + this.borderWidth,
      this.width,
      this.height
    )
  }

  action() {
    if (this.position.x < config.display.width - this.width - this.borderWidth * 2) {
      this.position.x += 1
    }

    if (this.position.y < config.display.height - this.height - this.borderWidth * 2) {
      this.position.y += 1
    }
  }
}
