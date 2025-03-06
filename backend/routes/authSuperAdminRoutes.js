import express from 'express';
import { superAdminLogin } from '../controllers/authSuperAdminController.js';

const router = express.Router();

router.post('/superadmin/login', superAdminLogin);

export default router;
