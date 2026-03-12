// Find the length of a string.

// Find the length of a string.

// Convert a string to uppercase.

// Convert a string to lowercase.

// Remove spaces from start and end of " JavaScript ".

// Extract "Script" from "JavaScript" using slice.

// Check if "hello world" includes "world".

// Find the index of "a" in "banana".

// Find the last index of "a" in "banana".

// Check if "JavaScript" starts with "Java".

// Check if "JavaScript" ends with "Script".


let length = "Highest";

console.log(length.length);

let Biglength = length.toUpperCase();

console.log(Biglength);

let SmallLength = length.toLowerCase();

console.log(SmallLength)

let pass = " JavaScript ";
let MainPass = pass.trim();
console.log(pass, pass.length, MainPass, MainPass.length);

let extract = MainPass.slice(0, 4)

console.log(extract);


let hi = "Hello World"

console.log(hi.includes("World"))

const fruit = "banana"

console.log(fruit.indexOf("b"))

console.log(fruit.lastIndexOf("a"))

let Scheck = MainPass.startsWith("Java")
let Echeck = MainPass.endsWith("Script")

console.log(Scheck, Echeck);

let Hey = hi.replace("World", "JavaScript")
console.log(Hey)

const user = "developer"

console.log(user.includes("dev"))

console.log(MainPass.endsWith("Script"))




// Replace all "apple" with "orange" in "apple apple apple".

// Split "apple,banana,mango" into an array.

// Join "Hello" and "World" using concat.

// Add "0" at the start of "7" to make "007" using padStart.

// Add "!" at the end of "Hi" until length becomes 5.

// Repeat "JS" 3 times.

// Extract "World" from "Hello World" using substring.

// Check if "developer" contains "dev".

// Convert "hello world" → "HELLO WORLD".

let str = "apple apple apple"

let Rstr = str.replaceAll("apple", "orange")

console.log(Rstr)

let items = "apple, mango, orange"

let arr = items.split(" ,")

console.log(arr)

let word1 = "hello"
let word2 = "world"

console.log(word1.concat(" ",word2))

let MaiNum = "7"

let num = MaiNum.padStart(3, "0");

console.log(num)

let Hello = "Hi"

let NewHello = Hello.padEnd(5, "!")
console.log(NewHello, typeof NewHello, NewHello.length)

let lang = "JS"

let repeat = lang.repeat(3, "JS");

console.log(repeat);

let sub = MainPass.substring(0, 4)

console.log(sub)

let maincheck = user.includes("dev");
console.log(maincheck);

let Hii = "Hello World"

console.log(Hii.toUpperCase())

let count = 0;

for(let i = 0; i<=fruit.length; i++){
   if(fruit[i] == "a"){
    count++;
   }
}
console.log(count);

let greet = "h e l l o        "
let newGreet = greet.trim();
console.log(newGreet.length, greet.length);

let Fname = "william"
let Lname = "byers"

console.log(Fname.concat(" ",Lname));