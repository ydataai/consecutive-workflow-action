const core = require('@actions/core')
const github = require('@actions/github')
const check = require('./check')


// most @actions toolkit packages have async methods
async function run() {
  try {
    const token = core.getInput('token')
    const workflowId = core.getInput('workflow-id')
    const octokit = github.getOctokit(token)
    
    console.log(
      github.context.payload.repository.owner.login,
      github.context.payload.repository.name,
      workflowId
    )
    const { data: runs } = await octokit.rest.actions.listWorkflowRuns({
      owner: github.context.payload.repository.owner.login,
      repo: github.context.payload.repository.name,
      workflowId,
    })

    core.info(JSON.stringify(runs, null, 2))

    await check()
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
