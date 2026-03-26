function multipleGreets(func, count){
    for(let i = 0; i<=count; i++){
    //    func();
    }
}


// const greet = function() {
//     console.log("hello")
// }

// multipleGreets(greet, 4);

function greet(name) {
    // console.log("Hello "+name);
    
}

function user(greet) {
   greet("krushna");
}

// user(greet);


function greet() {
  return "Hello";
}

function sayHello(fn) {
//   console.log(fn);
}

// sayHello(greet);



                                     //  filter  //

const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const NewNum = mynum.filter((num) => (num < 6 ))
// console.log(NewNum);


const books = [
  {
    title: "The Alchemist",
    genre: "Fiction",
    publishDate: "1988",
    edition: "1st"
  },
  {
    title: "Atomic Habits",
    genre: "Self-help",
    publishDate: "2018",
    edition: "1st"
  },
  {
    title: "Clean Code",
    genre: "Programming",
    publishDate: "2008",
    edition: "1st"
  },
  {
    title: "The Pragmatic Programmer",
    genre: "Programming",
    publishDate: "1999",
    edition: "2nd"
  },
  {
    title: "Rich Dad Poor Dad",
    genre: "Finance",
    publishDate: "1997",
    edition: "1st"
  },
  {
    title: "Deep Work",
    genre: "Productivity",
    publishDate: "2016",
    edition: "1st"
  },
  {
    title: "Introduction to Algorithms",
    genre: "Education",
    publishDate: "2009",
    edition: "3rd"
  },
  {
    title: "You Don't Know JS",
    genre: "Programming",
    publishDate: "2015",
    edition: "1st"
  }
];

const NewStore = books.filter((book) => book.genre == "Programming");
const NewStoreDate = books.filter((book) => { 
    return book.publishDate > 2000 && books.genre == "Finance";      //with scope
})   
// console.log(NewStore);
console.log(NewStoreDate);


