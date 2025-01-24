const express = require("express");
const dotenv = require("dotenv");
const {PrismaClient} = require("@prisma/client");
const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.get("/api",(req,res)=>{
    res.send("selamat datang di api akuh");
});

app.listen(PORT,()=>{
    console.log("express running in PORT " + PORT);
});