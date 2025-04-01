import express from 'express';
import { allStudents, getStudent, updateStudentDetails, removeStudent } from '../controllers/studentControllers.js';
// import { checkUserPermission } from '../middleware/checkUserPermission.js';

const router = express.Router();

// get all students
router.get('/students',  allStudents);

// Get student details by ID
router.get('/student/:student_id',  getStudent);

// Update student details
router.put('/student/:student_id', updateStudentDetails);

// Delete student (soft delete)
router.delete('/student/:student_id',  removeStudent);

export default router; 