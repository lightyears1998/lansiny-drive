import { Brush } from '../model/display/brush'
import { Rect } from '../model/sprite/rect'
import { assets } from '../config/assets'
import { ImageStatic } from '../model/sprite/image_static'
const getBrush = function () {
  const brush = new Brush({})

  // const rect = new Rect({ name: 'rect01', isAction: true })
  // rect.borderWidth = 5
  // brush.add({ sprite: rect })

  const image = new ImageStatic({ name: 'cat', assetPath: assets.image.testImage, width: 400, height: 400 })
  brush.add({ sprite: image })
  brush.load()
  return brush
}


export { getBrush }