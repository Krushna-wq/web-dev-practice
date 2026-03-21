function person(name, age){
    this.name = name;
    this.age  = age;
  
}

const person1 = new person("ronney", 43);
const person2 = new person("benny", 45);

console.log(person1);
console.log(person2);

function car(name){
    this.name = name;
    this.start = function(){
        console.log(`${this.name} is started`)
    }
}

const car1 = new car("BMW")

car1.start();


function StoreStudent(name, age, department){   // construct function
    this.name = name;
    this.age = age;
    this.department = department;
    this.print = function(){
       return `${this.name} is a student of ${this.department} at the age of ${this.age}`;
    }
}

const student1 = new StoreStudent("tanmay bhat", 31, "CSE");  //object 
const student2 = new StoreStudent("virat kohli", 42, "School of Cricket");
// console.log(typeof print);
console.log(student1.print());
console.log(student2.print());


const animal = {
    speak() {
        console.log("Animal speaks");
    }
};

const dog = Object.create(animal);

dog.speak(); // Animal speaks

console.log(typeof dog)


Array.prototype.mapTwo = function(hello) {
    let result = [];
    for(let i = 0; i<this.length; i++){
        result.push(hello(this[i], i, this));
    }
     return result;
};


function hello(value){
   return value + 2;
}

console.log([1, 2, 3, 4].mapTwo(hello));



Array.prototype.Myreduce = function(cb, initialvalue){
    let acc = initialvalue;
    for(let i = 0; i<this.length ; i++){
        acc = cb(acc, this[i], i, this)
    }
    return acc;
}

function calculate(acc, curr){
   return acc + curr;
}

console.log([1, 2, 3].Myreduce(calculate, 0))