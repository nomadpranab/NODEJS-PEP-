const mongoose=require('mongoose')
const customerschema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    review:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:false,
    }
},
{
    timestamps: true
});

const Customer=mongoose.model('Customer',customerschema);
module.exports=Customer