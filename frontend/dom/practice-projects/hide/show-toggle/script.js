const btn = document.getElementById("Tap");

const item = document.querySelector("div");

btn.addEventListener("click", function () {
 
   item.classList.toggle("hidden");     //hidden ON/OFF

    console.dir(item);                              
    if(!item.classList.contains("hidden")){   // checks hidden 
        item.classList.add("highlight");       // if hidden -> add highlight
    }
});

