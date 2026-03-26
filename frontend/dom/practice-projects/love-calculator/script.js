const form = document.querySelector("form");
const btn = document.querySelector("button");
const div = document.querySelector("div");

form.addEventListener("submit", function (e) {

    e.preventDefault();

const ipt1 = document.getElementById("boy");
const ipt2 = document.getElementById("girl");

   const l1 = ipt1.value.length;
   const l2 = ipt2.value.length;

   const love = Math.pow(l1+l2, 3) % 101;

   let h2 = document.createElement("h2");

   h2.textContent = " The love between " + ipt1.value + " and " + ipt2.value + " is " + love + " % ";
  
   div.appendChild(h2);
   
   form.reset();
});


