
/*
function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript
 assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/


// object bna rha hu khud se 
//as a literals

// const car = {
//   name : "swift",
//   company : "maruti Suzuki",
//   type : "four wheeler",

//  gearShift: function(){
//   console.log("Gear Shifted Successfully");
  
//  }

// }
// console.log(car);
// car.gearShift();

// as a constructor == singleton
/*
function car(name, company, type ){
  this.name = name;
  this.company = company;
  this.type = type;

    this.gearShift = function(){
        console.log("gear shifted successfully");
        
    }

}
car1 = new car("fortuner", "Toyota", "four-wheeler");
console.log(car1);
car1.gearShift();

/* PRACTICE 1: MOBILE 📱 Ek Mobile constructor function banao. 
Requirements:
 1. brand, model aur price properties honi chahiye.
  2. call() method banao jo "Calling..." print kare.
   3. `new` keyword se 2 mobile objects banao.
    4. Dono objects ki details print karo.
     */

    function mobile(brand, model, price){
        this.brand = brand;
        this.model = model;
        this.price = price;

        this.call = function(){
            console.log(`calling... by ${this.brand} ${this.model}`);
            
        }
    }

const mobile1 = new mobile("realme", "9 Speed Edition", "22000");
const mobile2 = new mobile("poco", "X6 PRO", "25000");

console.log(mobile1);
mobile2.call();

console.log(mobile2);
mobile1.call();

/*
 PRACTICE 2:
 STUDENT 🎓 Ek Student constructor function banao.
 Requirements: 
 1. name, className aur marks properties honi chahiye. 
 2. introduce() method banao jo student ka naam aur class print kare. 
 3. `new` keyword se 2 student objects banao. 
 4. Dono students ka introduce() method call karo. 
*/


function student(name, className, marks){
    this.name = name;
    this.className = className;
    this.marks = marks;

    this.introduce = function(){
        console.log(`${this.name} ${this.className}`)
    }
}

const student1 = new student("krishnakant", "computer-science", "64");
//student1.introduce();

const student2 = new student("pushkar", "Artificial-Intelligence", "95");
//student2.introduce();

// Problem: Constructor ke andar method banane se har object ke liye
// function ki alag copy banti hai, jisse memory extra use hoti hai.
// Is problem ko solve karne ke liye Prototype use karte hain.

         //           SOLUTION   

// Prototype isliye use karte hain taaki har object ke liye method ki alag copy na bane.
// Sabhi objects ek hi shared method use kar sakte hain.



// -------------------------CONCEPT OF PROTOTYPE------------------------------

function studentt(name, className, marks){
    this.name = name;
    this.className = className;
    this.marks = marks;
}

    studentt.prototype.introduce = function(){
    console.log(`Name of the studentt is: ${this.name}, ${this.name} is from the ${this.className}`);
    
}

const studentt2 = new studentt("pushkar", "Artificial-Intelligence", "95");
studentt2.introduce();

const studentt3 = new studentt("krishnakant", "Computer-Science", "64");
studentt3.introduce();


