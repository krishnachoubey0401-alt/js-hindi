const coding = ["JS", "Ruby", "Java", "Python", "Cpp"]

const values = coding.forEach( (item) => {
//  console.log(item);
} )

// console.log(values); // we just want to know that what this function returns not functions our for each loop 

const numbers = [1, 12, 3, 4, 5, 6, 7, 8, 9, 10]

// filter operation   

// const newNumbers = numbers.filter( (num) => num>4 )  // remember that this filter always returns a value so we have to this value 
// in above line we have to use arrow function then we can write
// console.log(newNumbers); // print all the values that are greater than 4 

const newNumbers = numbers.filter( (num) => { // if we write like this then we cannot get output because because we already discussed this in arrow fn that we putted aroow"{} there so we have declared scope so now we have to return value then it will be stored in variable mannual return 
 return num>4 // this is because of scope that we discussed earlier
} )

// console.log(newNumbers); // now we will get our output 
// If we want to do this same work with the forEach loop then we haaaave to apply if else to push values in a variables

const newnum = []

numbers.forEach( (num) => {
  if(num>4){
    newnum.push(num)
  }
} )

// console.log(newnum); // but at the end we only want to do our work by using any method

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History') // it will print the book whose genre is history 

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History" // remember here we have to return values manually
}) // this will return the books whose genre is history and publish year is >= 1995
  console.log(userBooks);



