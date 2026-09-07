const express=require("express");
const connectDB = require("./DB/db");
const dotenv = require("dotenv");
const authRoutes=require("./ROUTES/authRoutes");
const cors=require("cors");

dotenv.config();

const app=express();
app.use(cors());
connectDB();

app.use(express.json());
app.use("/api/auth",authRoutes);

const PORT=process.env.PORT||5000;

app.listen(PORT,()=>{
   console.log( `server runnning on ${PORT}`);
});