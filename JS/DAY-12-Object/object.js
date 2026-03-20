//! What is Object?
//* The Object is a collection of different multiple key-value pair.
//* The programmatical representation of a real life entity is called as object in Javascript

//? property = key + value

//! Ways to create an object:
//? 1. By using Object literals - {}
//? 2. By using object constructor - new Object()

let obj = new Object();
console.log(obj); //{}

//! Syntax to add the properties inside the empty or existing object:
//? obj_ref_var.keyName = value;
obj.username = "Bipin";
console.log(obj);

//! Bu using object Literal:
let human = {
    name: "Bipin",
    age: 22,
    status: true,
    isMarried: undefined,
    isChild: null
};

console.log(human);

//! How can we access the object properties or keyname:
//? There are two ways to access the object properties:
//* 1. By using Dot (.) Notation
//* 2. By using square-bracket ([]) notation

//* 1. By using Dot(.) Notation
//? Syntax:obj_ref_var.keyname
console.log(human.name);
console.log(human.age);

//! How to add the new property inside the existing object:
//? obj_ref_var.keyname = value;
human.address = "Islamabad";
console.log(human);
console.log(human.address);

//! How to delete the property inside the object:
//? Syntax: delete obj_red_var.keyname

delete human.isChild;

//! What is method inside object?
//* A method is a simple javascript function which is stored inside the object.

let car = {
    brand: "Ford Mustang",
    model: "gt",
    price: "75 Lakhs",
    color: "red",
    start: function () {
        console.log("Car Started");

    }
};

console.log(car.brand);
// console.log(car.start);
car.start();

//! this keyword inside the object:
function thiskeyword() {
    console.log(this); // window -> Global Object
}
thiskeyword();

let thiskeywordObj = {
    username: "john",
    demo: function () {
        console.log(this); //refers the current object
    }
};
console.log(thiskeywordObj);

let employess = {
    eName: "john",
    eAge: 20,
    eSalary: 30000,
    eStatus: true,
    eAddress: "Ahmedabad",

};

//! 1. Object.keys():
//* It will returns all the keys of an given object.
console.log(Object.keys(employess)); // ['eName', 'eAge', 'eSalary', 'eStatus', 'eAddress']

//! 2. Object.values()
//* It will returns all the values of an given object
console.log(Object.values(employess)); // (5) ['john', 20, 30000, true, 'Ahmedabad']

//! 3. Object.assign():
//* It is used to merge the two different object.
let obj1 = { username: "john" };
let obj2 = { age: 20 };

let mergedObj = Object.assign({}, obj1, obj2);
console.log(mergedObj);

//! 4. Object.entries():
//* It will convert the property of an object into an nested [key,value] pair in the form of array.

console.log(Object.entries(employess));

//! 5.Object.fromEntries():
//* It will convert the nested [key,value] pair in the object.
let laptop = [
    ["brand", "Asus"],
    ["model", "f15"],
    ["price", 60000],
]
console.log(Object.fromEntries(laptop));


let user = {
    name: "john",
    age: 20
}
let arr1 = Object.entries(user);
arr1[0][0] = "username";
arr1[1][0] = "userAge";
console.log(Object.fromEntries(arr1));

for (const k in employess) {
    console.log(k);
    console.log(employess[k]);
}

let arr = [1, 2, 3, 4, 5];
for (const ele in arr) {
    console.log(ele);
}

let str = "hello";
for(const char of str){
    console.log(char);
}

for(let ele in arr){
    console.log(ele); // index
    console.log(arr[ele]); // values
    
}
//? for in -> object
//? for-of -> array or string or iterable object









