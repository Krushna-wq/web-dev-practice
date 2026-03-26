Array.prototype.mapTwo = function(hello) {
    let result = [];
    for(let i = 0; i<this.length; i++){
        result.push(hello(this[i], i, this));
    }
     return result;
};


function hello(value){
   return value + 2;
}

console.log([1, 2, 3, 4].mapTwo(hello));



Array.prototype.Myreduce = function(cb, initialvalue){
    let acc = initialvalue;
    for(let i = 0; i<this.length ; i++){
        acc = cb(acc, this[i], i, this)
    }
    return acc;
}

function calculate(acc, curr){
   return acc + curr;
}

console.log([1, 2, 3].Myreduce(calculate, 0))


