// const tinderuser =  new Object();  

const tinderuser = {}
 tinderuser.id = "abc123";
 tinderuser.name = "Sammy",
 tinderuser.IsloggedIn = false;

// console.log(tinderuser);
const regularUser = {
    email: "ron@gmail.com",
    fullName: {
        userFullName: {
            firstName: "ron",
            lastName: "burger" 
        }
    }

}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2  = {3: "a", 4: "b"}

// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = {...obj1, ...obj2};  // spread

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
     {
        id: 2,
        email: "def@gmail.com"
    },
     {
        id: 3,
        email: "hig@gmail.com"
    }
]

users[1].email
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty("logout"));

const course = {
    courseName: "JS",
    price: 999,
    courseInstructor: "hitesh"
}

const {courseInstructor: instructor} = course 

// console.log(instructor);


const student = {
    name: "XYZ",
    age: 21,
    class: "12th",
    subject: ["hindi", "english", "maths", "physics"],
    username: "xyz2323",
    password: "XYZ@1234",
}
let {name, age, subject} = student;

console.log(name, age, subject);