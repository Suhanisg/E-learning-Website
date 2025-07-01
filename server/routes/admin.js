import express from 'express';
import {isAuth,isAdmin} from "../middleware/isAuth.js";
import {createCourse, addLectures, deleteLecture, deletedCourse, getAllStats} from "../contollers/admin.js";
import {uploadFiles} from "../middleware/multer.js";

const router = express.Router();

router.post("/course/new",isAuth,isAdmin,uploadFiles,createCourse);
router.post("/course/:id",isAuth,isAdmin,uploadFiles,addLectures);
router.delete("/course/:id",isAuth,isAdmin,deletedCourse);
router.delete("/lecture/:id",isAuth,isAdmin,deleteLecture);
router.get("/stats",isAuth,isAdmin,getAllStats);
export default router;