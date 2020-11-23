'use strict'
import path = require('path')

const prefixPath = path.join(__dirname, '../../assets/')

const assets = {
  image: {
    testImage: 'image/cat.jpg'
  },
  audio: {},
  video: {}
}

export { assets, prefixPath }
