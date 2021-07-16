# Consecutive Workflow Action

Make workflow runs run consecutively.

Create a comment [here](https://github.com/mktcode/consecutive-workflow-action/issues/5) and delete it immediately and then go to the [Actions tab](https://github.com/mktcode/consecutive-workflow-action/actions) to see how the second workflow run waits for the previous one.

![image](https://user-images.githubusercontent.com/6792578/125954347-83441667-a897-4e1e-85db-9b971b4201d1.png)

## Usage

```yaml
jobs:
  consecutiveness:
    runs-on: ubuntu-latest
    steps:
    - uses: mktcode/consecutive-workflow-action@v1
      with:
        token: ${{ secrets.GITHUB_TOKEN }}

  # your other jobs
  something:
    runs-on: ubuntu-latest
    needs: [ consecutiveness ]
    steps:
    # ...
```

# Alternatives

I also found these actions, which might better suit your needs:

- https://github.com/lewagon/wait-on-check-action
- https://github.com/fountainhead/action-wait-for-check

Their purpose is slightly different. You can wait for certain checks to pass and therefore you can specify a certain ref and you can wait for runs of different workflows.

**My action does only one thing: It forces runs of the same workflow to run in consecutive order.**

I needed this because I let my workflows push to the repo a lot, which fails when one run pushes in between checkout and push in another run.