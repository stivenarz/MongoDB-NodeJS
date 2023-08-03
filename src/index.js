// const express = require("express");
import express from "express";
import routes from "./routes/routes";

const app = express();
app.use(routes);

app.listen(3000,()=>{
    console.log('Server is running at port 3000')
})