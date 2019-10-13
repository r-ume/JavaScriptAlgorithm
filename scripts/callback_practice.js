// http://qiita.com/nekoneko-wanwan/items/f6979f687246ba089a35

// Declaring variables and functions
var trapCard = function() {
  console.log('trap card activates!') // --2
}

var sacrificeCard = function(sacrificeName) {
  console.log('I sacrifice' + sacrificeName)
}

var myTurn = function(callback) {
  console.log('My turn!') // -- 1
  callback() // -- 2
}

myTurn(trapCard)
// myTurn!
// trap card activates!

// either is possible.
// a function can be passed to a parameter directly.
myTurn(function() {
  sacrificeCard('Dark Magician')
})

myTurn(sacrifice.bind(null, 'Dark Magician'))

// myTurn!
// Dark Magician!
