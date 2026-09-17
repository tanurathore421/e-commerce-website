const express=require("express");
const connectDB = require("./DB/db");
const dotenv = require("dotenv");
const authRoutes=require("./ROUTES/authRoutes");
const captchaRoutes=require("./ROUTES/captchaRoutes");
const productRoutes=require("./ROUTES/productRoutes");
const cors=require("cors");
const session = require("express-session");

dotenv.config();

const app=express();
app.use(cors(
   {
        origin: "http://localhost:3001",
        credentials: true
    }
));
app.use(session(
   {
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
    /*   cookie: {
            httpOnly: true,
            secure: false,
            sameSite: "lax"
        } */
   }
));

connectDB();

app.use(express.json());
app.use("/api/auth",authRoutes);
app.use("/api/captcha",captchaRoutes);
app.use("/api/products",productRoutes);

const PORT=process.env.PORT||5000;

app.listen(PORT,()=>{
   console.log( `server runnning on ${PORT}`);
});