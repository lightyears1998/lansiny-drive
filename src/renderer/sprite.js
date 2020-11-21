'use strict'
class Sprite {
  constructor({
    name = 'unnamed',
    group = 'unnamed',
    width = 64,
    height = 64,
    isVisible = true,
    isAction = false,
    isValid = true,
    position = { x: 0, y: 0 },
    speed = { x: 0, y: 0 },
    offset = { x: 0, y: 0 },
    rank = 0
  }) {
    this.name = name
    this.group = group
    this.width = width
    this.height = height
    this.isVisible = isVisible
    this.isAction = isAction
    this.isValid = isValid
    this.position = position
    this.speed = speed
    this.offset = offset
    this.rank = rank
  }

  draw({ ctx }) {}
  action() {}
}

module.exports = Sprite