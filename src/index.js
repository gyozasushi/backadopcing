const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.get("/api",(req,res)=>{
    res.send("selamat datang di api akuh");
});
app.use('/uploads', express.static(path.join(__dirname, 'public', 'uploads')));

console.log('Static path:', path.join(__dirname, '../public/uploads'));
const productController = require("./product/product.controller");
app.use("/products",productController);

app.listen(PORT,()=>{
    console.log("express running in PORT " + PORT);
});