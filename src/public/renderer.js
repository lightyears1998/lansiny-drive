// index页面 渲染进程

const config = require('../../config')
const getScreen = require('../service')
// const { dialog } = require('electron').remote

function test({ canvas, ctx, FPS }) {}

// dom加载完成时执行
window.addEventListener('DOMContentLoaded', () => {
  // 设置画布
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  canvas.width = config.display.width
  canvas.height = config.display.height
  const FPS = config.display.FPS || 30

  // 绘画测试
  test({ canvas, ctx, FPS })

  const screen = getScreen({ canvas, ctx, FPS })
  let now
  let then = Date.now()
  const interval = 1000 / FPS
  let delta

  function render() {
    window.requestAnimationFrame(render)
    now = Date.now()
    delta = now - then
    if (delta > interval) {
      then = now - (delta % interval)
      screen.next()
    }
  }

  render()

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
