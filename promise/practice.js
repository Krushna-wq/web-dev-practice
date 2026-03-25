const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("chaicode");
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
        // console.log("printing after delay")
    }, 2000)
}

SayHi();


const hPromise = new Promise((res, rej) => {
    setTimeout(() => {
        // res("Masterji")
        // rej(new Error("masterji"))
    }, 3000);
});

async function nice() {
    const result = await hPromise;
    // console.log(result);
}

nice();


 const Mypromise = new Promise((res, rej) => {
    res("Data received")
 })

 Mypromise
 .then((data) => {
    setTimeout(() => {
        console.log("Data is received by then in 2 seconds", data);
    }, 2000);
 });

function checkPositiveNum(num){
    return new Promise((res, rej) => {
        if(num > 0){
            res("Number is positive")
        }else{
            rej("Number is negative")
        }
    });
}


checkPositiveNum(4)

.then((positive) => {
    setTimeout(() => {
        console.log("Positive Number Detected", positive)
    }, 4000)
})

.catch((negative) => {
    setTimeout(() => {
        console.log("Negative Number is Detected", negative)
    }, 6000)
})


const p = new Promise((res, rej) => {
  rej("Fail");
});

p.then((d) => console.log(d))
 .catch((e) => console.log(e));

 function CheckEvenNum(number){
     return new Promise((res, rej) => {
    if(number % 2 == 0){
        res("Its a even Number")
    }else{
        rej("Its a odd Number")
    }
 });
 }



 CheckEvenNum(12)
 .then((even) => {
    console.log(even);
 })

 .catch((odd) => {
    console.log(odd);
 })

 function printValue(){
    return new Promise((res, rej) => {
        try {
            console.log(x)
        } catch (error) {
            console.log("error is handled")
            rej("Failed")
        }
    });
 }

printValue()
.then((pass) => {
    console.log(pass);
})

.catch((fail) => {
    console.log(fail)
})
