var taskA = new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log('taskA');
    resolve();
  }, 16);
}

var taskB = new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log('taskB');
    resolve();
  }, 10);
})

var before = new Date();
Promise.all([taskA, taskB]).then(function () {
  var after = new Date();
  var result = after.getTime() - before.getTime();
  console.log(result);
});

var taskC = new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log('taskC');
    resolve();
  }, 16);
});

var taskD = new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log('taskD');
    reject();
  }, 10);
});

var beforeCD = new Date();
Promise.all([taskC, taskD]).then(function(){
  var afterCD = new Date();
  var result = afterCD.getTime() - beforeCD.getTime();
  console.log(result);
}).catch(function(){
  console.log('error');
});
