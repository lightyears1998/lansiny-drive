'use strict'
import path = require('path')

const prefix = path.join(__dirname, '../../assets/')

const assets = {
  image: {
    testImage: prefix + 'image/cat.jpg'
  },
  audio: {},
  video: {}
}

export { assets }
