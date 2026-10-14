
  /*           Promise
                |
             Pending
             /     \
            /       \
     Fulfilled     Rejected
       resolve       reject
*/









const promiseOne = new Promise(function(resolve, reject){
  // we can do our synchronous work here
  // like connecting DB Server, networking etc

  setTimeout(function(){
    console.log("DB connected successfully");
    resolve(); // jabtak ye nhi likhege tab tak apna resolve or then connect nhi hoga inko connect krne k liye ye line likhana imp hai 
  }, 1000)
})

promiseOne.then(function(){
  console.log("promise successfully consumed");
}) 

// ye tareeka hai promise bnane ka isko ek or tareeke se bn skte hi 

new Promise(function(resolve, reject){

  setTimeout(function(){

  console.log("asynchronous task is completed successfully");
  resolve(); // then se connect karne ka liye 

  }, 1000)

}).then(function(){
console.log("promise is resolved");
}) // ye 2 tareeke hai promise bna k connect krne k */


const promiseThree = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve({user : "krishnakant", email : "krishnachoubey0401@gmail.com "}) // yahan resolve me hamne jo bhi data pass kiya wo easily hame then me function k andar mil gya 
  }, 1000)
})
promiseThree.then(function(user){
 console.log(user);
}) // this can be the example of how async work can be done and the data 
   // comes from any server  


const promiseFour = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error  = true;
    if(!error){
      resolve({username: "krishnakant", password : "123"})
    }
    else{
      reject('ERROR: Something Went Erong');
    }
  }, 1000)
})

promiseFour.then((user) => {
  console.log(user);
  return(user.username); // ye jo return kiya hai isko apan ek or then laga k usme le sakte hai 
  
}).then((username) => {
  console.log(username);
}).catch((error) => {
  console.log(error);
  
}).finally(() => console.log("The Promise is either resolved or rejected")
) // ye chaining hai sabse pehle resolve se data then me lia waha se firse then me or agar koi error hai to usko catch me dediya

// readabiility badhane k liye inko apan nextline me bhi likh sakte hai
// ab agar hame ye then() and catch() wala syntax sahi lag rha hai to ham ise kr sakte hai nhi to ek method or hai

const promiseFive = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = false;
    if(!error){
      resolve({userName : "Pushkaar", password : "123456"})
    }
    else{
      reject('ERROR : pushkar went wrong');
    }
  }, 1000)
})

async function consumePromiseFive(){
  try{
    const response = await promiseFive
    console.log(response);
  } catch(error){
    console.log(error);
  }

}

consumePromiseFive()

// ye dono tareeke hai promise ko resolve or reject krake consume krnane k 
// ek baar dono ka syntax dekh lete hai just to remember these things


const proimiseSix = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = false;
    if(!error){
      resolve({dueAmmount : "25k"});
    }
    else{
      reject('Error: Failed To Get The Due Ammount');
    }
  }, 1000)
})

proimiseSix.then(function(money){
  console.log(money);
}).catch(function(error){
  console.log(error);
}).finally(function(){
  console.log("Your Promise For The Money Is Get Resolved Or Either Geth Rejected");
}) // i just forgot so that i created this  instead of just writing the syntax only

const promiseSeven = new Promise(function(resolve, reject){
  let error = false;
  setInterval(function(){
    if(!error){
      resolve({dueAmmount: "25k"}) // ye object return karte hai apan yahan pe to iska dhyaan dena hai hame aagae cgalke iuski values ko kise variable me lena oadega
    }
    else{
      reject("Error : can't get due ammoount");
    }
  }, 1000)
})

async function consumePromiseSeven(){
  try{
    const response = await promiseSeven;
    console.log(response);
  }
  catch{
    console.log(error);
  }

} // ab iska syntax padh lete haia

const promiseEight = new Promise(function(resolve, reject){
  setTimeout(function(){
    // yahan apna kaam dedete hai jo bhi karana hai or agar wo kaam jo gya to  usko resolve k andar dedete hai nhi to reject k
    let error = true; // maanlo ki error hai
    if(!error){
      resolve(/*yahan jo kaam coplete hone k baad result aya hai wao */ )
    }
    else{
      reject("/*jo error aya hai wo*/")
    }
    

  }, 1000 /* itne milisec baad ye execute hoga*/)
})

promiseEight.then(function(data /*is data me jo resolve se data aya hai wo receive hota hai*/){
  console.log(data);
})
.catch(function(){
  console.log(error /* jo error aya hai usko print kara lete hai catch mai */)

})
.finally(function(){
  console.log(/* ye to chalta hihai chahe kaam poora hojaye ya fir chahe error ajaye */)
})

// this is the syntax of using promisess ab mujhe iske bare me 
// thode theoritical knowledge chahiye hai practical to mene
//  kar liya hai 

fetch('/*iske andar koi bhi url daalni hoti hai jisme se hame data milta hai*/')
.then(function(response){
return response;
})
.then(function(data){
console.log(data);
})
.catch(function(){
  console.log(error);
})