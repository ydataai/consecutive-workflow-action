# Consecutive Workflow Action

Make workflow runs run consecutively.

Create a comment [here](https://github.com/mktcode/consecutive-workflow-action/issues/5) and delete it immediately and then go to the [Actions tab](https://github.com/mktcode/consecutive-workflow-action/actions) to see how the second workflow run waits for the previous one.

![image](https://user-images.githubusercontent.com/6792578/125954347-83441667-a897-4e1e-85db-9b971b4201d1.png)

## Usage

```yaml
jobs:
  ready:
    runs-on: ubuntu-latest
    steps:
    - uses: mktcode/consecutive-workflow-action@v1
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
