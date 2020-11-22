import { Brush } from '../model/display/brush'
import { Rect } from '../model/sprite/rect'

const getBrush = function () {
  const brush = new Brush({})

  const rect = new Rect({ name: 'rect01', isAction: true })
  rect.borderWidth = 5

  brush.add({ sprite: rect )
  return brush
}


export { getBrush }