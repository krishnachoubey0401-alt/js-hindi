const dost = ['shishupal', 'tarun', 'devraj'];  // ek dost array bnai isme kuch string values li 

const myDost = ['rajeev', 'jatin'];  // ek or array bnai 

//dost.push(myDost); // ye array ko add nhi karta isne jo 2nd array hai usko uthake 1st array me daal dia
//console.log(dost); // output: [ 'shishupal', 'tarun', 'devraj', [ 'rajeev', 'jatin' ] ]

// ek or operation hai jise ham use kr sakte hai jo hai concatination

// const sabdost = dost.concat(myDost); // iska use krke ham proper 2 arrays ko add krsakte hai or wo bas 2nd array k element ko 1st me daal dega
// console.log(sabdost); // output: [ 'shishupal', 'tarun', 'devraj', 'rajeev', 'jatin' ]  isme values ko kise third variable me daalna padta  hai

// lekin hm is se bhi ek easy tareeka use krtw hai jise kehte hai "spread" or han concatanation bas 2 hi array ko concat krta hai ek baar me 

//const sabdost =  [...dost, ...myDost]; // ye tareeka jyadatar use kiya jata hai kyuki isme agar or values hoti to ham , ... krke baki ko bhi add kar skte the 
//console.log(sabdost); // output: [ 'shishupal', 'tarun', 'devraj', 'rajeev', 'jatin' ]

// flat() method

const array = [1,2,3,[4,5,6],7,[8,9,6,[4,5,6]]]; // agar kabhi esa case ajaye jisme array k andar array k andar array ho to ye use flat() method
const real_another_array = array.flat(Infinity); // isme hame value deni hoti hai ki kitni depth chahiye lekin ham infinity de sakte hai
console.log(real_another_array); // output: [
 //                                          1, 2, 3, 4, 5, 6,
 //                                          7, 8, 9, 6, 4, 5,
//                                           6
//                                          ]

console.log(Array.isArray("Krishnakant")); // puch sakte hai esa krke ki ye array apne pass hai ya nhi to  true ya false me ans a jayega
// output: false

console.log(Array.from("Krishnakant"));  // isse ye inhi characters matlab mere naam ki array bna dega aap chahe or bhi object ya arrays de sakte hai
/* output: [
  'K', 'r', 'i', 's',
  'h', 'n', 'a', 'k',
  'a', 'n', 't'
]
*/

console.log(Array.from({name : "krishnakant"})); // ab isme hame btana hoga ki ye kese karna hai key value me ya kuch or karke agar sasme run krege to ye nhi bna payega array
// output: []

// ab maanlo hamare pass bahut sare marks hai or ham chate hai ki unki ham ek array bna de to we can use: 

let marks1 = 100;
let marks2 = 200;
let marks3 = 300;
let marks4 = 400;

console.log(Array.of(marks1, marks2, marks3, marks4));  // ye sab ko ek hi array me add kar deta hai 
// output: [ 100, 200, 300, 400 ]



