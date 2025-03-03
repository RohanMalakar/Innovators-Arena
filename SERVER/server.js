import {config} from "dotenv"
config()
import cloudinary from "cloudinary"
import Razorpay from "razorpay";
import app from "./app.js"
import conectDB from "./config/dbConection.js"


conectDB()
.then(()=>{
  app.listen(process.env.PORT, () => {
    console.log("listening on *",process.env.PORT);
  });
})
.catch((err)=>{
  console.error(err)
  exit(1);
})

export const razorpay=new Razorpay({
       key_id:process.env.RAYZORPAY_KEY_ID,
       key_secret:process.env.RAYZORPAY_SECRET
})


cloudinary.v2.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key:process.env.CLOUDINARY_API_KEY,
      api_secret:process.env.CLOUDINARY_API_SECRET
})