import { Router } from 'express';
const router = Router();

// const {count} = require("../controllers/getStudentCount");
import getStudentCount from '../controllers/getStudentCount.js';

//End point to get student count
router.get('/student/count', getStudentCount);



export default router;
