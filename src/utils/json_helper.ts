const fse = require('fs-extra')

async function readJson (path) {
  try {
    return await fse.readJson(path)
  } catch (err) {
    console.log(err)
  }
}

async function writeJson (path, body) {
  try {
    await fse.writeJson(path, body)
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  readJson,
  writeJson
}

// async function a () {
//   const a = await readJson('src/public/store/questionnaire/q_388872900e58d70a829fe9256b3ac811.json')
//   console.log(a)
// }

// a()
