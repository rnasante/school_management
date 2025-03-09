import express from 'express';
import { superAdminLogin } from '../controllers/superAdminLoginController.js';

const router = express.Router();

router.post('/superadmin/login', superAdminLogin);

export default router;
