// class user {
//   constructor(username, email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password;

//   }
//   encryptPassword(){
//     return `${this.password}abc` // ese me password encrypt hojayega
//   }
//    upperCaseUserName(){ // method to convert small to capital case characters of username 
//     return`${this.username.toUpperCase()}`
//    }

// }

// const userOne = new user("hellgod", "hellgod@gmail.com", "123")
// console.log(userOne.encryptPassword()); 
// console.log(userOne.upperCaseUserName());
// console.log(userOne.username);



// class mobile {
//   constructor(name, model, price, batteryCapacity){
//     this.name = name;
//     this.model = model;
//     this.price = price;
//     this.batteryCapacity = batteryCapacity;
//   }
//   encryptModel(){
//     console.log(`khgsd54${this.model}654lkjsdh`);
//   }
// }

// const mobile1 = new mobile("realme", "9 Speed Edition", "22000", "5500Mah");
// mobile1.encryptModel();

// const mobile2 = new mobile("poco", "X6 PRO", "25000", "45400Mah");
// mobile2.encryptModel();

class family {
  constructor(child, mother, father, grandFather, grandMother){
    this.child = child;
    this.mother = mother;
    this.father = father;
    this.grandFather = grandFather;
    this.grandMother = grandMother;
  }
}

const family1 = new family("parth", "Neetika", "Neetesh", "vipin Tiwari", "kusum");
console.log(family1);


