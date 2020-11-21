const Sprite = require('./src/renderer/sprite')
const Brush = require('./src/renderer/brush')

const brush = new Brush({ dataPath: '' })
const spriteList = [
  new Sprite({ name: 'sprite1', rank: 1 }),
  new Sprite({ name: 'sprite2', rank: 0 }),
  new Sprite({ name: 'sprite3', rank: 3 })
]
// 预期所有sprite都加入brush中，但只加入一个
spriteList.map(sprite => {
  brush.add({ sprite })
  return sprite
})

console.log(brush)
