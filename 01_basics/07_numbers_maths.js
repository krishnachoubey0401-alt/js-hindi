

/*
============================================================
              JAVASCRIPT NUMBER & MATH
============================================================

NUMBER
------------------------------------------------------------

Number is a primitive data type.

`new Number(100)` -> Number object
Normal use:
    const balance = 100
*/


const score = 400

// console.log(score);


const balance = new Number(100)

// console.log(balance);


/*
toString()
-> Number ko String me convert karta hai.

100 -> "100"
*/

// console.log(balance.toString().length);


/*
toFixed(n)
-> Decimal ke baad n digits rakhta hai.
-> Result String hota hai.

Example:
10.456.toFixed(2) -> "10.46"
*/

// console.log(balance.toFixed(1));


const otherNumber = 123.8966

/*
toPrecision(n)
-> Significant digits control karta hai.

Example:
123.8966.toPrecision(4) -> "123.9"
*/

// console.log(otherNumber.toPrecision(4));


const hundreds = 1000000

/*
toLocaleString('en-IN')
-> Indian number format.

1000000 -> 10,00,000
*/

// console.log(hundreds.toLocaleString('en-IN'));



/*
============================================================
                        MATH
============================================================

Math.abs(-4) -> 4
Math.round(4.6) -> 5
Math.ceil(4.2) -> 5
Math.floor(4.9) -> 4
Math.min(4, 3, 6, 8) -> 3
Math.max(4, 3, 6, 8) -> 8

ceil  -> upar
floor -> neeche
*/


// console.log(Math);

// console.log(Math.abs(-4));

// console.log(Math.round(4.6));

// console.log(Math.ceil(4.2));

// console.log(Math.floor(4.9));

// console.log(Math.min(4, 3, 6, 8));

// console.log(Math.max(4, 3, 6, 8));



/*
Math.random()
-> 0 se <1 ke beech random decimal deta hai.
*/

console.log(Math.random());


/*
1 se 10 random integer:

Math.floor(Math.random() * 10) + 1
*/

console.log((Math.random()*10) + 1);

console.log(Math.floor(Math.random()*10) + 1);



/*
MIN-MAX RANDOM INTEGER
------------------------------------------------------------

Formula:

Math.floor(Math.random() * (max - min + 1)) + min

Example:
min = 10
max = 20

-> Random integer: 10 to 20
-> min aur max dono included hain.
*/


const min = 10

const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);



/*
============================================================
QUICK REVISION

toString()       -> Number to String
toFixed(n)       -> Decimal places
toPrecision(n)   -> Significant digits
toLocaleString() -> Number formatting

Math.abs()       -> Absolute value
Math.round()     -> Nearest integer
Math.ceil()      -> Upar
Math.floor()     -> Neeche
Math.min()       -> Smallest
Math.max()       -> Largest
Math.random()    -> 0 to <1

Random integer:
Math.floor(Math.random() * (max - min + 1)) + min
============================================================
*/

