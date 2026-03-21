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


function getPriceWithTax(price){
    this.price = price;
    this.total = function(){
      let gstAmount = this.price * 0.18;
      return gstAmount + this.price;
    }
}

const amount1 = new getPriceWithTax(500);

console.log(amount1.total());

function Student(name, marks){
    this.name = name;
    this.marks = marks;
    this.Ispass = function(){
        if(marks>=40){
            return `${this.name} is pass`
        }else{
            return `${this.name} is fail`
        }
    }
};


const std1 = new Student("sam", 50);

console.log(std1.Ispass());

function CarAcc(brand, speed){
    this.brand = brand;
    this.speed = speed;
    this.current = function(){
        return `current speed is ${this.speed + 20}`
    }
}

CarAcc.prototype.NewCar = function(){
    // this.brand = brand; 
    // this.speed = speed;
    // this.current = function(){
    //     return 
    // }
}

const carfirst = new CarAcc("Audi", 130);
const carSecond = new CarAcc("Land Rover", 140);

console.log(carfirst.current());
console.log(carSecond.current())
