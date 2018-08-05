/*
1.this context-
    1.1 - global context => window
    1.2 - function => scope of the function 

    "this doesn't get any value untill function is executed"
    "this has the value as the scope of containing function"

2.this in a callback
    2.1 - this will get the reference of the the calling function in a higher order function

    " The value ‘this’ holds is reassigned to the function that is calling the function — i.e., there’s your call site, which holds your ‘this’:"    
*/

//1.scope of this
//Ex1
console.log('-------------------');
console.log("Scope of this");
console.log('-------------------');
console.log("Ex1 - this refering to the global window obj");
var firstName = "Shantanu",lastName = "Saini";
function showFullName() {
    // "this" inside this function will have the value of the window object
    // because the showFullName () function is defined in the global scope, just like the firstName and lastName
    console.log ("Global Scope:"+this.firstName + " " + this.lastName);
}
showFullName();
console.log();

//Ex2
console.log("Ex2 - this refering to the current function scope i.e object");
var person = {
    firstName: "Shantanu",
    lastName: "Saini",
    fullName: function () {
        console.log("Object Scope");
        console.log(this.firstName + " " + this.lastName);
        console.log(person.firstName + " " + person.lastName);
    }
}
person.fullName();
console.log();



//2.this in a callback - this will get the reference of the calling object
console.log('-------------------');
console.log("this in a callback");
console.log('-------------------');
//Ex1
function higherOrder(callback){
    callback();
}
function getThis(){
    console.log(this);
}
higherOrder(getThis);


//Ex2
function callbackAsMethod(callback){
    let obj = {
        name: "Random Object"
    };
    obj.callback = callback;
    obj.callback();
}
callbackAsMethod(getThis);


//Controlling where this will point using call, bind, apply
console.log('-------------------');
console.log("controling where this will point - call, bind, apply");
console.log('-------------------');

//1.
console.log('1.Bind');
