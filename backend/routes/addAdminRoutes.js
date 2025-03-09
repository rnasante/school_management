import express from 'express';
import { addAdmin } from '../controllers/addAdminController.js';
import { verifySuperAdmin } from '../middleware/superAdminAuthMiddleware.js';

const router = express.Router();

router.post('/add', verifySuperAdmin, addAdmin); // Only Super Admin can create Admins

export default router;
