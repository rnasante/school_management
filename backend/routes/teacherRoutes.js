import express from 'express';
import { getTeacher, updateTeacherDetails, removeTeacher } from "../controllers/teacherControllers.js";

const router = express.Router();

router.get('/teacher/:teacher_id', getTeacher);

router.put('/teacher/:teacher_id', updateTeacherDetails);

router.delete('/teacher/:teacher_id', removeTeacher);

export default router;
