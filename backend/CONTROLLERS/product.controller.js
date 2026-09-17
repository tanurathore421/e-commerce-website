const Product=require("../MODELS/product.model");

const addProduct=async(req,res)=>{
    try{
        const {image,name,price,category}=req.body;
        const product=new Product({
            image,
            name,
            price,
            category
        })
        await product.save();
        res.status(201).json({message:"Product added successfully",
            product:product});
    }
    catch(error){
        res.status(500).json({message:"Error adding product", error});
    }
}

const getProducts=async(req,res)=>{
    try{
        const products=await Product.find();
        res.status(200).json(products);
    }
    catch(error){
        res.status(500).json({message:"Error fetching products", error});
    }
}

module.exports={addProduct,getProducts};