

// Add an element to the end of an array using push().

// Remove the last element using pop().

// Add an element to the start of an array using unshift().

// Remove the first element using shift().

// Check if an array includes a value.

// Find the index of a value using indexOf().

// Join an array ["JS","is","fun"] into "JS is fun".

// Convert "hello world" into an array using split().

// Check if a variable is an array using Array.isArray().



let arr = [1, 2, 3, 4, 5, 6]

arr.push(7, 8, 9, 10)

// console.log(arr)
 
arr.pop()

// console.log(arr)

let arr2 = []

arr2.unshift(1, 2, 3, 4, 5, 6, 7, 8)

// console.log(arr2)

arr2.shift()

// console.log(arr2)

let check = arr2.includes(3)

console.log(check)

let arr3 = ["JS", "Is", "Fun"]

let join = arr3.join(" ")

console.log(join)

let str = "Hello, World"

let arrMain = str.split(" ,")
console.log(arrMain);

console.log(Array.isArray(arrMain))


// Extract [2,3] from [1,2,3,4] using slice().

// Remove element 3 from [1,2,3,4] using splice().

// Insert 5 at index 2 in [1,2,3,4].

// Replace 3 with 10 in [1,2,3,4].

// Copy the first three elements of an array.

// Copy the last three elements of an array.

// Remove the first two elements using splice().

// Extract elements from index 2 to 5.

// Create a copy of an array using slice().

// Use .at() to get the last element of an array.

let arr4 = [1, 2, 3, 4]

let sliced = arr4.slice(1, 3);
// console.log(sliced);

let compare = arr4 == sliced;

// console.log(Array.isArray(arr4) , Array.isArray(sliced))

arr4.splice(2,1);

// console.log(cut);
// console.log(arr4);

arr4.splice(2, 0, 5)

// console.log(arr4);

let newarr = [1, 2, 3, 4, 5]

newarr.splice(2, 1, 10)

// console.log(newarr)

let arr5 = [2, 4, 6, 8, 10, 12, 14]

let exctracted = arr5.splice(2, 5)

// console.log(exctracted);
let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arr6.forEach((e, i, array) => { 
    // console.log(e, arr6[i])
    // console.log(array)
});

arr6.forEach((e)  => {
  console.log(e*2)
})


let arrFruits = ["apple","banana","mango"];

arrFruits.forEach((e, i)=> {
    console.log(`${e} ${i}`)
})

let arrSqr = [1,2,3,4];

    arrSqr.forEach((e) => {
        console.log(e*e)
    })

let words = ["JS","Python","Java","C++"];

words.forEach((e) => {
    console.log(`${e} has length ${e.length}`)
})

let names = ["Krushna","Rahul","Amit"];

names.forEach((e) => {
    console.log(`Hello ${e}`)
})

let nums = [10,20,30];

nums.forEach((e) => {
    let str = e.toString();
    console.log(`Number ${str}`)
})

let arrFindEven = [1,2,3,4,5,6];

arrFindEven.forEach((e) => {
    if(e%2 == 0){
        console.log(e)
    }
})

const products = [
  {name:"Laptop", price:50000},
  {name:"Phone", price:20000},
  {name:"Tablet", price:30000}
];

products.forEach(p => {
    p.catogory = "Electronics"
    console.log(`this is ${p.name} for ${p.price} and it is an ${p.catogory} device`)
});

products.map((pro) => {
    console.log(`${pro.name}`)
})

let filtered = products.filter((pro) => pro.price>25000)

console.log(filtered);


let total = products.reduce((acc, currval) => {
    return acc + currval.price;
} ,0)

console.log(total);

products.forEach((product) => {
    let all = product.name.toUpperCase();
    console.log(all);
})

let namess = ["raj", "rahul", "amit", "sneha"]

namess.map((name) => {
    let upper = name.toUpperCase()
    console.log(upper);
})

names.map((name) => {
    console.log(`Mr.${name}`)
})

const num1 = [10, 20, 30]

let result = num1.map((number) => {
    return number + 5;
})
console.log(result)

const numbers = [1, 2, 3, 4];

// Use map() to create a new array with each element doubled
const doubled = numbers.map(num => num * 2);

// console.log(doubled);
// Output: [2, 4, 6, 8]

// console.log(numbers);
// Output: [1, 2, 3, 4] (original array is unchanged)
 

let bill = [100,200,300];

let gstBill = bill.map((item) => {
    let gst = item * 0.18;
    return item + gst;
})

console.log(gstBill);


let str3 = ["harry","rahul","amit"];

let cap = str3.map((name) => {
   return name.charAt(0).toUpperCase();
})

console.log(cap)