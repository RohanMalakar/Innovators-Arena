import { Router } from "express";
import {getAllEvents,
  getEventByEventId,
  createEvent,
  UpdateEvent,
  removeEvent } from "../controllers/event.controller.js";
import {isLoggedIn,authrizedRoll, authrizedSubscriber} from "../middlewares/userAuth.js";
import upload from "../middlewares/multer.middleware.js"

const courseRouter=Router();

courseRouter.route("/")
.get(getAllEvents)
.post(isLoggedIn,authrizedRoll("ADMIN"),upload.single("thumbnail"),createCourse)
.delete(isLoggedIn,authrizedRoll("ADMIN"),removeLectureByLectureId)

courseRouter.route("/:id")
.get(isLoggedIn,authrizedSubscriber,getLecturesByCourseId)
.delete(isLoggedIn,authrizedRoll("ADMIN"),removeCourse)
.put(isLoggedIn,authrizedRoll("ADMIN"),UpdateCourse)
.post(isLoggedIn,authrizedRoll("ADMIN"),upload.single("lecture"),addLectureByCourseId)



export default courseRouter;