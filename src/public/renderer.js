// index页面 渲染进程

const config = require('../../config')
const getBrush = require('../service/get_brush')
// const { dialog } = require('electron').remote

function test({ canvas, FPS }) {}

// dom加载完成时执行
window.addEventListener('DOMContentLoaded', () => {
  // 设置画布
  const mainCanvas = document.getElementById('canvas')
  const bufferCanvas = document.createElement('canvas')

  mainCanvas.width = config.display.width
  mainCanvas.height = config.display.height
  bufferCanvas.width = config.display.width
  bufferCanvas.height = config.display.height

  let FPS = config.display.FPS || 60
  if (FPS < config.display.minFPS) {
    FPS = config.display.minFPS
  } else if (FPS > config.display.maxFPS) {
    FPS = config.display.maxFPS
  }

  const brush = getBrush()

  let now
  let then = Date.now()
  const interval = 1000 / FPS
  let delta

  function run() {
    window.requestAnimationFrame(run)
    now = Date.now()
    delta = now - then
    if (delta > interval) {
      then = now - (delta % interval)
      brush.render({ mainCanvas, bufferCanvas })
    }
  }

  test({ mainCanvas })
  run()

  // await dialog.showMessageBox({
  //   type: 'warning',
  //   title: '您确定么？',
  //   message: '您真的想要删除这条数据么？',
  //   buttons: ['OK', 'Cancel']
  // })
})

// 输出鼠标位置
window.addEventListener('mousemove', event => {
  document.getElementById(
    'location'
  ).innerHTML = `&nbsp; X ${event.clientX} &nbsp; Y ${event.clientY}`
})
