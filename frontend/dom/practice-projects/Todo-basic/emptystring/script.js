const div = document.querySelector("div");
const btn = document.getElementById("tap");
const ipt = document.querySelector("input");

btn.addEventListener("click", function () {
     const para = document.createElement("p");
     if(ipt.value==""){

     }else{
     para.textContent = ipt.value + ( (" this is newly added") );
     
     console.dir(para);
     div.appendChild(para);
     ipt.value = "";
    }
});