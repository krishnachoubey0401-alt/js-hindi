const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")


/*
==========================================================
        NULLISH COALESCING OPERATOR (??)
==========================================================

The Nullish Coalescing Operator is:

    ??

It is used to provide a DEFAULT VALUE when the value is:

    null
    OR
    undefined


==========================================================
1. BASIC EXAMPLE
==========================================================

let val1;

val1 = 5 ?? 10;

console.log(val1);

// Output: 5

// Why?
// 5 is NOT null and NOT undefined.
// So JavaScript keeps 5.


==========================================================
2. WHEN VALUE IS null
==========================================================

val1 = null ?? 10;

console.log(val1);

// Output: 10

// Why?
// The left side is null.
// So JavaScript takes the value from the right side.


==========================================================
3. WHEN VALUE IS undefined
==========================================================

val1 = undefined ?? 15;

console.log(val1);

// Output: 15

// Why?
// The left side is undefined.
// So JavaScript takes the value from the right side.


==========================================================
4. MULTIPLE ?? OPERATORS
==========================================================

val1 = null ?? 10 ?? 20;

console.log(val1);

// Output: 10

// JavaScript checks from LEFT to RIGHT:
//
// null → null, so skip it
// 10   → valid value, so take 10
// 20   → never needed
//
// Therefore:
// val1 = 10


==========================================================
5. IMPORTANT RULE
==========================================================

// ?? returns the FIRST value that is NOT:
//
// null
// undefined


// Example:

console.log(null ?? undefined ?? 25 ?? 50);

// Output: 25


// Because:
// null      → skip
// undefined → skip
// 25        → take it
// 50        → not needed


==========================================================
6. ?? DOES NOT CHECK ALL FALSY VALUES
==========================================================

This is VERY IMPORTANT.

?? only checks:

null
undefined


It does NOT consider these values nullish:

false
0
""
NaN


Example:

console.log(0 ?? 10);

// Output: 0

// 0 is NOT null or undefined.


console.log(false ?? true);

// Output: false


console.log("" ?? "Hello");

// Output: ""


==========================================================
7. DIFFERENCE BETWEEN ?? AND || 
==========================================================

// || checks for FALSY values.
//
// ?? checks ONLY for null and undefined.


console.log(0 || 10);

// Output: 10

// Because 0 is falsy.


console.log(0 ?? 10);

// Output: 0

// Because 0 is NOT nullish.


console.log(false || true);

// Output: true


console.log(false ?? true);

// Output: false


// So:
//
// || → checks falsy values
//
// ?? → checks null and undefined


==========================================================
8. REAL USE CASE
==========================================================

const username = null;

const displayName = username ?? "Guest";

console.log(displayName);

// Output: Guest


// If username exists:

const username2 = "Rahul";

const displayName2 = username2 ?? "Guest";

console.log(displayName2);

// Output: Rahul


// So ?? is useful when we want:
//
// "Use this value if it exists,
// otherwise use a default value."


==========================================================
9. VERY IMPORTANT INTERVIEW POINT
==========================================================

// Question:
// What is the Nullish Coalescing Operator?

// Answer:
//
// "The Nullish Coalescing Operator (??) is used to provide
// a default value when the left-hand value is null or
// undefined. It returns the first value that is neither
// null nor undefined."


==========================================================
10. YOUR COMPLETE EXAMPLE
==========================================================

let val1;

val1 = 5 ?? 10;
console.log(val1);
// Output: 5


val1 = null ?? 10;
console.log(val1);
// Output: 10


val1 = undefined ?? 15;
console.log(val1);
// Output: 15


val1 = null ?? 10 ?? 20;
console.log(val1);
// Output: 10


==========================================================
FINAL RULE TO REMEMBER
==========================================================

// ?? means:
//
// "If the value is null or undefined,
// use the next/default value."
//
// It returns the FIRST non-null/non-undefined value.
//
// Example:
//
// null ?? undefined ?? 10 ?? 20
//       ↓          ↓
//     skip       take 10
//
// Output: 10
==========================================================
*/