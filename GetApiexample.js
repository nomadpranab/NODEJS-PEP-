const express=require('express');
const app=express();
app.use(express.json());

app.get('/add',(req,res)=>{
    const num1=Number(req.query.num1);
    const num2=Number(req.query.num2);
    const sum=num1+num2;
    console.log(sum);
    res.send({"sum" : sum});
})
app.listen(3001,()=>{
    console.log("Server started Successfully");
})