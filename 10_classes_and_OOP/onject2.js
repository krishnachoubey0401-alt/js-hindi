
// ==========================================
// 1. Object.getOwnPropertyDescriptor()
// ==========================================

// Bhai, maan le humein kisi object ki property ke rules
// check karne hain. Jaise value change ho sakti hai ya nahi.

// Iske liye hum use karte hain:
// Object.getOwnPropertyDescriptor(object, "propertyName")

// Example:

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descriptor);

// Math.PI = 5 karne par PI ki value change nahi hoti.
// Kyunki Math.PI ki writable property false hai.
//
// Matlab JavaScript mein kuch properties ke apne rules hote hain.
// getOwnPropertyDescriptor() unhi rules ko check karne ke kaam aata hai.


// ==========================================
// 2. Apna object banana
// ==========================================

const chai = {
  name: "Doodh Chai",
  price: 20,
  isAvaialble: true,

  orderChai: function() {
    console.log("chai nhi bni");
  }
};

// Is object mein name, price aur isAvaialble properties hain.
// orderChai ek method hai, kyunki uski value function hai.


// ==========================================
// 3. Kisi property ke rules check karna
// ==========================================

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Yahan chai object hai aur "name" uski property hai.
//
// Output mein humein value, writable, enumerable aur
// configurable jaise rules milte hain.
//
// Yaad rakh: ye method sirf rules check karta hai,
// unhe change nahi karta.


// ==========================================
// 4. Problem: for...of chai par kyun error aata hai?
// ==========================================

/*
for (let [key, value] of chai) {
  console.log(`${key}: ${value}`);
}
*/

// Error: chai is not iterable
//
// Bhai, normal object ko directly for...of se iterate nahi
// kar sakte, kyunki normal object iterable nahi hota.
//
// Solution: Object.entries(chai) use karna hai.


// ==========================================
// 5. Object.entries() se iterate karna
// ==========================================

/*
for (let [key, value] of Object.entries(chai)) {
  console.log(`${key}: ${value}`);
}
*/

// Object.entries(chai) humein key-value pairs deta hai.
//
// Example:
// ["name", "Doodh Chai"]
// ["price", 20]
//
// Lekin ek dikkat hai: orderChai bhi object ki property hai.
// Isliye uska function bhi entries mein aa sakta hai.
//
// Humein agar sirf normal properties print karni hain,
// toh functions ko skip kar sakte hain.


// ==========================================
// 6. Object.defineProperty() se rules change karna
// ==========================================

Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false
});

// Bhai, ab yahan humne name property ke rules set kiye:
//
// writable: false
// -> name ki value normal assignment se change nahi hogi.
//
// enumerable: false
// -> name Object.entries(chai) mein nahi aayega.
//
// Dhyan de: name delete nahi hua hai.
// Bas Object.entries() use return nahi karega.


// ==========================================
// 7. Functions ko skip karke properties print karna
// ==========================================

for (let [key, value] of Object.entries(chai)) {

  if (typeof value !== "function") {
    console.log(`${key}: ${value}`);
  }

}

// typeof value !== "function" ka matlab:
// Agar value function nahi hai, tabhi print karo.
//
// Output:
// price: 20
// isAvaialble: true
//
// name nahi aaya kyunki enumerable false hai.
// orderChai nahi aaya kyunki woh function hai.


// ==========================================
// 8. Agar name ko bhi print karwana ho?
// ==========================================

// enumerable ko true kar do:

/*
Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: true
});
*/

// Ab name bhi Object.entries(chai) mein aa jayega.
//
// writable ab bhi false hai, isliye name ki value
// normal assignment se change nahi hogi.


// ==========================================
// QUICK REVISION
// ==========================================

// getOwnPropertyDescriptor()
// -> Property ke rules check karna.
//
// defineProperty()
// -> Property ke rules set karna.
//
// Object.entries()
// -> Enumerable properties ke key-value pairs lena.
//
// typeof value !== "function"
// -> Functions ko skip karna.
//
// for...of chai
// -> Normal object par error aata hai.
// -> Object.entries(chai) use karo.
