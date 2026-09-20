// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(2)) // 2 to dikkat ye nhi lekin jab apan ko yhi 2 ki jagah bahut saree vlues miljati hai tav 
// first value ko vhhopd ke koi or value print hi nhi hotiise problem ko solve krne k liye we have rest operator jaha hamne apne
// parameters me num1 likha hai waha ham seedhe jake bas ...num1 krdege jese hamne padha tha spread operator me bilkul use tarah 


// function calculateCartPrice(...num1){ // isme jitni bhi values ayegi yw unki array bna k return kr dega to ham loops lga sakte hai 
//     return num1
// }
// console.log(calculateCartPrice(200, 300, 4000))
// or agar ise cheez ko ham ese bhi likh sakte hai ki hamne parameters leliye var1, var2, ...num1 to fir jitni bhi values ham dege
//  unme bas first value and 2nd will go on the particula rvariable and all the others will go in the num1 so that num1 can only
//  able to return his values

// function calculateCartPrice(num1, num2, ...num3){
//     return num3
// }

// console.log(calculateCartPrice(2000, 300, 451, 545, 548, 578));
// In num three it raps all the values from third value 

const user = {
  userName : "kk",
  price : 599
}

function handleObject(anyObject){
  console.log(`user is ${anyObject.userName} and the price is ${anyObject.price}`)
}

//(handleObject(user)) // now the problem comes when the arguments  and  parameters havw the different datatypes so have to make
//  sure that the value exist itn the dta and datatype is matching or not
// now we cal also directly pass object

handleObject({
  userName : "krishnakant",
  price : 55
})

// arrays bhi pass kr sakte hai

const myNewArr = [400, 200, 300, 897]

function handleArr(getarr){
  return getarr[0]
}

console.log(myNewArr);
