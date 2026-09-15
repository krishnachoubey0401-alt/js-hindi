
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                         DATES
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


/*
new Date()
-> Current date and time deta hai.
*/

let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


/*
IMPORTANT:

typeof new Date() -> "object"

Date JavaScript me ek OBJECT hai.
*/


/*
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                  CREATING A DATE
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

new Date(year, month, day)

IMPORTANT:
Month 0 se start hota hai.

0  -> January
1  -> February
2  -> March
...
11 -> December
*/


// let myCreatedDate = new Date(2023, 0, 23)

// console.log(myCreatedDate.toLocaleString());


// Date with time

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)


// Date using String

// let myCreatedDate = new Date("2023-01-14")

let myCreatedDate = new Date("01-14-2023")

// console.log(myCreatedDate.toLocaleString());



/*
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                    TIMESTAMP
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Date.now()
-> Current time ko milliseconds me return karta hai.

1970-01-01 se ab tak ke milliseconds.
*/

let myTimeStamp = Date.now()

// console.log(myTimeStamp);


/*
getTime()
-> Kisi specific Date ka timestamp milliseconds me deta hai.
*/

// console.log(myCreatedDate.getTime());


/*
Seconds me timestamp:

Date.now() / 1000

Math.floor() decimal hata deta hai.
*/

// console.log(Math.floor(Date.now()/1000));



/*
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                  DATE METHODS
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/

let newDate = new Date()

console.log(newDate);


/*
getMonth()
-> Month 0 se start hota hai. */