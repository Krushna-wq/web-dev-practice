let counter = 0;
function increase(){     //counter function
  counter++;
}

const btn = document.querySelector("button");
const body = document.querySelector("body");

btn.addEventListener("click", function(){
  increase();
  const number = document.createElement("p");
    number.textContent = counter;
    body.appendChild(number);
})
  



 
      

  