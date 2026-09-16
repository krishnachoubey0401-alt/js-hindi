// object ko create krne k 2 ways hai 1st as literals and 2nd is as constructor ab isme ek term hota hai singlton 
// rememver imp** : when we create our object as literal to singleton nhi banta hai or jab constructor se create krege tab ye singleton ban jata hai

// singleton
// Object.create  ese constructor declare hote hai ese krte hai jab singleton banta hai

// object literals

const mySym = Symbol("key1") // agar koi symbol define krna hai to ese kiya jata hai
// console.log(typeof mySym);  // output : symbol  agar or kise tarah se krege to ye datatype symbol create nhi hoga


// ye tareeka hai object as a literals create krne ka
const JsUser = {
    name: "kkant",
    "full name": "Kkant Choubey", // "full name" ese create na bhi kre to bi chalega bas esa isliye jruri hai kyuki agar kise ne is tarah se create kr diya to .okperator se access nhi kr sakte fir JsUser["full name"] krke hi access kr sakte hai
    [mySym]: "mykey1",
    age: 20,
    location: "Jallandhar",
    email: "krishnachoubey@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// jab ham object ko print krate hai to usme alag se symbol likha bhi ayega agar pehle symbol create krke fir object me bnayege to 

// console.log(JsUser.email)    // object ko acces krne k ye dono ways ane chahiye pehla yhi 2nd JsUser["email"] esa isliye kyuki apan jo email : --- likh dete hai
// console.log(JsUser["email"]) // wo bhi andar matlab "email" : "---" ese hi hota hai bas ham ese hi likh dete hai ab wo do tareeke isliye aane chahiye ki agar 
// console.log(JsUser["full name"]) // kabhi jesa fullnaem declare kiya hai esa kr diya to only 1 hi way hai acces krne ka jese apan kr rhe hai iske alawa .operator ka use krke bhi nhi kr sakte 
// console.log(JsUser[mySym]) // agar object k andar kise symbol ko declare krna hai to wo bhi jese uper kiya we hi kr sakte hai otherwise direct agar object k andar 
                          // krege to uska type string hi hoga symbol nhi jo ki apan type check krke dekt sakte hai

// agar koi  value badalni hai to 

// JsUser.email = "kkant@falanadhimka";
// console.log(JsUser["email"]);  // output: successfully change ho gya by kkant@falanadhimka

// // Ab agar hame kabhi bhi kise object ko esa krna hi ki uski values change na ho to usko apan freeze bhi kr sakte hai 

// Object.freeze(JsUser);  // ab iske baad ham kuch bhi change krege to wo ni hoga 
// Object.name = "kk";
// console.log(JsUser);   // koi change ni hoga or error bhi nhi ayega agar change krne ki koshish kroge to 

JsUser.greeting = function(){
  console.log("hello choubey ji");
}

// console.log(JsUser.greeting);  // output : [Function (anonymous)] ye bahut imp hai isko aage padhege function return aya hai execute nhi hua hai
console.log(JsUser.greeting()) // ese me shi output dega
// console.log(JsUser); // uper apan ne greetin add kiya tha object me whi check kr rha tha to key to a rhe hai lekin value me same function anonumous arha

JsUser.greetingTwo = function(){
  console.log(`hello my brother, ${this.name}`); // esa krne se matlab ye ek or way hai bacticks use krke krne ka isko bolte hai stringinterpolation
}

console.log(JsUser.greetingTwo());

// bas yaad rakhna ki in function k andar k parameters ko ham 2 tarekke se access kr sakte hai .operator lagak or direct console.log(JsUser[])