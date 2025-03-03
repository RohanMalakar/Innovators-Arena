import Event from "../models/event.model.js";
import { uploadOnCloudinary } from "../utills/cloudinary.js";
import ApiError from "../utills/error.utills.js";


const getAllEvents = async (req, res, next) => {
  try {
    const Events = await Event.find({});
    return res.status(200).json({
      success: true,
      message: "this is Events details",
      data: Events,
    });
  } catch (error) {
    return next(new ApiError(409, error.message));
  }
};
const getEventByEventId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const event = await Event.findById(id);

    if (!event) {
      return next(
        new ApiError(404, "Event is not available on this Event id")
      );
    }

    return res.status(200).json({
      success: true,
      message: "this is lectures details",
      data: event,
    });
  } catch (error) {
    return next(new ApiError(409, error.message));
  }
};
const createEvent = async (req, res, next) => {
  const { title, description, date, duration, createdBy } = req.body;

  if (!title || !description  || !createdBy || !date || !duration) {
    return next(new ApiError(409, "Every field is required"));
  }
 

  const event = await Event.create({
    title,
    description,
    category,
    createdBy,
    thumbnail:"",
    date,
    duration,
  });
  if (!event) {
    return next(new ApiError(500, "Event is not created"));
  }
  
  if(!req.file){
    return next(new ApiError(404, "Thumbnail is required"));
  }
  const url=uploadOnCloudinary(req.file.path);
  event.thumbnail=url;
  
  await event.save();

  return res.status(200).json({
    success: true,
    message: "Event details are added successfully",
    data: event,
  });
};
const UpdateEvent = async (req, res, next) => {
  try {
    const { id } = req.params;

    const event = await Event.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      {
        runValidators: true,
      }
    );

    if (!event) {
      return next(new ApiError(500, "Event is not updated"));
    }
    await event.save();

    return res.status(200).json({
      success: true,
      message: "Event details are updated successfully",
      data: event,
    });
  } catch (error) {
    return next(new ApiError(500, "Details are not updated"));
  }
};
const removeEvent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const event =await Event.findById(id);

    if (!event) {
      return next(new ApiError(500, "Event is not exist"));
    }
    await Event.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "Event is removed successfully",
    });
  } catch (error) {
    return next(new ApiError(500, error.message));
  }
};



export {
  getAllEvents,
  getEventByEventId,
  createEvent,
  UpdateEvent,
  removeEvent
};
