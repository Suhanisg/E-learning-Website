import express from 'express';
import {isAuth,isAdmin} from "../middleware/isAuth.js";
import {createCourse} from "../contollers/admin.js";
import {uploadFiles} from "../middleware/multer.js";

const router = express.Router();

router.post("/course/new",isAuth,isAdmin,uploadFiles,createCourse);

export default router;