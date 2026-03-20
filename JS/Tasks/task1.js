function getExtension(filenm) {
    return filenm.split(".").slice()[1];
}
console.log(getExtension("file.png"));

function countVowels(str) {
    let vowels = "aeiou";
    let count = 0;
    for (let char of vowels) {
        if (str.includes(char))
            count++;
    }
    return count;
}
console.log(countVowels("KanjiVekariya"));

//* Capitalize First letter of Each Word
function capitalizeWords(str) {
    let strArr = str.split(" ");
    // for(let i=0; i<strArr.length; i++){
    //     strArr[i]=strArr[i][0].toUpperCase() + strArr[i].slice(1);
    // }
    let upper = strArr.map((word) => {
        return word[0].toUpperCase() + word.slice(1);
    })
    return upper.join("");

}
console.log(capitalizeWords("hello word"));

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("Hello"));

function palindrome(str, reverse) {
    return str === reverse(str);
}
console.log(palindrome("Hello", reverseString));

//* 6. Find Maximum Number
/*Create a function getMax(arr) that returns the largest number from the array.
Example: 
 getMax([10, 5, 8, 25, 3]) // 25*/

function getMax(n) {
    let maxi = n.reduce((max, num) => num > max ? num : max
    );
    return maxi;
}
let arr = [1, 4, 5, 7, 8];
console.log(getMax(arr));

//!7. Remove Duplicate Elements
//* Create a function removeDuplicates(arr) that removes duplicate values from an array.
//*Example:
//*removeDuplicates([1,2,3,2,4,1,5]) // [1,2,3,4,5]

function removeDuplicates(arr) {
    let newarr = new Array();
    for (let i = 0; i < arr.length; i++) {
        if (newarr.includes(arr[i]) == false) {
            newarr.push(arr[i]);
        }
    }
    return newarr;
}
let arr1 = [1, 2, 3, 4, 5, 1, 2, 3]
let newarr = removeDuplicates(arr1);

for (let i = 0; i < newarr.length; i++) {
    console.log(newarr[i]);
}

//! 8. Sum of All Numbers
//*Create a function sumArray(arr) that returns the sum of all numbers.
//*Example: 
//*sumArray([1,2,3,4,5]) // 15

function sumArray(arr) {
    let sum = arr.reduce((max, ele) => max + ele);
    return sum;
};
console.log(sumArray(arr));


//~ oops exception file handling
//~ collection framework
//~ basic of hibernate
//~ http protocol -> rest API web socketing 
//~ spring core ioc container
//~ spring boot crud operation 
//~jdbc 
//~ it is dependency tool spring 


//! Find Even Numbers
// Create a function getEvenNumbers(arr) that returns only even numbers.
// Example: 
//  getEvenNumbers([1,2,3,4,5,6]) // [2,4,6]

function getEvenNumbers(arr) {
    let newarr = arr.filter((num) => {
        if (num % 2 == 0)
            return num;
    });
    return newarr;
}
console.log(getEvenNumbers(arr));

//! 10. Double the Numbers (map)
// Create a function doubleNumbers(arr) that returns a new array where each number is doubled.
// Example: 
//  doubleNumbers([1,2,3,4]) // [2,4,6,8]

function doubleNumbers(arr) {
    let newarr = arr.map((num) => num * 2);
    return newarr;
}
console.log(doubleNumbers(arr));

//!11. Find First Number Greater than 50 (find)
// Create a function findNumber(arr) that returns the first number greater than 50.
// Example: 
//  findNumber([10,20,55,30,70]) // 55

function findNumber(arr) {
    let num = arr.find((num) => {
        if (num > 50) {
            return num;
        }
    });
    return num ?? 0;
}
let arr3 = [1, 2, 3, 54, 52];
console.log(findNumber(arr3));

//! 12. Total Price of Products (reduce)
// Create a function getTotalPrice(products) that returns the total price of all products.
// Example: 
const products = [
    { name: "pen", price: 10 },
    { name: "book", price: 50 },
    { name: "bag", price: 100 }
]
function getTotalPrice(products) {
    let totalPrice = products.reduce((acc, product) =>
        acc + product.price, 0);
    return totalPrice;
}
console.log(getTotalPrice(products));