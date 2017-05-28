// What is a prototype?

// 1.
function Dog() {}
Dog.prototype.bark = function(){
    console.log('bark');
};

var dog = new Dog();
dog.bark();

// 2.
function Dog(){
    this.bark = function(){
        console.log('bark');
    };
};

var dog = new Dog();
dog.bark();

// Which is better? and what is the difference?

// 1 is better because when Dog function in 2 gets called, a new object and the function bark gets redeclared, which is a waste of memory.
/*

  function Dog(){
    // var this = {};
    this.bark = function(){
        console.log('bark');
    };
    // return this;
   }
 */




