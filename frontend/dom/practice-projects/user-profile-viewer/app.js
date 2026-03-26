const user = {
    name: "XYZ",
    age: 21,
    course: "CSE",
    city: "mumbai"
}

const btn = document.querySelector("button");
const body = document.querySelector("body");
const profile = document.getElementById("profile")

btn.addEventListener("click", function () {

    profile.innerHTML = "";
 
    const name = document.createElement("h2");
    name.textContent = user["name"];

    const age = document.createElement("p");
    age.textContent = user["age"];

    const course = document.createElement("p");
    course.textContent = user["course"];

    const city = document.createElement("p");
    city.textContent = user["city"];
  
    
   
   profile.appendChild(name);
   profile.appendChild(age);
   profile.appendChild(course);
   profile.appendChild(city);
});