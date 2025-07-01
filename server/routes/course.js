import express from 'express';
import {
    getAllCourses,
    getSingleCourse,
    getAllLectures,
    getAllLecture,
    getMyCourses,
    checkout, paymentVerification
} from "../contollers/course.js";
import {isAdmin, isAuth} from "../middleware/isAuth.js";

const router = express.Router();

router.get("/course/all",getAllCourses);
router.get("/course/:id",getSingleCourse);
router.get("/lectures/:id",isAuth,getAllLectures);
router.get("/lecture/:id",isAuth,getAllLecture);
router.get("/myCourses",isAuth,getMyCourses);
router.post('/course/checkout/:id',isAuth,checkout);
router.post("/verification/:id",isAuth,paymentVerification);

export default router;