function task(value, ms) {
  console.log(`${value} called`)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value)
      console.log(`${value} fullfilled`)
    }, ms)
  })
}

function taskA() {
  return task('A', 3000)
}
function taskB() {
  return task('B', 2000)
}
function taskC() {
  return task('C', 1000)
}

Promise.all([taskA(), taskB(), taskC()])
  .then(values => {
    console.log(values)
    console.info('all fullfilled')
  })
  .catch(error => {
    console.error(error)
  })
