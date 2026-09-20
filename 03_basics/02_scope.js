if(true){let a = 20
const b = 30
var c = 40
}
// console.log(a); //output => this will not execute 
// console.log(b); // this will also not exetuce because we are accessing values outside the scope 
// console.log(c);//output => there is an issue which is that this will give output because var cannot follows scope and if we
// dont declare any datatype and we directly write as c = 40 then also it will give output thats why prefer not to use var  

// {}  => ye kehlate hai scope they simply tell us where we can access the values or data in any programme  

// {} => inke andar jo data hai this data can only accesed inside this scope only 

//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // agar direct decleration krte hai tab to ham isko function k pehlr likh sakte hai lekin agar apan ne 
                      // function as a expressin create kiya ho then this will throw an error 
function addone(num){ 
    return num + 1
}



// addTwo(5)
// const addTwo = function(num){
//     return num + 2
// }

