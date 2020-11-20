'use strict'
const path = require('path')

const display = {
  maxFPS: 250,
  minFPS: 8,
  FPS: 60,
  width: 1024,
  height: 768
}

const window = {
  main: {
    loadFile: path.join(__dirname, '..', 'src/public/index.html'),
    webPreferences: {
      preload: path.join(__dirname, '..', 'src/bin/preload.js'),
      contextIsolation: false,
      nodeIntegration: true,
      enableRemoteModule: true
    },
    width: display.width + 8,
    height: display.height + 70,
    resizable: false,
    show: false,
    backgroundColor: '#fff',
    center: true
  }
}

const config = {
  isDev: true,
  display,
  window
}
module.exports = config
