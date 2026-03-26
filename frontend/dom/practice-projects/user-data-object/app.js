const ipt = document.getElementById("name");
const age = document.getElementById("age");
const btn = document.querySelector("button");
const container = document.querySelector("div");


btn.addEventListener("click", function () {
  
      let person = {
        Name: ipt.value,
        Age:  age.value 
     };
  
    let info = document.createElement("p");
    console.dir(person);
    info.textContent = " Name: " + person.Name + " | " + " Age: " + person.Age;
    
container.appendChild(info);
  ipt.value = "";
  age.value = "";

});