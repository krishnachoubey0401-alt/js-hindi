const coding  = ["C++", "Java", "Python", "Ruby", "PHP", "Javascript"]

// coding.forEach( function(items){ // this is the basic of for each function in which we passed function and inside a name it can be anyathing it was like same as like we write i in various loops this is also same it is also used for iteration
//   //console.log(items);
  
// } )
// // now we cAN ALSO PASS A arrow function
// coding.forEach( (item) => {
//   // console.log(item); we can also get more values from this loop not only the values we can get indec, full array
  
// })

// function printme(item){
//   console.log(item);
// }

// coding.forEach(printme)  // this loop only wants a callback function to just do some work

// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr); // in every line until we execute each and every value it will print array item index and then full array
  
// });

const myArr = [
  {
    languageName: "javascript",
    languagefile : "JS"
  },
  {
    languageName: "Python",
    languagefile : "PY"
  },
    {
    languageName: "java",
    languagefile : "J"
  },
    {
    languageName: "c++",
    languagefile : "c++"
  }
]

myArr.forEach( (item) => {
  console.log(item.languageName, item.languagefile);
  
} )












