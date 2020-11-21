'use strict'
import path = require('path')

const display = {
  maxFPS: 250,
  minFPS: 8,
  FPS: 60,
  width: 1024,
  height: 768
}

const mainWindow = {
  main: {
    loadFile: path.join(__dirname, '../../public/index.html'),
    webPreferences: {
      preload: path.join(__dirname, '../bin/preload.js'),
      contextIsolation: false,
      nodeIntegration: false,
      enableRemoteModule: false
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
  display: display,
  window: mainWindow
}
export { config }
