import express from 'express';
import { getStudent, updateStudentDetails, removeStudent } from '../controllers/studentControllers.js';
// import { checkUserPermission } from '../middleware/checkUserPermission.js';

const router = express.Router();

// Register a new student
// router.post('/student/register',  addStudent);

// Get student details by ID
router.get('/student/:student_id',  getStudent);

// Update student details
router.put('/student/:student_id', updateStudentDetails);

// Delete student (soft delete)
router.delete('/student/:student_id',  removeStudent);

export default router; 