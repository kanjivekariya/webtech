//! Function:
//* Function is a block of code which is used to perform a set of instruction.
//* Function it is used to avoid the repetation of the code.

//? Syntax:
function identifier(params){
    //code to be executed
}
identifier(); // function Call Statement(FCS)

//! Example: Non-parameterized function
function greet(){
    console.log("Hello , How are you ?");
    
}
greet();

//! Example : Parameterized Function
function greetWithUserName(name){
    //name ->Parameter -> Temporary value
    //console.log("Hello, How are you",name);
    console.log(`Hello,${name ?? "Guest"} How are you?`);
    
}

//? function call statement:
//* The Function call statement it is responsible to invoke or call the function.
greetWithUserName("Akshit");// Akshit -> Arguement -> Actual value 
greetWithUserName(); // undefined

//! What is parameter ?
//* The parameter is a temporary variable or a placeholder which is declared at the time of function defination
//* Which will be replaced by the arguements

//! What is arguements?
//* The arguements are the actual values which is passed inside the function call statement

//! What is return keyword or statement in function?
//* The return keyword returns the value back to caller or fcs for further use
function add(num1,num2){
    let sum= num1+ num2;
    // console.log(sum);
    return sum;
    
}
//add(10,20); I am not getting the output here

//? !st way: call the fcs inside the clg;
console.log(add(10,20)); //30

//? 2nd way: store the fcs in a variable and print that variable by using clg
let result = add(40,50);
console.log(result);

//!NOTE: If your function is not returning any kind of value you will get the undefined as a output
function sub(num1,num2){
    console.log(num2-num1);
}
console.log(sub(10,20)); // 10 , undefined

//? arguements keyword in function?
function getNumbers(num1,num2,num3,num4,num5){
    // console.log(num3);
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments[4]);
}
getNumbers(10,20,30,40,50);
console.log(Array.isArray(getNumbers(10,20,30,40,50))); // false

//! 'this' keyword in function?
function thisKeyword(){
    console.log(this); // Window Object -> Global object -> Each and every browser
    
}
thisKeyword();



