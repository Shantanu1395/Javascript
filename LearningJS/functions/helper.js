//ES5 style functions
function ES5(){
    console.log("I am from ES5");
}
ES5();


//ES6 style functions
/*
1.default parameters
2.IIFE-Imidiately invocable functions
3.Rest & Spread
4.Fat Arrow
*/

//default parameters
let ES6 = function(name="I am from ES6"){
    console.log(name);
}
ES6();

//IIFE
(function ES6(){
    console.log("IIFE");
})();

//Rest & Spread - Passing variable number of arguments
(function rest(...arr){
    for(let i of arr)
        console.log(i);
})(1,2,3);


//Fat Arrow
let arrow = (i) => { return i*i };
console.log("Fat Arrow:"+arrow(6));
    
//Fat Arrow + IIFE
console.log("Fat Arrow with IIFE:"+((i) => {return i*i;})(2));