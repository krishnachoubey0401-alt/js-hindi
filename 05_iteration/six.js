const myNums = [1, 2, 3];

// const total = myNums.reduce((accumulator, currentvalue) => {
//   console.log(`acc: ${accumulator}, curr: ${currentvalue}`);
//     return accumulator + currentvalue;

// }, 0); // 0 = initial value of accumulator

/*
reduce():
- accumulator → result ko store karta hai
- currentvalue → current array element
- 0 → accumulator ki starting value

Step:
0 + 1 = 1
1 + 2 = 3
3 + 3 = 6

total = 6

Interview:
Q: reduce() kya karta hai?
A: Array ke elements ko reduce karke ek single value return karta hai.
*/
// console.log(`acc: ${accumulator}, curr: ${currentvalue}`);
// now we can do the same works with different loops its ur choice that which loop do u want to use

// same thins using arrow function

const total = myNums.reduce( (acc, curval) => acc+curval, 0 )
// console.log(total);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
] // yahan acc=> accumulator hai or itrm har ek object ko point kr rha hai

const totalCprice = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )
console.log(totalCprice)







