// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()


/*
## JavaScript Prototype — Notes

### 1. Problem

* Constructor ke andar method banane par har object ke liye function ki alag copy banti hai.
* Isse extra memory use ho sakti hai.

### 2. Solution: Prototype

* Prototype par method banane se objects usi shared method ko use kar sakte hain.
* Isse har object ke liye method ki alag copy banane ki zaroorat nahi hoti.

### 3. Syntax

```js
ConstructorName.prototype.methodName = function() {
    // code
};
```

### 4. Example

```js
function studentt(name, className, marks) {
    this.name = name;
    this.className = className;
    this.marks = marks;
}

studentt.prototype.introduce = function() {
    console.log(`${this.name} is from ${this.className}`);
};

const studentt1 = new studentt("Pushkar", "AI", 95);
const studentt2 = new studentt("Krishnakant", "CS", 64);

studentt1.introduce();
studentt2.introduce();
```

### 5. Important Points

* `this.name`, `this.className`, `this.marks` → har object ki apni properties.
* `studentt.prototype.introduce` → shared method.
* `new studentt(...)` → naya object banata hai.
* `this` → us object ko refer karta hai jisne method call kiya.
* Dono objects same method use karte hain, lekin output unki apni properties ke hisaab se aata hai.

### Remember

**Properties → Constructor ke andar**

**Shared methods → ConstructorName.prototype ke through**

**Object method call → `objectName.methodName()`**
*/