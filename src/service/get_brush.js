const Brush = require('../model/display/brush')
const Rect = require('../model/sprite/rect')

module.exports = function () {
  const brush = new Brush({})

  const rect = new Rect({ name: 'rect01', isAction: true })
  rect.borderWidth = 5

  brush.add({ sprite: rect })
  return brush
}
