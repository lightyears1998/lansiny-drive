const Screen = require('../renderer/screen')
const Brush = require('../renderer/brush')
const Rect = require('../model/sprite/rect')

module.exports = function (args) {
  const brush = new Brush({})

  // TODO：test 添加sprite
  const rect = new Rect({ name: 'rect01', isAction: true })
  rect.borderWidth = 5
  brush.add({ sprite: rect })

  return new Screen({ ...args, brush })
}
