const result = (function(param1, param2) {
  return param1 + param2
})(1, 2)

console.log(result) //3が出力される。

const objectCounter = {
  //privateにしたいプロパティ
  count: 0,

  //加算メソッド
  increment: function() {
    this.count += 1
    console.log(this.count)
  },

  //減算メソッド
  decrement: function() {
    this.count -= 1
    console.log(this.count)
  },
}

const immediatelyInvokedCounter = (function() {
  //プライベートにしたいプロパティ
  let count = 0

  return {
    //加算メソッド
    increment: function() {
      count += 1
      console.log(count)
    },

    //減算メソッド
    decrement: function() {
      count -= 1
      console.log(count)
    },
  }
})()

objectCounter.increment() //1が出力される
objectCounter.increment() //2が出力される
objectCounter.decrement() //1が出力される

console.log(objectCounter.count)

immediatelyInvokedCounter.increment() //1が出力される
immediatelyInvokedCounter.increment() //2が出力される
immediatelyInvokedCounter.decrement() //1が出力される

console.log(immediatelyInvokedCounter.count) //※countプロパティを直接参照／書き換えが出来てしまう
