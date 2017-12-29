function func(){
  var name = 'taro';
  function greeting(){
    return 'my name is' + name;
  }
  return greeting();
}

func(); // // My name is taro

function func() {
  var lastName = 'suzuki';
  function greeting(firstName) {
    return 'My name is ' + lastName + ' ' + firstName;
  }
  return greeting;
}

var f = func();
f('taro');    // My name is suzuki taro
f('hanako');  // My name is suzuki hanako


function box() {
  var val = undefined;
  return {
    set: function(newVal){
      val = newVal;
    },
    get: function(){
      return val;
    },
    type: function(){
      return typeof val;
    }
  };
}

var b = box();
b.type();    // undefined
b.set(10);
b.get();     // 10
b.type();    // "number"

function counter() {
  var count = 0;
  return function() {
    return ++count;
  }
}

var count = counter();
count();  // 1
count();  // 2

function createClicked() {
  var isClicked = false;
  return function() {
    if (isClicked) {
      return 'すでにClickしています';
    }
    isClicked = true;
    return 'Clickしました';
  }
}

var click = createClicked();
click();  // Clickしました
click();  // すでにClickしています
