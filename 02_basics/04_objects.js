//+++++++++++++++++++++++++++++++++++++++
// objects as literals

//  // ye tareeka ho gya as a constructor declare krne ka 
// console.log(tinderUser); // output: {}

 const tinderUser = {}  // ye bhi same output hi dega  

tinderUser.id = "123abc";
tinderUser.name = "kk";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);
// console.log(typeof isLoggedIn);

// Here we can also create object inside objects for eg: 

const regularUser = {
  email : "kk@falana",
  fullname : {
    userFullName : {
      firstName : "krishnakant Choubey",
      lastName : "Choubey",
      mobileNo : 7489908421
    }
  } 
}

// console.log(regularUser.email, regularUser.fullname.userFullName.lastName); // ese krke ham nested objects create kr sakte hai or by following this syntax ham unko access kr sakte h

// there is also one "optional Chaining" exist which is used like suppuse in line 28 if userFullName doesnt exist then we add ? just after userFullName it will help and protect jab API se response ata hai tab ye use krna
// padta hai ki maanlo agar userfullname exist hi na karta ho aage jake padhege isko ham =>

const obj1 = {1: "a", 2: "b"} // creating object whi same cheez kr rhe jo arrays me ki thi dono objects ko 
const obj2 = {3: "a", 4: "b"}

// const obj3 = {onj1, obj2} ese to kar ni sakte output ka syntax hi change ho jayega jesa change chahiye hai wesa bhai ho payega

const obj3 =Object.assign({}, obj1, obj2); // object.assign is a static method that copies all enumerable own properties from one or more source objet and returns it to a target object
// console.log(obj3);

// const obj3 =Object.assign({}, obj1, obj2); isme apan ne ek {} diya hai isko target bolte hai iska matlab ye hai ki abjo apne object 1 and 2 hai wo isme ja rhe hai wese isko 
// lagana compulsory nhi hai agar nhi lagayege or ye esa dikha  ......const obj3 =Object.assign(obj1, obj2);.... to fir sari values 
// obj 1 me chali jayegi to bas seaparate krne k liye bas esa kr rhe the or kuch nhi 

// ab ham jyada isko bhi use nhi krege ham jyadatar sabse simple and easy spread use krege

const user = [ // kabhi kabhi hamare pass users ki ek list ayegi array k form me jo ki is tarah hogi or hame
  {             // ise pr apne operation krne hoge is array k andar bahut sare object honge jinme users ka data hoga
    id : "123abc",
    email : "kk@gmail"
  },
  {
    id : "23abc",
    email : "kkc@gmail"
  },
  {
    id : "3abc",
    email : "kkchoubey@gmail"
  }
  
]

// console.log(user); // it will print the user array
// console.log(user[1].email); // user array me jake or waha first indes pr jo bhi values hai unme se email ko with value print kro

//console.log(Object.keys(tinderUser)); // tinder object me jitne bhi keys hai wo sab print krao jab bhi ham 
// object.key() chalate hai to ise pta nhi rehta hai kis object ki baat ho rhi hai to hame naam deke btana padta hai ki is object ki baat kr rhe hai
 
// output: iska output jo ayega wo ek array k format ayega isme simply saree keys ko ek arrays me dala or unko return kr diya 
// so it is very important because in future if we hame to apply loop on these keys then we can simply apply and perform opetations

// console.log(Object.values(tinderUser)); // same tareeke se values ko bhi access kr sakte hai

//console.log(Object.entries(tinderUser)); // isme har ek key or uski value ko ek singe array me rap kr diya jata hai
//output : [ [ 'id', '123abc' ], [ 'name', 'kk' ], [ 'isLoggedIn', false ] ] yahan har ek key or usi value ko seaparate array me daal diya or un sab arrays ko ek nyi array me daal diya

// console.log(tinderUser.hasOwnProperty('isLoggedIn')) // kabhi hame server se ayi hue values ko print karana hota hai ab agar hamne print kraya or manlo vo value hamare pass dwo value ayi hi na ho 
// to apan by following this syntax we can check agar hogi to boolean me ans ajayega crash bhi nhi hoga 

// console.log(tinderUser.hasOwnProperty('isLogged')) // ab is naam ki koi key nhi hai to ans ayega false 

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//object destructor k bare me janege
// Destructuring is a way to extract values from arrays or objects and store them in variables
//  using a shorter syntax.

const course = {
  Name : "javascript seekho reyy",
  charges : 999,
  courseInstructor : "hitesh Masaab"
}

// destructuring

 const {courseInstructor} = course // syntax : sabse pehle ham likhege const {} = course object kaa naam --> course hai or {inke andar jo property ko destructure kr rhe hai vo likhege jese }
// {courseInstructor} to ab hame bar bar likne ki jrurat nhi hai ki course.courseInstructor courseInstructor ko access krne k liye ab ham course. lagane ki jrurat nhi hai 

// console.log(courseInstructor); // output : hitesh Masaab


// iske baad bhi agar u fell that courseInstructor is too big then ab courseInstructor : instructor ya or bhi kuch likh sakte ho jo jada bda na ho 
const {courseInstructor : instructor} = course  // colon lagake doosra naam bhi de diya 
// console.log(instructor); // output : hitesh Masaab ab yhi kaam hamara hamne instructor likh k kar liya

// ye hogyi objects ki destructring ab ham yahan array ki bhi sekhege lekin wo itni jyada imp nhi hoti 


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// {
//   "name" : "krishnakant",
//   "courseName" : "js in hindi",
//   "price" : "free"
// // ye is tareeke se json ka data rehta hai ab kabhi kabhi API is format me na milke array k format me bhi mile hai
// }

// array format 
// ek api bahut famous hai google  pr kabhi jarurat padhi to ham use kr sakte hai name : random user me api 
// ab jab apan yahan se data uthate hai to hame kuch samagh nhi ata to hame pehle thod time spend krke beth k dekhna
// padta hai samaghna padta hai ==> iske liye bhi tools availabl ehai jaha jake ham randomuse me api se data leke ayege or usko tools pe paste krke usko short me samagh sakte hai
// tool name : jsor formatter apan khud ka bhi ek esa tool bna sakte hai 

// [
//   {},
//   {},
//   {},
// ] isme bhi array format me mil sakta hai hme data 

console.log(tinderUser);
