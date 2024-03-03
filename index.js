const express=require("express");

const ToDo=require("./ToDoRouters");
require('./dbconfig');

let app=express();

app.use(express.json());
app.use('/List',ToDo);

app.listen(5000,()=>{
    console.log("Port Listen At 5000");
})