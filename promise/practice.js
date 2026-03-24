const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("chaicode");
    }, 2000)
});

// setTimeout(() => {
//     console.log(promise);
// }, 3000);

promise.then((data) => {
    console.log(data);
})

function SayHi(){
    setTimeout(() => {
        console.log("printing after delay")
    }, 2000)
}

SayHi();