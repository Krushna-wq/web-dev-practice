const user = {
    username: "XYZ",
    age: 20,
    city:"pune"
}

let {username, age, city} = user;

const btn =  document.querySelector(".clk");
const para1 = document.querySelector(".text1");
const para2 = document.querySelector(".text2");
const para3 = document.querySelector(".text3");

btn.addEventListener("click", function () {

     para1.textContent =  `username: ${username}`;
     para2.textContent = `age: ${age}`;
     para3.textContent = `city: ${city}`;
   console.dir(para1);
});
