import express from 'express';
import { addSubject } from '../controllers/addSubjectController.js';
import { verifySuperAdmin } from '../middleware/superAdminAuthMiddleware.js';
import {authenticateAdmin} from '../middleware/adminAuthMiddleware.js';

const router = express.Router();

router.post('/add', authenticateAdmin, verifySuperAdmin, addSubject);

export default router;