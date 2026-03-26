let ipt = document.querySelector(".ip");
let btn = document.querySelector(".press");
// let head = document.querySelector("h1");
let bdy = document.querySelector("body");

btn.addEventListener("click", function () {

 let head = document.createElement("h1");
 head.textContent = ipt.value;
 ipt.before(head);
 body.appendChild(head);
  ipt.value = "";
});


let Cbtn = document.querySelector(".Colorbtn");
let body = document.querySelector("body");

Cbtn.addEventListener("click", function () {
  let red = Math.floor(Math.random()*256);
  let green = Math.floor(Math.random()*256);
  let blue = Math.floor(Math.random()*256);

  body.style.backgroundColor =  (`rgb(${red}, ${green}, ${blue})`);    // rgb(122, 102, 120);
  
});