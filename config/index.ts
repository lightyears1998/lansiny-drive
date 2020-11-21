import path from 'path'

const display = {
  maxFPS: 250,
  minFPS: 8,
  FPS: 60,
  width: 1024,
  height: 768
}

const window = {
  main: {
    loadFile: path.join(__dirname, '../public/index.html'),
    webPreferences: {
      preload: path.join(__dirname, '../dist/bin/preload.js'),
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

export const config = {
  isDev: true,
  display,
  window
}
