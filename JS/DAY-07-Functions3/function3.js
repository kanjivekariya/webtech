//! 7. Higher-Order Function:(HOF)
//* The Higher-order function which will accept another function as parameter or it will return a new function

//! Here, Calculate -> HOF
function calculate(num1,num2,operation) {
    return operation(num1,num2)
}
//! add -> callback fun
function add(num1,num2) {
    return num1+num2;
}
//! sub -> callback fun
function sub(num1,num2) {
    return num2-num1;
}
console.log(calculate(10,20,add));
console.log(calculate(10,20,sub));

//! 8. Nested Function:
//* The function which is present inside another fuction is called as nested function

function outerFun() {
    let outerVar=10;
    console.log("Outer function is called");
    
    function innterFun() {
        console.log("Inner Function called");
        console.log(outerVar);
    }
    innterFun();
}
outerFun();
//innerFun();

//! 9. Closure Function:
//* When you are trying to access the value of outer function inside the inner function and it will remember the value of the outer function is known as a closure function

function outer() {
    let count=0;
    function inner() {
        count++;
        console.log("Count:",count);
        return count;
        
    }
    // inner();
    return inner;
}
//outer(); // 1
// outer();// 1

let counter = outer();
//counter = inner();
// console.log(counter);
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

//! 10. Function Currying:
//* A function currying means passing one arguement at a time to invoke the function

//! normal Function:
function add(a,b,c) {
    return a+b+c;
}
console.log(add(10,20,30));

//! Curried Function:
function fun1(a) {
    console.log("a:",a);
    return function fun2(b) {
        console.log("b",b);
        return function fun3(c) {
            // console.log(a+b+c);
            return a+b+c;
        }
    }
}
console.log(fun1(10)(20)(30));

let fun = a => b => c=> a+b+c;
console.log(fun(1)(2)(3));

//! 11. Generator function:
//* The Generator function is a special type of function in javascript which will be pause and resume its execution

//? syntax: function*

//! yield -> yield keyword is used to pause the execution of the function and it will store the value

//! .next() -> .next() method is used to resume the execution of the function and it will return one object which has two properties  -> {Value : x , done: "true" }
function getNumbers() {
    console.log(1);
    console.log(2);
    console.log(3);
}
getNumbers();

function* numbers() {
  yield 1;
  yield 2;
  yield 3;
  return "Hello";
  //   console.log("Hello");
}
let gen = numbers();
console.log(gen.next()); // {value: 1, done: false}
console.log(gen.next()); // {value: 2, done: false}
console.log(gen.next()); // {value: 3, done: false}
console.log(gen.next()); // {value: undefined, done: true}

