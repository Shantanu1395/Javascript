//call, bind, apply - provides functionality of using common methods for similar objects

//call, apply, bind
console.log('------------------');
console.log('call / apply / bind');
console.log('------------------');

//Ex 1 - basics of call, bind, apply
console.log('Ex 1 - basically how call/apply(passing array instead of values) / bind(attaches object and returns function) works');
var obj = {
    num: 2
};

var addToThis = function(a, b, c){
    //this will get the value of num using the called function
    return this.num + a + b + c;
};

//call
console.log('call:'+addToThis.call(obj, 3, 4, 5));

//apply
console.log('apply:'+addToThis.apply(obj, [3, 4, 5]));

//bind - add/borrow funtionalities and return back a function which can be executed at a later stage
//Way 1
var bound = addToThis.bind(obj, 1, 2, 3);
console.log('bind 1:'+bound());
//Way 2
var bound = addToThis.bind(obj);
console.log('bind 2:'+bound(1, 2, 3));


//Ex 2 - call
let mammal = function(legs){
    this.legs = legs;
};

let cat = function(legs, isDomesticated){
    mammal.call(this, legs);
    this.isDomesticated = isDomesticated;
}

let lion = new cat(4, false);
console.log(lion);