'use strict';

var Father = function Father(name){

    var _name;
    Object.defineProperty(this, 'name', {
        get: function() { return _name; },
        set: function(n) { _name = n; }
    });

    this.name = name;

    this.toString = function() {
        console.log('Hoge name: ' + this.name);
        console.log('I will always get called');
    }
};

Father.prototype.sayHello = function(){
    window.alert('[' + this.name + ']' + 'Hello!');
};

var Son = function Son(name){
    Father.call(this, name);
    var _isDeveloper = false;

    Object.defineProperty(this, 'isDeveloper', {
        get: function() { return _isDeveloper; },
        set: function(isD) { _isDeveloper = isD; }
    });

    this.isDeveloper = _isDeveloper;
};

Son.prototype.toString = function(){
    console.log('<Son name: ' + this.name);
    window.alert("I will never get called!: ");
};

Son.prototype.sayHello = function() {
    Object.getPrototypeOf(Son.prototype).sayHello().call(this);
    if (this.isDeveloper) window.alert("I am a developer");
};