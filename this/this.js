const obj = {
    name: "XYZ",
    RollNo: 21,

      callObj(){
        console.log(`Name is ${this.name} And Roll Number is ${this.RollNo}`);

        function calledbyonbj(){
               console.log(`${this.name} is passed the exam, roll number is ${this.RollNo} `)
        }
        calledbyonbj();

        const arrangeoBj = () => {
            console.log(`award goes to ${this.name} and the roll number is ${this.RollNo}`)
        }
        arrangeoBj();
    }
    
};

obj.callObj();


const students = {
    name: "robert",
    rollno:21,
    college: "XYZ university",

    callStudent() {
            console.log(`roll number ${this.rollno} student name is ${this.name} from ${this.college}`)

            function rollcall(){
                console.log(`roll Number of student is ${this.rollno}`);
            }
             rollcall();
    }
}

students.callStudent();


const movie = {
    name: "dhurandhar",
    cast: ["RST", "EFG", "HIJ"],

     HelloCast() {
        this.cast.map((actor) => {
         console.log(` ${this.name} intro ${actor}`)
        });
    }
}

movie.HelloCast();


const animal = {
    name: "Horse",
    speed: 75+"KMPH",
     call(){
        console.log(`${this.name} runs at the speed of ${this.speed}`)
     }
}

const AnimalSpeed = animal.call

console.log(AnimalSpeed()); 
//1
const user = {
  name: "Krushna"
};

function sayHi() {
  console.log("Hi " + this.name);
}

sayHi.call(user);

//2
const person = {
  name: "Rahul"
};

function introduce(age, city) {
  console.log(`I am ${this.name}, ${age}, from ${city}`);
}


introduce.call(person, 22, "Pune");


//3 
const student = {
  name: "Aman"
};

function details(age, course) {
  console.log(`${this.name} is ${age} studying ${course}`);
}

const data = [20, "CSE"];


details.apply(student, data);

//4

const car1 = {
  brand: "BMW"
};

const car2 = {
  brand: "Audi"
};

function showBrand(speed) {
  console.log(`${this.brand} runs at ${speed} km/h`);
}

showBrand.call(car1, 200);
showBrand.call(car2, 220);



const order1 = {
  item: "Pizza",
  price: 250
};

const order2 = {
  item: "Burger",
  price: 120
};

function printOrder(quantity, user) {
  console.log(`${user} ordered ${quantity} ${this.item} for ₹${this.price * quantity}`);
}

printOrder.call(order1, 2, "XYZ");
printOrder.call(order2, 3, "ABC");

const numbers = [10, 45, 99, 2, 67];

console.log(Math.max.apply(null, numbers));

//7
const user4 = {
  name: "Krushna",
  greet() {
    console.log(`Hello ${this.name}`);
  }
};

const greetFn = user4.greet;


greetFn.call(user4);