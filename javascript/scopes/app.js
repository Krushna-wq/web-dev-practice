let num = 10;

function practice() {
  console.log(a);               // global scope 
}

// practice();

function login() {
    let user = "krishna";          // function scope        
    console.log(user);                
}

// login();


if(true) {
    let a = 20;                     // block scope 
    console.log(a);   
}     

let a = 10;

function test(){
  console.log(a);
}

test();


function test(){
  let b = 20;
}

console.log(b);


if(true){
  let x = 100;
}

console.log(x);

if(true){
  var y = 200;
}

console.log(y);

function demo(){
  var p = 5;
}

if(true){
  console.log(p);
}


let m = 50;

function check(){
  let n = 60;
  console.log(m);
}

check();
console.log(n);
