//! String:
//* A string is a collection of characters

//* We can create string in 2 ways:
//? 1. By using string literal- '' "" ``
//? 2. By using string Constructor- new string()

//! 2. By using String constructor:
let str= new String("Hello");
console.log(str);

//! String properties: length
let str2 = "Hello World!";
console.log(str2.length);

//! String Methods:
//? 1. charAt()
let str3 = "javascript";
console.log(str3.charAt(2));
console.log(str3.charAt(40)); // log the nothing
console.log(str3.charAt(-1)); // log the nothing

//? 2. charCodeAt()
console.log(str3.charCodeAt(1)); // 97

//? 3. indexOf():
let str4 = "hasde chera da matlab ye nahi";
console.log(str4.indexOf("da")); //1
console.log(str4.indexOf("a",2)); // 10

//? 4. lastIndexOf()
console.log(str4.lastIndexOf("a")); // 20

//? 5. slice()
let str5 = "dum na dasa hage batasa";
console.log(str5.slice(12)); // hage batasa 
console.log(str5.slice(12,-1)); 

//? 6. substring()
console.log(str5.substring(12));

//? 7. concat()
let str6 = "Hello";
let str7 = "world";
console.log(str6.concat(str7));

//? 8. trim()
let str8 = "     Ghayal    hu isliye Ghatak hu    ";
console.log(str8.length); // 35
console.log(str8.trim());
console.log(str8.trim().length);

//? 9. trimEnd()
console.log(str8.trimEnd());

//? 10. trimStart()
console.log(str8.trimStart());

//? 11. padStart()
let card = "1234";
let maskedCard = card.padStart(16,"*");
console.log(maskedCard);

//? 12. padEnd()
let mobileNo = "9370";
console.log(mobileNo.padEnd(10,"*"));

//? 13. replace()
let str9 = "Java is a scriting Language and Java is used to design frontend part";
console.log(str9.replace("Java","Javascript"));

//? 14. replaceAll()
console.log(str9.replaceAll("Java","Javascript"));

//? 15. includes()
console.log((str9.includes("java"))); // true
console.log(str9.includes("Javascript")); // false

//? 16. toUpperCase()
//? 17. toLowerCase()
//? 18. match()
//? 19. matchAll()
//? 20. startsWith()
//? 21. endsWith()
//? 22. search()
//? 23. split()
let str10 = "HTML CSS JS";
console.log(str10.split(" ")); // array
console.log(str10.split(""));

let str11 = "rohit@gmail.com";
console.log(str11.split("@")); // (2) ['rohit','gmail.com']
console.log(str11.split("@")[0]);

let str12 = "html-java-python";
console.log(str12.split("-",2));

//? 24. repeat()
let str13 = "hello";
console.log(str13.repeat(5));









