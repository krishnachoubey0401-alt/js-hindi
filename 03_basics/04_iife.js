// Immeadiately Invoked Function Expression (IIFE)
/*
IIFE = Immediately Invoked Function Expression

It is a function that is:
1. Created
2. Immediately executed (called)

Example:

(function () {
    console.log("Hello");
})();

Here, the function is created and immediately called.

Simple meaning:
"IIFE is a function that runs immediately after it is created."

Why use it?
→ To execute code immediately.
→ To keep variables/functions inside the function and avoid polluting the global scope.
*/

// Some times we only wants that whenever we start application we want that our database suddenly connects to the application so this can ce used in different plases as well 

/* // WITHOUT IIFE

const name = "John";
const age = 20;

function greet() {
    console.log("Hello");
}

// Ye sab global scope mein available hain.
// Agar project bahut bada hai, to bahut saare
// variables/functions global scope mein aa sakte hain.
//
// Isse:
// 1. Name conflict ho sakta hai.
// 2. Kisi aur code ka variable same naam ka ho sakta hai.
// 3. Global scope unnecessarily polluted ho sakta hai.


// WITH IIFE

(function () {
    const name = "John";
    const age = 20;

    function greet() {
        console.log("Hello");
    }

    greet();
})();

// name, age aur greet() ab IIFE ke andar hain.
// Bahar directly access nahi kar sakte.
//
// console.log(name);  // Error
//
// Isliye IIFE apne variables ko private/local scope mein
// rakhne mein help karta hai.


// INTERVIEW ANSWER:
//
// "IIFE is used to immediately execute a function and to create
// a private scope, so that its variables and functions don't
// unnecessarily pollute the global scope." */

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( () => {
    console.log(`DB CONNECTED TWO`);
} )(); // bina naa ka ek arrow function bhi bna sakte hai or agar apan chahe to isme ek value bhi de sakte hai jese binaam naam wale function me apna naam bhi print kara sakte hai 

// ye bilkul simple hai as we learned in previous lecture that we can rap curly bracket in a parenthesis so we can write

(() => {
  console.log("hello kk ") // one very imp thing whenever we write this type of function 
} )()

/*
// QUESTION:
// Why do we put a semicolon after an IIFE when writing another IIFE?

// ANSWER:
// The semicolon is used to clearly separate the first IIFE
// from the next IIFE.

// Without the semicolon, JavaScript may treat the second IIFE
// as a continuation of the first statement, which can cause an error.

// Therefore, when writing multiple IIFEs together, we use `;`
// to separate them.

(() => {
    console.log("DB CONNECTED TWO");
})();

(() => {
    console.log("hello kk");
})();

// Remember:
// ; = separates the two IIFE statements.*/