//Write a function that takes a number and returns its square.

function sqr (n) {
    return n * n;
}

console.log(sqr(8));


//Write a function that takes two numbers and returns the larger one.

function largest(a, b){
     if(a>b){z
        return a;
     }else{
        return b;
     }
}

console.log(largest(9, 5));

// Write a function that takes two numbers and returns the larger one.

function even(num) {
    if(num%2==0){
        return "even";
    }else{
        return "odd";
    }
}

console.log(even(4));

//

function greets(name){
  return "Hello " + name;
}

console.log(greets("Benny"));


// function test(){ } // normal function

// const test = function(){ }  // functionexpression

 
// arrow

const add = (a, b) => {
    return a + b;
}

console.log(add(3, 6));

// implicit

const double = (n) => (n * 2);

console.log(double(6));

//

const sayHi = () => ("Hi");

console.log(sayHi());

//

const greet = (name) => "Hello " + name;

console.log(greet("Krushna"));   // Hello Krushna
 

