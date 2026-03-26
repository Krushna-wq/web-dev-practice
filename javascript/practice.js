fetch("https://jsonplaceholder.typicode.com/posts")
 .then((res) => {
   console.log(res);
 });

fetch("https://example.com")
.then((data) => {
    console.log(data);
})

.catch((error)=> {
    console.log("Failed")
})