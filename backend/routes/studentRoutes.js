import { Router } from 'express';
import getStudentCount from '../controllers/getStudentCount.js';


const router = Router();

//End point to get student count
router.get('/student/studentCount', getStudentCount);



export default router;
