console.log("hello"); //it print output
let name = "Aman";   //string  variable
let age=22;         //number  variable
const country="India";


//object
let user = {
    name:"Rahul",
    agr:25,
    email:"rahul@gamil.com"
};

console.log(user);
console.log(user.name);

//operators
let a=10;
let b=5;
console.log("Add:",a+b);
console.log("Sub:",a-b);
console.log("Mul:",a*b);
console.log("Div:",a/b);

//condition (if-else )
  let loginAge=18;
  if (loginAge>=18) {
    console.log("Allowed to login");
  } else {
    console.log("Not allowed");
  }


  //loops (for)
  for (let i=1;i<=5;i++) {
    console.log("Loop count:",i);
  }

  //function
  function add(x,y) {        //let ab= new add()  function can also be made by using new keyword
    return x+y;
  }

  let result = add(20,30);
  console.log("function result:", result);

  //simple backend login
  const admin = {
    username: "admin",
    password: "1234"
  };

  function login(user, pass) {
    if (user===admin.username && pass === admin.password) {
        console.log("login successful");
    } else {
        console.log("invalid username and password");
    }
  }
  login ("admin", "1234");





