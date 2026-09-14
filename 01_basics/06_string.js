
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                    STRING IN JAVASCRIPT
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//
// JavaScript me String ko mainly 2 tarah se likh sakte hain:
//
// 1. Primitive String
// 2. String Object
//
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// ====================== 1. PRIMITIVE STRING ====================

const name = 'kkant'

console.log(name)
console.log(typeof name) // string


// Ye ek PRIMITIVE STRING hai.
//
// JavaScript me string likhne ka ye normal aur recommended way hai.
//
// Example:
//
// const name = 'kkant'
//
// Yahan name ke andar actual primitive string value hai.
//
// Primitive datatypes:
// String
// Number
// Boolean
// null
// undefined
// Symbol
// BigInt
//
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// ====================== 2. STRING OBJECT =======================

const gameName = new String('kkant')

console.log(gameName)
console.log(typeof gameName) // object


// Yahan 'kkant' ko String object ke andar wrap kiya gaya hai.
//
// new String('kkant')
//        ↑
//      String constructor
//
// Isliye typeof gameName "object" deta hai.
//
// IMPORTANT:
// new String() normally use karne ki zarurat nahi hoti.
//
// Normal string ke liye:
//
// const name = 'kkant'
//
// ye hi likhna better hai.
//
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// ====================== 3. DONO ME MAIN DIFFERENCE ===========

const nameOne = 'kkant'
const nameTwo = new String('kkant')

console.log(nameOne)
console.log(nameTwo)


// Dono ko console me dekhne par content same lagega:
//
// kkant
// kkant
//
// Lekin technically dono same nahi hain.
//
// nameOne → Primitive String
// nameTwo → String Object
//
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// ====================== 4. typeof =================================

console.log(typeof nameOne)
// "string"

console.log(typeof nameTwo)
// "object"


// Ye difference bahut IMPORTANT hai.
//
// Primitive String:
// typeof → "string"
//
// String Object:
// typeof → "object"
//
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// ====================== 5. === SE COMPARISON ===================

console.log(nameOne === nameTwo)
// false


// Kyunki:
// nameOne → primitive string
// nameTwo → object
//
// Dono ka content "kkant" hai,
// lekin dono same type/category ke nahi hain.
//
// Isliye strict equality (===) false deti hai.
//
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// ====================== 6. STRING METHODS ======================
//
// Primitive string ke saath bhi hum methods use kar sakte hain.
//
// Example:

const userName = 'kkant'

console.log(userName.length)
// 5

console.log(userName.toUpperCase())
// KKANT

console.log(userName.toLowerCase())
// kkant


// IMPORTANT:
// Yahan userName primitive string hai,
// phir bhi hum .length aur .toUpperCase() use kar pa rahe hain.
//
// JavaScript automatically primitive string ko temporarily
// String object ki tarah treat karta hai taaki methods use ho saken.
//
// Isliye hume manually:
//
// new String()
//
// karne ki zarurat nahi hoti.
//
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// ====================== 7. new String() KAB USE KARE? ==========
//
// Beginner level par:
//
// new String()
//
// ko avoid karo.
//
// Normal string ke liye:
//
// const name = 'kkant'
//
// use karo.
//
// Ye simple bhi hai aur JavaScript me standard/recommended
// approach bhi hai.
//
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// ====================== 8. IMPORTANT CONCEPT ===================
//
// String primitive:
//
// const name = 'kkant'
//
// → Primitive datatype
// → typeof = "string"
// → Normal/recommended way
//
//
//
// String Object:
//
// const name = new String('kkant')
//
// → Object
// → typeof = "object"
// → Usually avoid karna hai
//
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// ====================== 9. STACK / HEAP SE CONNECTION =========
//
// Beginner level par tum primitive values ko Stack ke saath
// aur objects ko Heap ke saath relate karke samajh sakte ho.
//
// Lekin IMPORTANT:
//
// "Primitive hamesha Stack me hota hai"
// "Object hamesha Heap me hota hai"
//
// ko JavaScript ka strict rule mat samajhna.
//
// Ye sirf memory ko samajhne ka simplified model hai.
//
// Actual important concept:
//
// Primitive → VALUE
// Object    → REFERENCE TO OBJECT
//
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// ====================== 10. FINAL REVISION =====================
//
// Agar interview ya revision me poocha jaye:
//
// const name = 'kkant'
//
// aur
//
// const gameName = new String('kkant')
//
// me kya difference hai?
//
// Answer:
//
// name ek primitive string hai,
// jabki gameName ek String object hai.
//
// typeof name       → "string"
// typeof gameName   → "object"
//
// Normal JavaScript programming me:
// 'kkant'
//
// use karna preferred hai.
//
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//
//                 🧠 ONE-LINE MEMORY TRICK
//
// 'kkant'
//    ↓
// Primitive String
//
// new String('kkant')
//    ↓
// String Object
//
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

