function taskA(){
  throw new Error('Error');
  console.log('TaskA');
}

function taskB(){
  console.log('TaskB');
}

function onRejected(error){
  console.log("error = " + error)
}

var promise = Promise.resolve();
promise
  .then(taskA)
  .then(taskB)
  .catch(onRejectted);
