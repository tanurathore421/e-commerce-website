const Order=require("../MODELS/order.model");

//place order function
const placeOrder=async(req,res)=>{

    try{
       

        const {productId,quantity}=req.body;

        const order=new Order({
            userId:req.userId,
            productId:productId,
            quantity:quantity
        });

        await order.save();
        res.status(201).json({message:"Order placed successfully",order:order});
    }catch(error){
        res.status(500).json({message:"Failed in placing order",error:error.message});
    }
}

// Get orders for logged-in user
const getOrder = async (req, res) => {
  try {
   

    const userId = req.userId;

    const orders = await Order.find({ userId })
      .populate("productId")
      .sort({ createdAt: -1 });

    res.status(200).json({
      orders,
    });
  } catch (error) {
    console.error("Get orders error:", error);

    res.status(500).json({
      message: "Failed to fetch orders",
    });
  }
};

module.exports={placeOrder,getOrder};