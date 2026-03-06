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