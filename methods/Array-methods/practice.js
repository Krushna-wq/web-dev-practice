

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
console.log(sliced);

let compare = arr4 == sliced;

console.log(Array.isArray(arr4) , Array.isArray(sliced))

arr4.splice(2,1);

// console.log(cut);
console.log(arr4);

arr4.splice(3, 0, 5)

console.log(arr4);