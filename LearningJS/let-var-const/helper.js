//--------Hoisting--------
/*
Only the function declarations of var will hoisted at the top
*/

(function initialise(){
    a = 10;
})();
console.log(a);
var a;

//--------var--------

//1.Attched to window objects
var a;
console.log(window.a);

//2.Scope-immediate function / global(if not in any function)
console.log("Scope of var")
function initialise(){
    var b = 10;
}
//console.log(b); Throws an error

for(var i=0;i<3;i++){
    console.log(i+" ");
}
console.log(i)



//--------let--------
//1.Provides block scoping
for(let j=0;j<3;j++){
    console.log(j+" ");
}
//console.log(j) Will pop up an error



//--------const--------
//Using const, a variable can't be re-referenced
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);

//arr = [1, 2, 3] Will pop an error as it can't be reassigned


    