const express=require('express');
const mongoose=require('mongoose');
const app=express();

//routes
app.get('/',(req,res)=>{
    res.send("This is homepage");
})

app.listen(9000,()=>{
    console.log("server runninig");
})