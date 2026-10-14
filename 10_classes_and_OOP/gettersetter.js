
// ==========================================
// 1. GETTER AND SETTER IN JAVASCRIPT
// ==========================================

// Getter aur Setter ka use kisi property ko read ya
// update karte waqt apna logic chalane ke liye hota hai.
//
// Getter -> property ki value read karte waqt chalta hai.
// Setter -> property ko value assign karte waqt chalta hai.


// ==========================================
// 2. USER CLASS
// ==========================================

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  // Constructor mein this.email = email likhne par
  // email setter automatically call hota hai.
  //
  // Isi tarah this.password = password se password
  // setter call hota hai.


  // ==========================================
  // 3. GETTER - EMAIL
  // ==========================================

  get email() {
    return `${this._email.toUpperCase()}`;
  }

  // Getter tab chalta hai jab hum user.email read karte hain.
  //
  // Yahan email uppercase mein return hota hai.
  //
  // IMPORTANT:
  // Uppercase karna email ko private ya secure nahi banata.
  // Isse actual email ko access karne se nahi roka jata.


  // ==========================================
  // 4. SETTER - EMAIL
  // ==========================================

  set email(mail) {
    this._email = mail;
  }

  // Setter tab chalta hai jab email ko assign karte hain.
  //
  // Example:
  // user.email = "test@gmail.com";
  //
  // Yahan value _email mein store hoti hai.
  //
  // _email alag naam hai taaki setter khud ko dobara
  // call na kare.


  // ==========================================
  // 5. GETTER - PASSWORD
  // ==========================================

  get password() {
    return `${this._password}gadhe`;
  }

  // user.password read karne par getter chalega.
  //
  // Is example mein password ke aage "gadhe" add hota hai.
  //
  // IMPORTANT:
  // Ye sirf learning example hai, security nahi.
  // Real applications mein passwords ko securely hash karte hain.


  // ==========================================
  // 6. SETTER - PASSWORD
  // ==========================================

  set password(value) {
    this._password = value;
  }

  // Constructor mein this.password = password likhne se
  // setter call hota hai.
  //
  // Agar setter ke andar this.password = value likhenge,
  // toh setter dobara call hota rahega. 
  //
  // Isliye this._password = value likhte hain.


  // ==========================================
  // 7. OBJECT BANANA
  // ==========================================
}

const krishnakant = new User("krishnakant@gmail.com", "1324");


// ==========================================
// 8. GETTER KO USE KARNA
// ==========================================

console.log(krishnakant.password);
// Output: 1324gadhe
//
// Getter ko property ki tarah access karte hain.
// krishnakant.password() nahi likhte.


console.log(krishnakant.email);
// Output: KRISHNAKANT@GMAIL.COM
//
// Email getter value ko uppercase mein return karta hai.


// ==========================================
// QUICK REVISION
// ==========================================

// get email() -> value read karne par chalta hai.
// set email(value) -> value assign karne par chalta hai.
//
// user.email -> getter call hota hai.
// user.email = "abc@gmail.com" -> setter call hota hai.
//
// _email aur _password alag storage properties hain.
// Underscore sirf naming convention hai, actual privacy nahi.
//
// Getter/setter mein same property ko directly use karne
// se recursion ho sakta hai, isliye alag backing property use karte hain.
