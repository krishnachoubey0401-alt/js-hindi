const arr = [1,2,3,5,7,8]

for (const index of arr) {
  // console.log(index);  same concept as iterator this is called forof loop
  
}

const greeting = "hello krishnakant"

for (const greet of greeting) {
  //console.log(greet);
}

//now we are going to study maps

const map = new Map()
map.set('IN', "India")
map.set('UK', "united kingdom")
map.set('R', "Russia")
map.set('G', "Germany")

for (const element of map) {
  // console.log(element);
  
}// in this way i can follow this syntax i can access the keys as well as pairs

// but if we want to access any particular keys and value than we have ot change the syntax

for (const [key, value] of map) { // we have to erite seaparately that we want key and values 
  console.log(key, ':-', value);
  
}

// if we apply the same way on object then this is not the correct way actually 

/*
==================================================
                 map() in JavaScript
==================================================

map() array ke har element par ek function chalata hai
aur EK NAYA ARRAY return karta hai.

Original array ko change nahi karta.


Example:

const nums = [1, 2, 3];

const result = nums.map((num) => {
    return num * 2;
});

console.log(result);

// Output:
// [2, 4, 6]


==================================================
IMPORTANT
==================================================

// map() → ALWAYS returns a new array.

const nums = [1, 2, 3];

const result = nums.map(num => num + 1);

console.log(result);

// [2, 3, 4]


==================================================
map() vs forEach()
==================================================

// map() → new array return karta hai
// forEach() → new array return nahi karta


==================================================
INTERVIEW QUESTION
==================================================

// Q: What is map() in JavaScript?

// Answer:
//
// "map() is an array method that executes a callback
// function on every element and returns a new array
// containing the transformed elements."


==================================================
EASY MEMORY TRICK
==================================================

// map() → Array ke elements ko MAP/TRANSFORM karke
//          NEW ARRAY deta hai.
*/




