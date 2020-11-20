// index页面 渲染进程

const config = require('../../config')
const main = require('../service')
// const { dialog } = require('electron').remote

function test({ canvas, ctx, FPS }) {

}

// 输出鼠标位置
window.addEventListener('mousemove', event => {
  document.getElementById(
    'location'
  ).innerHTML = `&nbsp; X ${event.clientX} &nbsp; Y ${event.clientY}`
})

// dom加载完成时执行
window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  canvas.width = config.display.width
  canvas.height = config.display.height
  test({
    canvas,
    ctx,
    FPS: config.display.FPS
  })

  main({
    canvas,
    ctx,
    FPS: config.display.FPS
  })
  // dialog.showMessageBox({
  //   type: 'warning',
  //   title: '您确定么？',
  //   message: '您真的想要删除这条数据么？',
  //   buttons: ['OK', 'Cancel']
  // }).then(result => {
  //   console.log('您的选择:', result.response)
  //   console.log(result)
  // }).catch(err => {
  //   console.log(err)
  // })
})
