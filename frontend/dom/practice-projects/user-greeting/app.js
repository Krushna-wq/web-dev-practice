const user = {
    name: "benny",
    city: "LA"
}

function userHello (user) {
     return `Hello ${user.name} from ${user.city}`;
}

const para = document.querySelector(".para");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
        para.textContent = userHello(user);
     
        
});