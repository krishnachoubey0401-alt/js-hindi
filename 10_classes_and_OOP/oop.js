/*
OOP (Object-Oriented Programming)

OOP is a programming paradigm that organizes code around
objects containing data (properties) and behaviour (methods).

JavaScript supports OOP using objects, prototypes, and classes.

Four Main Principles of OOP:

1. Encapsulation:
   Bundling data and related methods together and controlling
   access to the data when needed.

2. Abstraction:
   Hiding unnecessary implementation details and showing
   only essential functionality.

3. Inheritance:
   Allowing one class to reuse properties and methods
   of another class.

4. Polymorphism:
   Allowing the same interface or method to exhibit
   different behaviours in different situations.

Interview Answer:
OOP is a programming paradigm that organizes code around
objects containing data and behaviour. JavaScript supports
OOP through objects, prototypes, and classes.
Its four main principles are encapsulation, abstraction,
inheritance, and polymorphism.
*/


const user = {
  userName : "krishnakant",
  loginCount : 8,
  signedIn : true,

  getUserDetails : function(){
   console.log("Got user details from the database");
   console.log(`username : ${this.userName}`);// ye this btata hai ki current context ki baat ho rhi hai
  // but is this k andar hota ka hai ? 
  console.log(this)
  /* output : {
  userName: 'krishnakant',
  loginCount: 8,
  signedIn: true,
  getUserDetails: [Function: getUserDetails]
} */
  

  }
}

console.log(user.userName);
console.log(user.getUserDetails());

// yahi agaar this ko yahan orint kraye to yaha current context kya hai ?

console.log(this); // {} 
// yhi browser pr print krayege to window ans ayega kyuki browser me bahut sare cheeze hoti hai

Constructor keyword = new

 function user(userName, logInCount, isLoggedIn){
  this.userName = userName;
  this.logInCount = logInCount;
  this.isLoggedIn = isLoggedIn;
  return this;
 }

const userOne = user("krishnakant", 5, true);
console.log(userOne);

const userTwo = user("pushkar", 4, false);
console.log(userTwo);

console.log(userOne); // ab ika output to user one wala data 
// ana chahiye lekin nhi jo apan ne userTwo bnaua tha usne 
// override kr diya one ko isiliye ham use krte hai constructor
// keywoerd new iska kaam bas itna hai ki ye ek new context bna
// deta hai matlab ek alag jagah dedeta hai jis se cheeze override
// nhi hoti ab agarham likhe userOne = new user() to override ka issue
// nhi ayega or wojo faltu ka data print ho rha tha new likhne se wo alag context me rha or jo ye data hai uska ek nya context bn gya 

// new use krne k baad return likhne ki bhi jarurat nhi  hai ye return karta hi hai

// new : jeese hi new likhte hai ek empty {} object create hota hai usko instance bola jata hai
// constructor function call hota hai or jo bhi data h arguments hai inko uske andar pack krta hai or dedeta hai
// ye jo this keyword hai iske andar argument inject ho jate hai 
// mil jate hai function k andar 

// user object k andar jake ham method bhi likh sakte hai 

// this.greeting = function(){
//   console.log(`welcome ${this.userName}`)
// } jab bhi nya user bnayege to ye bhi call hojayegi 

// please serch one about constructor

// javascript prototype inheritanse show krti haiska matlab agar ham 
// data dhunde or wo current functoin mena mike to ye apne parent me find kregi
// fir grandparent me fir grandgrand me ese hi krke solution
// ye chheez chalti rehte hai or agar kabhi wo data nhi mila to null return ho jata hai

// jese array me find kiya hamne kuch nhi mila to wo ek object ko point krega or isme hua ti thuk nhi to null
// isme har ek cheez object hai for ex: array array bhi hai or object bhi function khud function to hai hi lekin object bhi hai string ka bhi same funda hai

// array ka prototype object object ka null same function ka object => null string =>object => null

function createUser(userName, score){
  this.userName = userName;
  this.score = score
}
// ab hamepta hai ki ye function bhi ek tarah se object hi hai 

createUser.prototype.increment = function(){
  //score++ // abhame ye nhi pta kiska score  ++ krna hai to isliye 
          // yahan ham this ka use krege ustime jiski bhi baat ho rhe ho jo bhi context ho uska score ++ kr dena
this.score++;

}
const chai = createUser("chai", 25)
const tea = createUser("tea", 250) 



