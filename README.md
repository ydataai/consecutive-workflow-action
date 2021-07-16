# Workflow Consecutivizer

Wait for a previous workflow run to complete.
test

## Usage

```yaml
jobs:
  ready:
    runs-on: ubuntu-latest
    steps:
    - uses: mktcode/workflow-consecutivizer@v1
      with:
        token: ${{ secrets.GITHUB_TOKEN }}

  # your other jobs
  units:
    runs-on: ubuntu-latest
    needs: [ ready ]
    steps:
    # ...
```

See the [actions tab](https://github.com/actions/javascript-action/actions) for runs of this action! :rocket:
