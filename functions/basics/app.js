// function addTwoNum (a, b) {
//     console.log(a + b);
// }

// addTwoNum(2, 4);


function LoginUserMsge (username){
    return `${username} just logged in `;
}

// console.log(LoginUserMsge("sam"));

function CartPrice(var1, var2, ...num1) {         // (...num) rest
    return num1 
}

// console.log(CartPrice(200, 300, 400, 20000));

const Product = {
    username: "sam",
    price: 200
}

function handleBy(anyobject) {    //(anyobject or object name)
    // console.log(`username is ${anyobject.username} price is ${anyobject.price}`)
}

// handleBy(Product);

// handleBy({
//     username: "PK",    //direct passing with object 
//     price: 899    
// })


const Array = [100, 300, 200, 600, 899];

function returnSecondValue(getarray) {
    return getarray[1]
}

// console.log(returnSecondValue(Array));    //pass array


// console.log(addOne(4));

// function addOne (num) {
//     return num + 2;
// }





function f1(f2){
    return f2() + 40;
}

function f3(){
    return 10;
}

// console.log(f1(f3));

const fruits = ['apple', 'orange', true, 'watermelon', 'mango', 'banana'];

forEach((Element) => console.log(Element));


function forEach(fnct){
  for(let i = 0; i<fruits.length; i++){
    fnct(fruits[i]);
  }
}

