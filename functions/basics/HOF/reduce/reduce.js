const myNum = [1, 2, 3];

const NewNum =  myNum.reduce(function(acc, curr){    // normal function
    // console.log(`acc ${acc} and ${curr}`)
    return acc + curr;
}, 0)

// console.log(NewNum);


const arrow = myNum.reduce( (acc, curr) => acc + curr, 0);

// console.log(arrow);


const ShoppingCart = [
    {
        itemName: "js course",
        price: 8999
    },  {
        itemName: "python",
        price: 6999
    },
      {
        itemName: "java course",
        price: 9999
    },
      {
        itemName: "data science course",
        price: 8999
    },
      {
        itemName: "reac course",
        price: 5999
    }
]


const bill = ShoppingCart.reduce((acc, item) => (acc + item.price), 0)

console.log(bill);





