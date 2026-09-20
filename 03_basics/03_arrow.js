const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // this refer krta hai current context ki jese abhi ye ek function k andar hai to iska context function hai
    }

}

// user.welcomeMessage()  
// user.username = "sam"
// user.welcomeMessage() this.username isiliye likha tha ki kabhi koi agar value change karta hai to changed value hi print ho purani na ho

// console.log(this); // this kaamkrta hai bblock k andar ab abhi koi scope hi nhi hai to ye output dega object yanji => {}
/* ab dikkat ati hai unko the ones who practiced js on browser inspect or when u do this same thing in google or browser it will give 
output as window  */
// REASON BEHIND THE DIFFERENCE:

const obj = {
    fun: function () {
        console.log(this);
    }
};

//obj.fun();

// Here, fun() is called using obj.
// Therefore, JavaScript sets:
// this = obj
//
// So console.log(this) prints the object.
// If the object has no normal properties, it may appear as:
// {}


// But in the browser console:

//console.log(this);

// Here, you are directly at the browser's global level.
// There is no object calling a function.
//
// Therefore:
// this = window
//
// So the output is:
// Window


// KEY POINT:
// this is decided by HOW the function is called.
//
// obj.fun()  →  this = obj
// Browser top level → this = window

// function chai(){
//   username : "kkc",
//   console.log(this.username);
// }

// chai(); // output => undefined this was because this can be used inside an object only if wi access this inside any 
// functon then this will definately give output as undefined


// const chai = () => { this is a type of arrow function 
//   username : "kkc",
//   console.log(this.username); // yaha bhi error is same as undefined 
// }

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(2, 3))  agar {} inke andar likhege to return likhna padeg lekin agar () inke andar likha to same line me hi ( )inke andar  num1 + num2 kar sakte hai 


// const addTwo = (num1, num2) => num1 + num2 
// console.log(addTwo(2, 3)) // ese bhi likh sakte haii or num1 and 2 ko parenthesis k andar bhi likh sakte hai esa isliye nhi likhte hai because what will happen if we have to return object it will throw undefined thats why we prrefer to use parenthesis

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({userName : "Pushkar"})
console.log(addTwo(2, 3)) // output => { userName: 'Pushkar' }

/* “What is this in JavaScript, and how does it behave in different types of functions?”

// Interview Answer:
//
// `this` is a special keyword in JavaScript that refers to the
// object/context associated with the current function call.
//
// Its value is NOT simply determined by where the function is written.
// It depends on HOW the function is called.
//
// 1. Regular function:
const obj = {
    name: "John",
    greet: function () {
        console.log(this);
    }
};

obj.greet();
// this → obj
//
//
// 2. Arrow function:
//
// Arrow functions do NOT have their own `this`.
// They inherit `this` from their surrounding (lexical) scope.
//
// 3. At the browser's top level:
console.log(this);
// this → window
//
//
// 4. Constructor function:
function Person(name) {
    this.name = name;
}

const p1 = new Person("John");
// Here, `this` refers to the newly created object.
//
// KEY INTERVIEW POINT:
//
// `this` is NOT limited to regular functions.
// Regular functions have their own `this` depending on how they are called.
// Arrow functions don't have their own `this`; they inherit it from
// the surrounding scope.

*/ 