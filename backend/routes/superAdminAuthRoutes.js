import express from 'express';
import { superAdminLogin } from '../controllers/superAdminAuthController.js';

const router = express.Router();

router.post('/superadmin/login', superAdminLogin);

export default router;
