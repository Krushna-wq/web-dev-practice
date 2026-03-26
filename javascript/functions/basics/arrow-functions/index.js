const user = {
    name: "sam",
    age: 23,
    HelloUser: function (){
         console.log(`username is ${this.name}, and age is ${this.age}`);
         console.log(this);
    }
}

// user.HelloUser();
// user.name = "XYZ"
// user.HelloUser();

// console.log(this);

function hot() {
    let user = "krishna";
    console.log(this.user);
}

// hot();

let cold = function () {
    let user = "ABD"
    console.log(this.user);
}

// cold();

const wet = () => {
    let user = "GAP"
    console.log(user);
}

// wet();      


const addThree = (num1, num2) => {
    return num1 + num2;                       //explicit return
}

// console.log(addThree(3, 7));

const addFour = (num1, num2) => (num1 + num2);      // implicit return
const addFive = (num1, num2) => num1 + num2;       // implicit return

// console.log(addFour(3, 10));


const addSix = () => ({username: "XYZ"})

// console.log(addSix());

const arr = [2, 5, 6, 8, 9, 10];

arr.forEach(() => {})
