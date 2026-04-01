const express =  require('express');

const app = express();

const PORT = 8080;

app.listen(PORT, () =>{
    console.log(`Server Is Running on port ${PORT}`);
})

app.use((req, res) => {
    console.log("request received")
    // console.log(req);
    let code =  "<h1>Hello world</h1>"
    res.send(code);
   
})