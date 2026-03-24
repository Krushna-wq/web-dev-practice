const cart = [
 {name:"Shirt", price:500, qty:2},
 {name:"Jeans", price:1000, qty:1},
 {name:"Shoes", price:2000, qty:1}
];

const total = cart.reduce((acc, item) => {
    return acc + item.price;
}, 0)

console.log(total)


const ProductName = cart.forEach((item) => console.log(`Product name is ${item.name}`))

const Filtered = cart.filter((item) => {
    return item.price > 1000;
})

console.log(Filtered);


const qty = cart.filter((item) => {
    return item.qty > 1
})

console.log(qty)

const totalQty = cart.reduce((acc, item) => {
    return acc + item.qty; 
}, 0)

console.log(totalQty)   

const check = cart.reduce((acc, item) => {
    return  item.instock = true;
}, true)

console.log(check)

console.log(cart)

const upper = cart.map((item) => item.name.toUpperCase())

console.log(upper)

const highItem = cart.forEach((item) => {
    let high = 0;
    if(high<item.price){
        high = item.price;
    }
    return high;
})

console.log(highItem);



function handling(){
    try {
        console.log(x)
    } catch (error) {
        console.log("Error Handled");
    }
}

handling();

function CheckAge(age){
    try {
        if(age < 18){
            throw new Error("underage");
        }else{
            console.log("access granted")
        }
        
    } catch (error) {
        console.log(error.message);
    }
}

CheckAge(10);


setTimeout(() => {
    console.log("hello after delay")
}, 2000);

console.log("start")

setTimeout(() => {
    console.log("Middle")
}, 1000)

console.log("End")

function greet(name){
    console.log("Hello" + name)
}

setTimeout(() => {
    greet("benny");
})

