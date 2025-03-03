import { Router } from "express";
import {getAllEvents,
  getEventByEventId,
  createEvent,
  UpdateEvent,
  removeEvent } from "../controllers/event.controller.js";
import {isLoggedIn,authrizedRoll} from "../middlewares/userAuth.js";
import upload from "../middlewares/multer.middleware.js"

const courseRouter=Router();

courseRouter.route("/")
.get(getAllEvents)
.post(isLoggedIn,authrizedRoll("ADMIN"),upload.single("thumbnail"),createEvent)


courseRouter.route("/:id")
.get(getEventByEventId)
.delete(isLoggedIn,authrizedRoll("ADMIN"),removeEvent)
.put(isLoggedIn,authrizedRoll("ADMIN"),UpdateEvent)




export default courseRouter;