const list = document.querySelector("ul");
const li = document.querySelectorAll("li");
const btn = document.querySelectorAll("button");

list.addEventListener("click", function (event) {
    if(event.target.nodeName === "BUTTON"){
       let del = event.target.parentElement;

       del.remove();
    }
});