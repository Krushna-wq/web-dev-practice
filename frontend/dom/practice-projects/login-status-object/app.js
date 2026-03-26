const user = {
    name: "benny",
    isloggedin: false,
}

const loginBtn = document.getElementById("login");
const LogoutBtn = document.getElementById("logout");
const text = document.querySelector("h2");
const body = document.querySelector("body");
const line = document.querySelector("p");

loginBtn.addEventListener("click", function () {
    
    user.Isloggedin = true;

 
    console.dir(user);
    text.textContent = "User logged in";
    line.textContent  = `Welcome ${user.name}`;

    body.appendChild(line);
 
})

LogoutBtn.addEventListener("click", function () {

    user.Isloggedin = false;

     

     console.dir(user);
     line.textContent = `${user.name} your account has been logged Out`;
     text.textContent = "User not Logged in";

     body.appendChild(line);

});