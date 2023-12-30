const  express = require("express");
require("./db/connection");
const productModel =require("./productModel")
const app=express();
const port = process.env.PORT ||3000;
app.use(express.json());

app.post("/medproducts", async(req,res)=>{try{
    const addProds = new productModel(req.body)
    console.log(req.body)
    const insertProds = await addProds.save();
    res.status(201).send(insertProds);
}catch(e){
    res.send(e);
}})
app.get("/medproducts",async(req,res)=>{
        try {
            const getProducts =await productModel.find({})
            console.log(getProducts)
            res.send(getProducts)

        }catch(e){res.status(400).send(e)}
})

// app.get("/medproducts/:id",async(req,res)=>{
//     try {
//         const _id=req.params.id;
//         const getProduct =await productModel.findById({_id})
//         console.log(getProduct)
//         res.send(getProduct)

//     }catch(e){res.status(400).send(e)}
// })
app.patch("/medproducts/:id",async(req,res)=>{
    try {
        const _id=req.params.id;
        const obj = req.body;
        const getProduct =await productModel.findByIdAndUpdate(_id,obj,{new:true});
        console.log(getProduct)
        res.send(getProduct)

    }catch(e){res.status(500).send(e)}
})
app.delete("/medproducts/:id",async(req,res)=>{
    try {
        const _id=req.params.id;
       
        const getProduct =await productModel.findByIdAndDelete(_id);
        console.log(getProduct)
        res.send(getProduct)

    }catch(e){res.status(500).send(e)}
})

app.listen(port,()=>{console.log(`connection is live at port no: ${port}`);})