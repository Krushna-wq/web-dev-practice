const arr = [1, 2, 3, 4, 5, 6];

for (const num of arr) {
    // console.log(num);    
}

const greetings = "hello";


for (const greets of greetings) {
    // console.log(greets);
}

// 

const map = new Map();

map.set("IN", "India");
map.set("US", "America");
map.set("BR", "BRAZIL");

for (const [key, value] of map) {

    // console.log(`${key} :- ${value}`);
}


const myObject = {
    "game1" : "COD",
    "game2" : "IGI"
}

// for (const key of myObject) {
//     // console.log(`${key} :- ${value}`)
// }

const Myobj = {
    js: "javaScript",
    cpp: "C++",
    ts: "TypeScript"
}

for (const key in Myobj) {
//   console.log(`${key} for ${Myobj[key]}`)
}


const arr1 = ["cpp", "java", "javascript", "c"];

for(const key in arr1) {
    // console.log(arr1[key]);
}

for (const key in map) {
//   console.log(key);
}

//


const lang = ["swift", "go", "ts", "js", "python"]

lang.forEach( function (index) {
    // console.log(index);
})

lang.forEach( ( index ) => {
    // console.log(index);
});


// function printMe (index){
//     // console.log(index);
// }

// lang.forEach(printMe);

lang.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
    if(lang[index] == "js"){
        // console.log(index);
    }
})


const mycoding = [
    {
        name: "abc",
        langauge: "js"
    },
    {
        name: "xyz",
        langauge: "ts"
    },
    {
         name: "pqr",
        langauge: "cpp"
    }
]

mycoding.forEach ( (item) => {
    // console.log(item.name);
})






