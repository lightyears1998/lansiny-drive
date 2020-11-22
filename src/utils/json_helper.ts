import fse = require('fs-extra')

async function readJson(path: any) {
  try {
    return await fse.readJson(path)
  } catch (err) {
    console.log(err)
  }
}

async function writeJson(path: any, body: any) {
  try {
    await fse.writeJson(path, body)
  } catch (err) {
    console.log(err)
  }
}

export {
  readJson,
  writeJson
}

// async function a () {
//   const a = await readJson('src/public/store/questionnaire/q_388872900e58d70a829fe9256b3ac811.json')
//   console.log(a)
// }

// a()
