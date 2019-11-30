const express = require("express");
const app = express();
const productrouter = require("./routes/products")

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/products",productrouter);

app.listen(9898,()=>{
    console.log("Server started at 9898 ...")
})