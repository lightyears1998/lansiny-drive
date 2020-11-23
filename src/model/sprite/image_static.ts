'use strict'

import { Sprite } from '../display/sprite'

class ImageStatic extends Sprite {
  constructor({
    name = 'image01',
    assetPath = ''
  }) {
    super({ group: 'image', name, assetPath })
  }

  draw({ ctx }) {
    if (!this.assetPath) {
      ctx.fillStyle = '#000'
      ctx.fillRect(
        this.position.x,
        this.position.y,
        this.width + 2,
        this.height + 2
      )
      ctx.fillStyle = '#fff'
      ctx.fillRect(
        this.position.x + 1,
        this.position.y + 1,
        this.width,
        this.height
      )
    } else {
      const args = [
        this.image,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      ]
      ctx.drawImage(...args)
    }
  }
}

export { ImageStatic }
