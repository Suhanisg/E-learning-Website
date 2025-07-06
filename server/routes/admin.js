import express from 'express';
import {isAuth,isAdmin} from "../middleware/isAuth.js";
import {
    createCourse,
    addLectures,
    deleteLecture,
    deletedCourse,
    getAllStats,
    updateRole,
    getAllUser
} from "../contollers/admin.js";
import {uploadFiles} from "../middleware/multer.js";

const router = express.Router();

router.post("/course/new",isAuth,isAdmin,uploadFiles,createCourse);
router.post("/course/:id",isAuth,isAdmin,uploadFiles,addLectures);
router.delete("/course/:id",isAuth,isAdmin,deletedCourse);
router.delete("/lecture/:id",isAuth,isAdmin,deleteLecture);
router.get("/stats",isAuth,isAdmin,getAllStats);
router.put('/user/:id',isAuth,isAdmin,updateRole);
router.get('/users',isAuth,isAdmin,getAllUser);
export default router;