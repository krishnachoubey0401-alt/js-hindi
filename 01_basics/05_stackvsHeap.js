
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Yahan apan samjhenge ki JavaScript me Primitive aur Non-Primitive
// values ko assignment karne par kya hota hai.
//
// Primitive Datatypes ke 7 types hote hain:
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt
//
// IMPORTANT:
// Primitive ko ek variable se dusre variable me assign karne par
// value ki COPY milti hai.
//
// Isliye agar dusre variable ki value change karege,
// to pehle variable ki value change nahi hogi.
//
// Example:
// let a = 10
// let b = a
// b = 20
//
// yahan 'a' ki value 10 hi rahegi aur 'b' ki value 20 ho jayegi.
//
// Beginner level par hum primitive values ko Stack memory se
// relate karke samajh sakte hain.
//
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//
// Non-Primitive / Reference Datatypes:
// Array
// Object
// Function
//
// Inke case me jab ek variable ko dusre variable me assign karte hain,
// to poora object/array/function copy nahi hota.
//
// Dono variables same object ko refer karte hain.
//
// Isliye agar ek variable ke through object ke andar ki value change
// karege, to same object ko refer karne wale dusre variable me bhi
// change dikhai dega.
//
// Beginner level par hum objects/arrays/functions ko Heap memory se
// relate karke samajh sakte hain.
//
// IMPORTANT:
// "Primitive = Stack" aur "Object = Heap" ko absolute JavaScript rule
// mat samajhna. Ye memory ko samajhne ke liye simplified mental model hai.
//
// Sabse important cheez yaad rakho:
//
// Primitive  → value ki copy
// Object     → reference ki copy
//
// Technically JavaScript ko "pass-by-reference" kehna completely
// accurate nahi hai. JavaScript pass-by-value hai.
// Object ke case me jo value copy hoti hai, wo object ka reference hota hai.
//
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// example of heap memory ++++++++++++++++++++++++++++++++++++++++++++++++++++++

let userOne = {
  email : "krishnachoubey@gmail",
  upi : "7489@icici",
  age : 25
}

let userTwo = userOne;
userTwo.email = "kkant@gmail"


// console.log(userOne.email);
// console.log(userTwo.email);


// Yahan userOne aur userTwo same object ko refer kar rahe hain.
//
// userTwo = userOne
// Iska matlab ye nahi hai ki poora object copy ho gaya.
//
// Conceptually:
//
// userOne ─────┐
//              ↓
//          [ same object ]
//              ↑
// userTwo ─────┘
//
// Isliye jab userTwo.email ko change kiya,
// to userOne.email me bhi change dikhai diya.
//
// console.log(userOne.email); // kkant@gmail
// console.log(userTwo.email); // kkant@gmail
//
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// example of stack memory +++++++++++++++++++++++++++++

let emailOne = "krishnakant@gmail"
let emailTwo = emailOne;
 emailTwo = "kkant@gmail"

console.log(emailOne);
console.log(emailTwo);


// Yahan emailOne ek primitive value store kar raha hai.
//
// let emailTwo = emailOne
// karne par emailTwo ko emailOne ki value ki COPY milti hai.
//
// Conceptually:
//
// emailOne → "krishnakant@gmail"
// emailTwo → "krishnakant@gmail"
//             ↑
//          alag copy
//
// Ab jab:
// emailTwo = "kkant@gmail"
//
// kiya, to sirf emailTwo ki value change hui.
//
// emailOne ki value same rahi.
//
// Output:
// krishnakant@gmail
// kkant@gmail
//
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//
// FINAL THING TO REMEMBER:
//
// Primitive:
//     Copy of VALUE
//
// Object / Array / Function:
//     Copy of REFERENCE
//
// Stack vs Heap:
//     Is concept ko samajhne ke liye useful simplified memory model.
//
// JavaScript me sabse important difference:
//     VALUE vs REFERENCE
//
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

