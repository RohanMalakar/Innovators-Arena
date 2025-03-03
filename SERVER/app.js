import {config} from "dotenv"
config()
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoute from "./routers/user.route.js"
import errorMiddleware from "./middlewares/error.middlewares.js";
import eventRoute from "./routers/event.route.js";
import paymentRoute from "./routers/payment.routs.js";
import mescellaniousRoute from "./routers/miscellaneous.js";
import emailRouter from "./routers/email.route.js";



const app=express();
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));


const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  sameSite:"none"
};

// Use CORS Middleware
app.use(cors(corsOptions));
app.use(express.urlencoded({extended:true,limit:"16kb"}));


app.use("/api/v1/data",mescellaniousRoute);
app.use("/api/v1/user",userRoute);
app.use("/api/v1/payment",paymentRoute);
app.use("/api/v1/event",eventRoute);
app.use("/api/v1/email",emailRouter);

app.use("/",(req,res)=>{
  res.send("Hey I am rohan malakar")   
});


app.all("*",(req,res,next)=>{
      res.status(404)
      res.send("OOPS! page not found")   
});

app.use(errorMiddleware)


export default app;


