function func() {
  const name = 'taro'
  function greeting() {
    return 'my name is' + name
  }
  return greeting()
}

func() // // My name is taro

function func2() {
  const lastName = 'suzuki'
  function greeting(firstName) {
    return 'My name is ' + lastName + ' ' + firstName
  }
  return greeting
}

const f = func2()
f('taro') // My name is suzuki taro
f('hanako') // My name is suzuki hanako

function box() {
  let val = undefined

  return {
    set: function(newVal) {
      val = newVal
    },
    get: function() {
      return val
    },
    type: function() {
      return typeof val
    },
  }
}

const b = box()
b.type() // undefined
b.set(10)
b.get() // 10
b.type() // "number"

function counter() {
  let count = 0
  return function() {
    return ++count
  }
}

const count = counter()
count() // 1
count() // 2

function createClicked() {
  let isClicked = false
  return function() {
    if (isClicked) {
      return 'すでにClickしています'
    }
    isClicked = true
    return 'Clickしました'
  }
}

const click = createClicked()
click() // Clickしました
click() // すでにClickしています

const makeCounter = function(num) {
  let startNum = 0

  return function() {
    console.log((startNum += num))
  }
}

const incrementer = makeCounter(1)
const decrementer = makeCounter(-1)

incrementer() //1
incrementer() //2
incrementer() //3

decrementer() //-1
decrementer() //-2
decrementer() //-3
