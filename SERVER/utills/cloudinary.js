
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import ApiError from "./error.utills.js";



const uploadOnCloudinary= async (localfilePath) => {
  try {
    if (!localfilePath) {
       throw new ApiError(404,"local path does not exist")
    }
    const result = await cloudinary.uploader.upload(localfilePath,{
      folder: 'Club',
      resource_type: 'auto',
    });
    fs.unlinkSync(localfilePath);
    return result?.url;

  }catch(err){
    // delete the file if it was not uploaded to cloudinary
    fs.unlinkSync(localfilePath);
    throw new ApiError(500,err.message);
  }
}

export {uploadOnCloudinary};