import express from 'express';
import { requestPasswordReset, verifyOTPAndResetPassword } from '../controllers/passwordResetController.js';

const router = express.Router();

// Route to request password reset (sends OTP)
router.post('/request-reset', requestPasswordReset);

// Route to verify OTP and reset password
router.post('/verify-reset', verifyOTPAndResetPassword);

export default router; 