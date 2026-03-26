let btn = document.querySelector(".addbtn");
let ul = document.querySelector("ul");
let inp = document.querySelector("#ip");


btn.addEventListener("click", function() {
     let item = document.createElement("li"); 
     item.innerText = inp.value;

     let delbtn = document.createElement("button");
     delbtn.innerText = "Delete";
     ul.appendChild(item);
    item.appendChild(delbtn);
   inp.value = "";
});

ul.addEventListener("click", function (event) {
   if(event.target.nodeName == "BUTTON"){
    let itemDel = event.target.parentElement; 
    itemDel.remove();
   }
});