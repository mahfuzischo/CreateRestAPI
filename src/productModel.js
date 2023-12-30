const { default: mongoose } = require("mongoose");
const mongoos=require("mongoose");
const prodSchema = new mongoose.Schema({
    price:[{
        type:Number,
        required:true,
    }],
    name:[{
        type:String,
        required:true,
        trim:true,
    }],
    image:[{type:String,
    required:true,}]
    
})

// Creating a new collection
const medprods = new mongoose.model("medproducts",prodSchema)
module.exports=medprods;