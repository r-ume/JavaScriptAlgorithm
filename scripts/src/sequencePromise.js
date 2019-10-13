function sequenceTasks(tasks) {
  function recordValue(results, value) {
    results.push(value)
    return results
  }
  const pushValue = recordValue.bind(null, [])
  return tasks.reduce(function(promise, task) {
    return promise.then(task).then(pushValue)
  }, Promise.resolve())
}

const promises = {
  doTaskA: function() {
    return taskA().then()
  },
  doTaskB: function() {
    return taskB('taskB death').then()
  },
}

function taskA() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('taskA')
      resolve('taskA death')
    }, 16)
  })
}

function taskB(value) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log(value)
      console.log('taskB')
      resolve('taskB death')
    }, 1)
  })
}

function main() {
  return sequenceTasks([promises.doTaskA, promises.doTaskB])
}

main()
  .then(function(value) {
    console.log('then')
    console.log(value)
    // taskAもしくはtaskBでエラーの場合に呼び出される
  })
  .catch(function(error) {
    console.log(error)
  })
