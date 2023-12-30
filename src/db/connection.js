const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/medproducts",{
    useNewUrlParser: true,
useUnifiedTopology: true}).then(()=>{
    console.log("Connection Successful.");
}).catch((e)=>{console.log("Connection failed.", e);})