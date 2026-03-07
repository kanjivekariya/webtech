console.log("Types of Functions");

//! Types of Functions:
//? 1. Named Function
//? 2. Anonymous Function
//? 3. Function as an Expression
//? 4. IIFE Function
//? 5. Arrow Function
//? 6. Callback Function
//? 7. Higher-Order Function (HOF)
//? 8. Nested Function
//? 9. Closure Fuunction
//? 10. Function Currying
//? 11. Generator Function

//! 1. Named Function:
//* The function which has a identifier or name is called as Named Function.
//* It is also called as Function Declaration.

function jetha(person) {
  console.log(`Jetha: Good Morning ${person} ji!!`);
}
jetha("Babita");

//! 2. Anonymous Function:
//* The function which don't have an identifier or name is called as anonymous function.

// function () {
//     console.log("I am Mr.x");
// }

//? 1st option: Wrap the entire function in empty () and call the () inside the main () just after the function declaration.

(function () {
  console.log("I am Mr.x");
}());

//! 3. Function as an Expression: (First Order Function)
//? 2nd option: Store the entire function inside the variable and use the variable to call the anonymous function.

let fun = function () {
  console.log("I am a anonymous function");
};
console.log(fun);
fun();

//! 4. IIFE:
//* IIFE stands for Immediate Invoking Function Expression.
//* It will invokedjust after the function declaration.
//* It will be executed only once.

console.log("Interputed the IIFE function");
(function () { 
    // console.log("IIFE function");
    alert("IIFE invoked")
 })();