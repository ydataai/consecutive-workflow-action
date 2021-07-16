const core = require('@actions/core')
const github = require('@actions/github')
const check = require('./check')


// most @actions toolkit packages have async methods
async function run() {
  try {
    core.info(JSON.stringify(github, null, 2))
    await check()
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
