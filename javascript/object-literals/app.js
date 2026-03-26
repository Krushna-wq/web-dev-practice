// creating the student object

const mySym = Symbol("key1");
const student = {
   name: "rony",
   [mySym]: "key1",
   age: "23",
   course: "Computer Science",
   city: "Mumbai"
}

// console.log(student);
// console.log(student.name);   //accessing elements
// console.log(student["age"]);

student.city = "pune";
// Object.freeze(student);
student.college = "COEP";

// console.log(typeof mySym);

// console.log(student);

student.greetings = function () {
   console.log(`Hello ${this.name} Welcome to campus!`);
}

console.log(student.greetings());