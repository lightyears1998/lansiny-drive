import fs from 'fs'

export function input(title = '') {
  process.stdout.write(title || (title += '\n'))
  process.stdin.pause()
  const buf = Buffer.allocUnsafe(10000)
  const response = fs.readSync(process.stdin.fd, buf, 0, 10000, 0)
  process.stdin.end()
  return buf.toString('utf8', 0, response).trim()
}

export function print() {
  return console.log(arguments)
}
