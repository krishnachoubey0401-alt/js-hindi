 class User {
  constructor(username){
    this.username = username;
  }
 }

 class Teacher extends User {
  constructor(username, subject, department){
    super(username);
    this.subject = subject;
    this.department = department;
  }
  course(){
    console.log(`course is successfully added by the ${this.username}`);
  } 

 }


const teacher1 = new Teacher("virendra Dani", "compiler Design", "CSE")
teacher1.course()
 console.log(teacher1);
 
 console.log(teacher1 instanceof User); // btata hai ki teacher1 user se bna hai ya nhi simply
console.log(teacher1 instanceof User); // user ka instance hai ya nhi ans is true hai
 
