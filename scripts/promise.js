// const path = require('path')
// const filename = 'hoge.png'

// console.log(path.parse(filename).name) // hoge.fuga
// console.log(path.parse(filename).ext)  // .png

// function taskA() {
//     console.log("Task A");
//     throw new Error("throw Error @ Task A");
// }
// function taskB() {
//     console.log("Task B");// 呼ばれない
// }
// function onRejected(error) {
//     console.error(error.message);// => "throw Error @ Task A"
// }
// function finalTask() {
//     console.log("Final Task");
//     throw new Error("throw Error @ final task");
// }

// var promise = Promise.resolve();
// promise
//     .then(taskA)
//     .then(taskB)
//     .catch(onRejected)
//     .then(finalTask)
//     .catch(onRejected);

var promise1 = new Promise((resolve, reject) => {
    reject(1)
    // setTimeout(resolve, 100, 'hoge');
}).catch(err => console.log(err));

var promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'fuga');
});

var promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'piyo');
});

Promise.all([promise1, promise2, promise3]).then(function(values) {
    console.log(values);
}).catch(err => console.log(err));

// const envs =  { portfolio_env: 'dev',
//      storagebucket: 'dev-portfolio-6bfd1.appspot.com',
//      project_id: 'dev-portfolio-6bfd1',
//      messagingsenderid: '329454695763',
//      apikey: 'AIzaSyAdn9Kk-oAptAkpzLzLYA28X4n8IbaA5pw',
//      dev_apikey: 'dev-portfolio-6bfd1',
//      storage_bucket: 'dev-portfolio-6bfd1.appspot.com',
//      authdomain: 'dev-portfolio-6bfd1.firebaseapp.com',
//      messaging_sender_id: '329454695763',
//      basic_auth_username: 'portfolio',
//      projectid: 'dev-portfolio-6bfd1',
//      database_url: 'https://dev-portfolio-6bfd1.firebaseio.com',
//      appid: '1:329454695763:web:127e057d4fe75a78',
//      databaseurl: 'https://dev-portfolio-6bfd1.firebaseio.com',
//      basic_auth_password: 'NextStep0401',
//      app_id: '1:329454695763:web:127e057d4fe75a78' }

// Object.keys(envs).forEach(k => {
//   console.log({ key: k.toUpperCase(), value: envs[k] })
//   process.env[k.toUpperCase()] = envs[k]
//   console.log(process.env[k.toUpperCase()])
// })
