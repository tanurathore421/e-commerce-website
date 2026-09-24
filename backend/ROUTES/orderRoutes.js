
const express=require("express");
const router=express.Router();
const {placeOrder,getOrder,cancelOrder}=require("../CONTROLLERS/order.controller");
const authMiddleware = require("../MIDDLEWARE/authMiddleware");

router.post("/orders",authMiddleware,placeOrder);
router.get("/orders",authMiddleware,getOrder);

router.put("/:id/cancel", authMiddleware,cancelOrder);




module.exports=router;

