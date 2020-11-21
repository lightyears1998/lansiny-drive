const Sprite = require('./sprite')
const config = require('../../../config')
// const fse = require('fs-extra')
class Brush {
  constructor({ spriteList = [] }) {
    this.spriteList = []
  }

  // 渲染
  render({ canvas }) {
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (const sprite of this.spriteList) {
      if (sprite && sprite.isValid && sprite.isAction) {
        sprite.action()
      }
    }
    for (const sprite of this.spriteList) {
      if (sprite && sprite.isValid && sprite.isVisible) {
        sprite.draw({ ctx })
      }
    }
  }

  // 添加sprite 会按照rank属性自动找位置插入
  add({ sprite = new Sprite() }) {
    if (this.spriteList.length === 0) {
      this.spriteList.push(sprite)
    } else {
      if (!config.isDev) {
        for (let i = 0; i < this.spriteList.length; i++) {
          if (this.spriteList[i].name === sprite.name) {
            throw new Error('添加sprite失败，已存在相同name的sprite')
          }
        }
      }
      if (sprite.rank < this.spriteList[0].rank) {
        this.spriteList.unshift(sprite)
        return
      }
      for (let i = 1; i < this.spriteList.length; i++) {
        if (sprite.rank < this.spriteList[i].rank) {
          this.spriteList.splice(i - 1, 0, sprite)
          return
        }
      }
      this.spriteList.push(sprite)
    }
    // this.spriteList.push(sprite)
    // this.spriteList.sort((a, b) => a.rank - b.rank)
  }

  // 清除无效的sprite
  clear() {
    this.spriteList = this.spriteList.filter(sprite => sprite.isValid)
  }
}

module.exports = Brush
