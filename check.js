const check = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('done!'), 1000)
  })
}

module.exports = check
