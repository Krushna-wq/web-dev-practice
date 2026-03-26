function two() {
    console.log("Hi");
}
// two();

// (function three() {
//     console.log("hello");
// })();

( () => {
    console.log("Hey");
})();

(function greet() {
    console.log("WELCOME");
})();


( (name) => {
    console.log(("Hey " + name));
    
})("sam");


(function show () {
    console.log("hello world");
    
})();

( (n) => {
    console.log(n * n);
    
})(5);

( (name) => {
    console.log("welcome "+name);
})("krishna");