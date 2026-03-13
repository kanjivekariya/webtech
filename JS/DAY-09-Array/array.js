//! Array:
//* The array is a special type of object in JS
//* The array is a collection of multiple values which is stored inside a single variable
//* Array is divided into two types:

//? 1. Homogenous Array:
//* The array contains same type of data is known as homogeous array.
let sameTypearr = [1, 2, 3, 4, 5]; // numbers array
let stringArr = ["Hello", "bye", "bonjour", "konchiwa"];
console.log(stringArr);

//? 2. Hetergenous Array:
//* The array contains different types of data is known as hetergenous array.
let mixedArr = [10, "Hello", true, null, undefined, [30, 40], function () {
    console.log("Nested function inside an array");
}];

console.log(mixedArr);

//! How to access the array elements:
//? Syntax: arr_ref_var[index]

mixedArr[6]();

//! How to create an array in JS:
//* There are 2 ways to create an array in JS:
//? 1. By using Array Literal - []
//? 2. By using Array Constructor - new Arrat();

let arr = new Array(10, 20, 30);
console.log(arr); // (3) [10,20,30]

let arr2 = new Array(5);
console.log(arr2); // (1) [5x Empty]

//! What is the type of array:
console.log(typeof arr); // Object

//! Array properties: length
//? 1. By getting the length:
let numArr = [10, 20, 30, 40, 50];
console.log(numArr.length); // 5 

//? 2. By Setting the length:
numArr.length = 3;
console.log(numArr);

//! Array Static Methods:
//? 1. Array.from()
//* The array.from() method is used to create an array for an interable object.
let str = "Hello";
console.log(Array.from(str)); // (5) 

//? 2. Array.isArray():
let arr3 = [1, 2, 3];
console.log(Array.isArray(arr3)); // true

//? 3. Array.of()
//* It will create an array for the passed values.
let arr4 = Array.of(1, 2, 3, 4, 5);
console.log(arr4);

//! Array Instance Methods:
//? 1. push()
//* The push() method is used to add the elements at the end of the array.
let heros = ["Prabhas", "Allu arjun", "salmon bhai", "Rocky", "PythonRaja", "JavaByteMaster", "SQLDiva", "TesteMaster", "WebTechWala"];
console.log(heros);
heros.push("JigarKaTukda", "The monster");
console.log(heros);

//? 2. pop()
//* The pop() method is used to remove the last element from the array.
console.log(heros.pop());
heros.pop();
heros.pop();
console.log(heros);


//? 3. shift()
//* The shift() method is used to remove the array elements from the starting of the array.
heros.shift();
console.log(heros);

//? 4. unshift()
//* The unshift() method is used to add the array elements from the starting of the array.
heros.unshift("Nani", "NTR");
console.log(heros);

//? 5. slice()
//* The slice() method will extract the array elements from the given array.\
//? Syntax: arr.slice(startIndex,endIndex);
let sliceHeros = heros.slice(2, 6);
console.log(sliceHeros);
console.log(heros.slice(2, 6));


//? 6. splice()
//* The splice() method is used to remove the elements from the specified index value.
//? Syntax: arr.splice(startIndex, deleteCount,[ele1,ele2.... eleN])
heros.splice(5, 3, "Xyz");
console.log(heros);

//? 7. join()
//* The join() method is used to join the array elements by using seperator.
let numberArr = [1, 2, 3];
console.log(numArr.join(""));
let demo = numArr.join("");
console.log(typeof demo); // string

//? 8. indexOf()
//* The indexOf() Method is used to returns the index value of the given search element.

//? 9. includes()
//* It will checks the given array element present or not.

//? 10. concat()
//* It is used to merge two different array into a single aray.
let array1 = [1, 2];
let array2 = [3, 4, 5];
let mergeArr = array1.concat(array2);
console.log(mergeArr);

//? 11. reverse()
console.log(array2.reverse());

//? 12. flat()
//* The flat method is used to add the nested array into the main single array/
//? Syntax: arr.flat(depth) //depth -1

let nestedArr = [1, 2, 3, [4, 5, [6, 7[8, 9[10]]]]];
console.log(nestedArr);
console.log(nestedArr.flat());
console.log(nestedArr.flat(2));
console.log(nestedArr.flat(3));
console.log(nestedArr.flat(4));
console.log(nestedArr.flat(Infinity));




