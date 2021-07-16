const check = require('./check')

test('wait 500 ms', async () => {
  const start = new Date()
  await check()
  const end = new Date()
  var delta = Math.abs(end - start)
  expect(delta).toBeGreaterThanOrEqual(1000)
})
