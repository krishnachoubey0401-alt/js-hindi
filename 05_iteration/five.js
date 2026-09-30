const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNums = numbers.map( (num) => {return num*10} )

// const newNums = numbers
// .map( (num) => {return num*10} )
// .map( (num) => {return num+1} )
// .filter( (num) => {return num>30 && num<100} )
// agar yahan apan bar bar return na bhi likhe to bhi chalwga but we have to remove curly brackwts

const newNums = numbers
.map( (num) => num*10 )
.map( (num) =>  num+1 )
.filter( (num) => num>30 && num<100 )

console.log(newNums);


