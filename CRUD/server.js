const express=require('express');
const mongoose=require('mongoose');
const app=express();
const url="mongodb+srv://pranab7015:606146@cluster0.ozgqjeo.mongodb.net/?retryWrites=true&w=majority";
app.use(express.json());
const Customer=require('./models/Customer');

mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("mongodb connected");
}).catch((err)=>{
    console.log(err);
});



//routes
app.get('/',(req,res)=>{
    res.send("This is homepage");
})
app.post('/customer',async(req,res)=>{
    try {
        const customer=await Customer.create(req.body)
        res.status(200).json(customer);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
})
app.get('/customer',async(req,res)=>{
    try {
        const customer=await Customer.find({}); //findall
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})



//for single query
app.get('/customer/:id',async(req,res)=>{
    try {   
        const {id}=req.params;
        const customer=await Customer.findById(id);
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

//update || PUT
app.put('/customer/:id',async(req,res)=>{
    try {
        const {id}=req.params;
        const customer=await Customer.findByIdAndUpdate(id,req.body);
        if(!customer)
        {
            res.status(404).json({message:`cannot find any customer with id : ${id}`})
        }
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
})

//delete
app.delete('/customer/:id',async(req,res)=>{
    try{
        const {id} = req.params;
    const customer=await Customer.findByIdAndDelete(id);
    if(!customer)
    {
        return res.status(404).json({message:`cannot find any customer with is ${id}`});
    }
    res.status(200).json(customer)
    }catch(error)
    {
        res.status(500).json({message:error.message})
    }
    
})




app.listen(9000,()=>{
    console.log("server runninig");
})