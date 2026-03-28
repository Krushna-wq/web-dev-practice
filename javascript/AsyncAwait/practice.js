const newPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res("task completed");
        rej("task failed");
    }, 2000)
});

newPromise
.then((data) => {
    setTimeout(() => {
        console.log(data)
    }, 3000);
})

// const p2 = Promise.reject("error");


function CheckingNumber(num){
    return new Promise((res, rej) => {
    setTimeout(() => {
        if(num > 10){
           res("Big Number")
        }else{
            rej("Small Number")
        }
    }, num * 1000)
});
}

CheckingNumber(7)

.then((data) => {
    console.log(data);
})

.catch((error) => {
    console.log(error);
})

