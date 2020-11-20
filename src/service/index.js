const Screen = require('../renderer/screen')
const Brush = require('../renderer/brush')
function main(args) {
  // TODO: 读取存档
  const brush = new Brush({ dataPath: '' })

  // TODO：添加sprite

  // 启动动画循环
  const screen = new Screen({ ...args, brush })
  screen.run()
}

module.exports = main
