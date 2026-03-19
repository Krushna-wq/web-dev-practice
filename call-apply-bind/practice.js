const obj = { name : "benny"};

function Hello(){
    console.log(`user name is ${this.name}`)
}

Hello.call(obj);


const obj1 = {name: "ronni", age: 21};

function HelloTo() {
    return `${this.name} is ${this.age} years old`
}

console.log(HelloTo.call(obj1))


const objFor1 = {name: "Aman"};
const objFor2 = {name: "Rahul"};

function useBoth() {
    console.log(`${this.name}`)
}

useBoth.call(objFor1);
useBoth.call(objFor2);


const studentsHey = {name: "raj"}

let arr = ["Full Stack", 23];

function student(course, age){
    console.log(`${this.name} studies ${course} at age ${age}`)
}

student.apply(studentsHey, arr)

let Maxarr = [23, 45, 12, 68, 34, 468];

console.log(Math.max.apply(null, Maxarr));

let Sumarr = [2, 5, 7]

function Sum(num1, num2, num3){
    return `sum is ${num1 + num2 + num3}`;
}

console.log(Sum.apply(null, Sumarr))

// bind


const HelloBind = {name: "carry"}

function Hey(){
    return `Hello ${this.name}`
}

const newHello = Hey.bind(HelloBind);
console.log(newHello());

const userNew = {name: "ron", age: 8}

function newUser() {
    console.log(`${this.name} is ${this.age}`)
}

const HelloForNew = newUser.bind(userNew);

HelloForNew();