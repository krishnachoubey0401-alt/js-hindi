class User {
  constructor(username){
    this.username = username;
  }
  logMe(){
    console.log(`Username: ${this.username}`);
  }
static  createId(){
    return`123`
  }
}

const krishnakant = new User("krishnakant") 
console.log(krishnakant.createId());

class developer extends User{
  constructor(username, email){
    super(User)
    this.email = email;
  }
  
}
const parth = new developer("parth", "parth@neetu.com");
console.log(parth);
console.log(parth.createId());
