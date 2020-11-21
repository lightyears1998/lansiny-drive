"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const path_1 = __importDefault(require("path"));
const display = {
    maxFPS: 250,
    minFPS: 8,
    FPS: 60,
    width: 1024,
    height: 768
};
const window = {
    main: {
        loadFile: path_1.default.join(__dirname, '../public/index.html'),
        webPreferences: {
            preload: path_1.default.join(__dirname, '../dist/bin/preload.js'),
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
};
exports.config = {
    isDev: true,
    display,
    window
};
