
const Order = "move-north|hold-position|extract-vip";

let orderList = Order.split("|");

// console.log("split", orderList);




const data = "SOSsSOS".split("s");
// console.log(data);
// console.log(typeof data);

const num = 42;

let numReal = String(num);

// console.log(typeof numReal);

const num2 = 1234;

let maskedNum = String(num2).padStart(12, "X")

console.log(maskedNum);