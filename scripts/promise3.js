var pry = require('pryjs');

function asyncFunction(){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      // resolve('Async Hello World');
      reject('Reject Aysnc Hello World');
    }, 16);
  });
}

asyncFunction().then(function(value){
  console.log(value); // -> 'Async Hello World';
}).catch(function(error){
  console.log(error); // -> 'Reject Aysnc Hello World'
}); 
