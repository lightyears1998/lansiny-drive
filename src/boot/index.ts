import { app, BrowserWindow, Menu, MenuItem } from 'electron'
import { config } from './config'

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  // eslint-disable-line global-require
  app.quit()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

function createWindow() {
  let mainWindow = new BrowserWindow(config.window.main)
  // mainWindow.loadFile(config.window.main.loadFile)

  // mainWindow.webContents.openDevTools()

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  const menus = [
    {
      label: '文件',
      submenu: [
        {
          label: '开发者工具',
          accelerator: 'F12',
          role: 'toggleDevTools'
        },
        {
          type: 'separator'
        },
        {
          label: '退出',
          accelerator: 'Esc',
          role: 'quit'
        }
      ]
    },
    {
      label: '帮助',
      submenu: [
        {
          label: '关于',
          accelerator: 'F11',
          role: 'about'
        }
      ]
    }
  ] as unknown as MenuItem[]

  const mainMenu = Menu.buildFromTemplate(menus)
  Menu.setApplicationMenu(mainMenu)
}

app.on('ready', createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
