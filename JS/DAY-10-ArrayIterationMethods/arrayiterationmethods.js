//! What is Array Iteration Methods?
//* The array iteration methods are used to loop through the array elements and perform the operation on each and every element without using the traditional for loop.
//* They make the code cleaner, shorter and easier to read.
//* It is called as advanced array methods.

//! Types of advanced array methods:
//? 1. map()
//? 2. filter()
//? 3. reduce()
//? 4. foreach()
//? 5. find()

//! map():
//* The map() method is a inbuilt method which is used to iterate on each and every element of an array and it will transform into new array.
//? Syntax: arr.map((cValue,cIndex,cArray) => {})
//? Return Type: New Transformed Array

let numArr = [10, 20, 30, 40, 50];
numArr.map((cValue, cIndex, cArray) => {
    // console.log(cValue);
    // console.log(cIndex);
    // console.log(cArray);
    // console.log("cValue : ", cValue, "cIndex : ", cIndex);
});

let squaredNumarr = numArr.map((cValue,cIndex,cArray)=>{
    return cValue * cValue;
})
console.log(squaredNumarr);
console.log(numArr);

let tasks = ["Presentation","assignments","Coding practice"];
let result = tasks.map((task,index)=>{
    return `Task ${index+1} : `+" "+task;
});

console.log(result);
let mixedArr = [10,"Hello",true,null,undefined];
let output  = mixedArr.map((item,index)=>{
    return `Task ${index+1} : `+" "+item;
});

console.log(output);

//! 2. filter():
//* The filter() method is used to filter out the array elements based on some certain condition.
//* If condition -> true -> It will add the Element(include)
//* If condition -> false -> It will not add the element(exclude)

//? Syntax: arr.filter((cValue,cIndex,cArray)=>{})
//? Return Type: New Filtered Array
console.log("\n");

console.log("Filter Methods starts....");


let randomNumber = [12,324,55,23,94,3549,36,2149,34,37,97];
// let greaterThan50 = randomNumbers.filter((num)=>{
//     return num > 50;
// });

let greaterThan50 = randomNumber.filter(num => num>50);

console.log(greaterThan50);
console.log(randomNumber);

let evenIndexNumbers = randomNumber.filter((num,index) => {
    if(index%2 == 0)
    {
        return num;
    }
});
console.log(evenIndexNumbers);
// (6) [12, 55, 94, 36, 34, 97]

let evenIndexNumbersMap= randomNumber.map((num,index)=>{
    if(index%2==0){
        return num;
    }
});
console.log(evenIndexNumbersMap);
// (11) [12, undefined, 55, undefined, 94, undefined, 36, undefined, 34, undefined, 97]

const products = [
  { id: 101, name: "Mechanical Keyboard", price: 89.99, category: "Electronics" },
  { id: 102, name: "Wireless Mouse", price: 25.50, category: "Electronics" },
  { id: 103, name: "Leather Journal", price: 18.00, category: "Stationery" },
  { id: 104, name: "Gel Pen Set", price: 12.99, category: "Stationery" },
  { id: 105, name: "Cotton T-Shirt", price: 15.00, category: "Apparel" },
  { id: 106, name: "Denim Jacket", price: 55.00, category: "Apparel" },
  { id: 107, name: "Bluetooth Speaker", price: 45.00, category: "Electronics" },
  { id: 108, name: "Ceramic Coffee Mug", price: 10.00, category: "Home & Kitchen" },
  { id: 109, name: "Stainless Steel Water Bottle", price: 22.50, category: "Home & Kitchen" },
  { id: 110, name: "Desk Lamp", price: 30.00, category: "Home & Kitchen" }
];

let electronicsProd = products.filter((product)=> product.category.toLowerCase()==="electronics");
console.log(electronicsProd);

let prodWithlessThan20= products.filter((product)=>product.price<20);
console.log(prodWithlessThan20);




