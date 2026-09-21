
const express=require("express");
const router=express.Router();
const {placeOrder,getOrder}=require("../CONTROLLERS/order.controller");
const authMiddleware = require("../MIDDLEWARE/authMiddleware");

router.post("/orders",authMiddleware,placeOrder);
router.get("/orders",authMiddleware,getOrder);


module.exports=router;

