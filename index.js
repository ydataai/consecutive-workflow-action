const core = require('@actions/core')
const github = require('@actions/github')

function sleep(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

async function run() {
  try {
    const token = core.getInput('token')
    const workflow_id = core.getInput('workflow-id')
    const interval = core.getInput('interval')
    const octokit = github.getOctokit(token)

    const owner = github.context.payload.repository.owner.login
    const repo = github.context.payload.repository.name

    // fetch the latest workflow runs and find the last one before the currently running one
    const { data: runs } = await octokit.rest.actions.listWorkflowRuns({ owner, repo, workflow_id })
    let lastRun = runs.find(run => run.run_number === github.context.runNumber - 1)

    // re-check in intervals, as long as it has not completed
    while (lastRun.status !== 'completed') {
      core.info(`Last run (${lastRun.id}) not completed yet. Waiting for ${interval} seconds.`)
      await sleep(interval)
      let { data: lastRun } = octokit.rest.actions.getWorkflowRun({
        owner,
        repo,
        run_id: lastRun.id,
      })
    }
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
