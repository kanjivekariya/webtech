//! 5. Arrow function:
//* The arrow function is shorthand syntax to create the function in JS.
//* This is the modern or recommended way to use the function
//* Arrow function was introduced in the ES6 concepts which was released in the year of 2015

//? Syntax: () => {}
let arrFun=()=>{
    console.log("This is arrow function");
    
}
console.log(arrFun);
arrFun();

//! 1. Implicit Return in Arrow Function:
//* Automatically -> Internally

let greet = () => console.log("Hello");
greet();

let add = (num1,num2) => num1+num2;
console.log(add(10,20));

//! 2. Explicit Return in Arrow Function:
//* Manually
let mul = (num1,num2)=>{
    console.log("Multiply Operation");
    return num1 * num2;
    
};
console.log(mul(10,20));

//! arguements keyword in arrow function:
let arguFun = () =>{
    // console.log(arguments); // Arguments is not defined
};
arguFun(10,20,30,40,50);

//! 6. Callback Function:
//* the function which is passed to the another function as an arguement is called as callback function
//* Callback function will be executed just after the completion of main function

//! Main function:
function mainFun(demo){
    console.log("Main Function is running...");
    console.log(demo);
    demo();
    // callBackfun();
}
mainFun(callBackfun);

//! callback function:
function callBackfun(){
    console.log("Callback function");
}
//! Realtime example:
function orderFood(waiter) {
    console.log(`Waiter : Panner Tikka Masala
        Garlic Naan
        chaas`);
    waiter();
}
orderFood(serveFood);
// orderFood(parcelFood);
function serveFood(){
    console.log("Waiter :  food is ready Sir! Enjoy your meal");
}
function parcelFood() {
    console.log("Pack the food!");
}
document.getElementById("btn1").addEventListener("click",()=>{
    orderFood(serveFood);
});
document.getElementById("btn2",()=>{
    orderFood(parcelFood);
})

function assignment(student) {
    console.log("Teacher assigned you one task");
    // console.log(student);

    student();
}
assignment(student);
function student(){
    console.log("Assignment completed...");
    
}