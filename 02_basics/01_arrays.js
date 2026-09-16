const myarr1 = [0, 1, 2, 4, 5, 3];   // array decleration 
// console.log(myarr1);                 // printing array

// // console.log(myarr1[0]);           // accessing any singlke element by this approach
// // console.log("first index element of my array is : ", myarr1[1]);  // you can text with array isko backtick(string Interpolation k through bhi kr sakte hai)
// // console.log("A", myarr1);

// //+++++++++++++++++++++++++++++++++++

// methods

// //addition of any single element in our arrray can be done by using push method
// // push will insert the particular element in the last end of array

// myarr1.push(6);
// myarr1.push(7);
// myarr1.push(8);

// console.log(myarr1);

// // using pop method you can pop means : you can delete last element of array

// myarr1.pop();
// myarr1.pop();
// myarr1.pop();

myarr1.unshift(9)
myarr1.shift()   // unshift array k front me push karta hai or shift pop krta hai aage ka element

// console.log(myarr1);

// const arr = new Array(1,2,4,5,6);
// console.log(arr);       // another way of declaring array

// console.log(myarr1.includes(9)); //check krke btata hai ki 9 array me hai ki nhi true or false return krke
// console.log(myarr1.indexOf(3));  //same

const myarr2 = myarr1.join(); // is operation ne hamari array ko string me convirt kr diya hai or nyi variable me daal diyahai

// console.log(myarr1);  ye array one print kregi 
// console.log(typeof myarr1);  ye typr print kregi
// console.log(myarr2); ye 2nd varable hai jisme hamne array one ko string me convert krke dala hai
// console.log(typeof myarr2);  output: string


// =================================================================
//slice and splice    interview important difference by slice and splice
const array1 = [1, 2, 3, 4, 5, 6];

console.log(array1);

const a = array1.slice(1, 3);
// slice(start, end)
// index 1 se index 3 se pehle tak elements copy karega
// Result: [2, 3]
// Original array ko CHANGE nahi karta

console.log("A", a);

console.log(array1);
// Original array abhi bhi: [1, 2, 3, 4, 5, 6]


const b = array1.splice(1, 3);
// splice(start, deleteCount)
// index 1 se 3 elements REMOVE karega
// Result: [2, 3, 4]
// Original array ko CHANGE karta hai

console.log("B", b);

console.log(array1);
// Original array ab: [1, 5, 6]


// ==================================================
// THEORETICAL DIFFERENCE
// ==================================================

// slice()
// 1. Original array ko change nahi karta
// 2. Elements ki COPY return karta hai
// 3. Syntax: array.slice(start, end)
// 4. end index include NAHI hota
//
// Example:
// [1, 2, 3, 4, 5].slice(1, 4)
// => [2, 3, 4]
// Original => [1, 2, 3, 4, 5]


// splice()
// 1. Original array ko CHANGE karta hai
// 2. Removed elements ki array return karta hai
// 3. Syntax: array.splice(start, deleteCount)
// 4. deleteCount batata hai kitne elements remove karne hain
//
// Example:
// [1, 2, 3, 4, 5].splice(1, 2)
// => [2, 3]
// Original => [1, 4, 5]


// ==================================================
// YAAD RAKHNE KA SIMPLE TRICK
// ==================================================

// slice = COPY  📋
// splice = CHANGE ✂️

