import express from 'express';
import { addAdmin } from '../controllers/createAdminController.js';
import { verifySuperAdmin } from '../middleware/authSuperAdminMiddleware.js';

const router = express.Router();

router.post('/add', verifySuperAdmin, addAdmin); // Only Super Admin can create Admins

export default router;
