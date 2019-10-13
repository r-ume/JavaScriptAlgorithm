const taskA = new Promise(function(resolve, reject) {
  setTimeout(function() {
    console.log('taskA')
    resolve()
  }, 16)
})

const taskB = new Promise(function(resolve, reject) {
  setTimeout(function() {
    console.log('taskB')
    resolve()
  }, 10)
})

const before = new Date()
Promise.all([taskA, taskB]).then(function() {
  const after = new Date()
  const result = after.getTime() - before.getTime()
  console.log(result)
})

const taskC = new Promise(function(resolve, reject) {
  setTimeout(function() {
    console.log('taskC')
    resolve()
  }, 16)
})

const taskD = new Promise(function(resolve, reject) {
  setTimeout(function() {
    console.log('taskD')
    reject()
  }, 10)
})

const beforeCD = new Date()
Promise.all([taskC, taskD])
  .then(function() {
    const afterCD = new Date()
    const result = afterCD.getTime() - beforeCD.getTime()
    console.log(result)
  })
  .catch(function() {
    console.log('error')
  })
