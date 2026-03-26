const Pname = document.querySelector(".name");
const price = document.querySelector(".price");
const Brand = document.querySelector(".brandName");
const div = document.getElementsByClassName("card");
const btn = document.getElementById("clk");
const body = document.querySelector("body");


const product = {
    name: "Notebook",
    price: 200+"RS",
    brand: "classmate"
}

btn.addEventListener("click", function () {

    Pname.textContent = product["name"];
    price.textContent =  product["price"];
    Brand.textContent = product["brand"];
  
    
});
