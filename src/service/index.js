const Screen = require('../renderer/screen')
const Brush = require('../renderer/brush')
const Rect = require('../model/sprite/rect')
function main(args) {
  const brush = new Brush({})

  // TODO：test 添加sprite
  const rect = new Rect({ name: 'rect01', isAction: true })
  rect.position.x = 100
  rect.position.y = 100
  rect.borderWidth = 5
  brush.add({ sprite: rect })

  // 启动动画循环
  const screen = new Screen({ ...args, brush })
  screen.run()
}

// main()
module.exports = main
