function taskA() {
  throw new Error('Error')
}

function taskB() {
  console.log('TaskB')
}

function onRejected(error) {
  console.log('error = ' + error)
}

const promise = Promise.resolve()
promise
  .then(taskA)
  .then(taskB)
  .catch(onRejected)
