//! 3. reduce():
//* The reduce() method is used to convert multiple array elements into a single value.
//? Syntax: arr.reduce((acc,cValue,cIndex,cArray) =>{}),[initialValue]
//? Return Type: Single Value

let arr = [10, 20, 30, 40, 50];
let output = arr.reduce((acc, num, index) => {
    // console.log("acc : ",acc);
    // console.log("num : ",num);
    // console.log("index : ",index);
    return acc + num;

});
console.log(output);
let outputWithInitialValue = arr.reduce((acc, num) => {
    return acc + num;
}, 100);

console.log(outputWithInitialValue);

//! 4. forEach
//* The forEach() method us used to iterate on an array elements.
//~ Special Note: The forEach() method does not return anything.

let result = arr.forEach((num) => {
    console.log(num);
    return num + 10;
});
console.log(result);

//! 5. find()
//* The find() method is used to find out the first matching element from an array based on condition.
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

let productFound = products.find(item => item.price > 20)
console.log(productFound);

let numFound = arr.find((num) => num > 20);
console.log(numFound);

