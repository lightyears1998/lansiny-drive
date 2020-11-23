
'use strict'

import moment = require('moment')
import { ProgressBar } from './progress_bar'

class Tool {
  static getHHmmssSSS(timestamp = 0) {
    const tempTime = moment.duration(timestamp)
    return `${tempTime.hours() < 10 ? '0' + tempTime.hours() : tempTime.hours()
      }:${tempTime.minutes() < 10 ? '0' + tempTime.minutes() : tempTime.minutes()
      }:${tempTime.seconds() < 10 ? '0' + tempTime.seconds() : tempTime.seconds()
      }.${tempTime.milliseconds()}`
  }

  static getHHmmss(timestamp = 0) {
    const tempTime = moment.duration(timestamp)
    return `${tempTime.hours() < 10 ? '0' + tempTime.hours() : tempTime.hours()
      }:${tempTime.minutes() < 10 ? '0' + tempTime.minutes() : tempTime.minutes()
      }:${tempTime.seconds() < 10 ? '0' + tempTime.seconds() : tempTime.seconds()
      }`
  }

  // 百分比计算
  static percentage(num = 0, total = 1, decimalPlaces = 2) {
    const x = Math.pow(10, decimalPlaces)
    return Math.round((num / total) * x * 100) / x
  }

  // 获取固定范围随机数
  static getRangeRandomNumber(min = 0, max = 10) {
    const range = max - min
    const random = Math.random()
    return min + Math.round(range * random)
  }

  // 加权随机数
  static getWeightRandomNumber(allocation = [{ value: 0, weight: 2 }, { value: 1, weight: 3 }]) {
    const values = []
    for (let i = 0; i < allocation.length; i++) {
      for (let j = 0; j < allocation[i].weight; j++) {
        values.push(allocation[i].value)
      }
    }
    const randomIndex = Math.floor(Math.random() * 100) % values.length
    return values[randomIndex]
  }

  // 数据生成进度条
  static async createDataBar({
    completed = 0,
    total = 100,
    dataPart = 10,
    startTime = Date.now(),
    callback = (completed, total, dataPart, startTime) => { }
  }) {
    const progressBar = new ProgressBar({ description: 'Progress', barLength: 35 })
    let tmp = 0
    let startTimeForPart = Date.now()
    let remainingTime = '--:--:--'
    for (let i = 0; i < total; i++) {
      if (completed <= total) {
        await callback(completed, total, dataPart, startTime)
        completed += 1
        tmp += 1
        if (tmp >= dataPart) {
          tmp = 0
          remainingTime = this.getHHmmss(((total - completed) / dataPart) * (Date.now() - startTimeForPart))
          startTimeForPart = Date.now()
        }
        progressBar.render(completed, total, [
          `已用时间: ${this.getHHmmss(Date.now() - startTime)} `,
          `剩余时间: ${remainingTime}`
        ])
      }
    }
  }
}

export { Tool }
