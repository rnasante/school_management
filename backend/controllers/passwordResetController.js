import { sendOTP, verifyOTP } from '../utilities/otpUtils.js';
import User from '../models/userModel.js';
import bcrypt from 'bcrypt';

// Request password reset (sends OTP)
export const requestPasswordReset = async (req, res) => {
    try {
        const { phoneNumber } = req.body;

        // Validate phone number format
        if (!phoneNumber || !phoneNumber.match(/^\+[1-9]\d{1,14}$/)) {
            return res.status(400).json({ 
                message: 'Invalid phone number format. Please use international format (e.g., +1234567890)' 
            });
        }

        // Check if user exists
        const user = await User.findOne({ 
            where: { 
                phone_number: phoneNumber
            } 
        });
        
        if (!user) {
            return res.status(404).json({ message: 'User not found with this phone number' });
        }

        // Send OTP
        await sendOTP(phoneNumber);
        res.status(200).json({ 
            message: 'OTP sent successfully',
            phoneNumber: phoneNumber.replace(/\d(?=\d{4})/g, '*') // Mask the phone number
        });
    } catch (error) {
        console.error('Error in requestPasswordReset:', error);
        res.status(500).json({ 
            message: 'Error sending OTP',
            error: error.message 
        });
    }
};

// Verify OTP and reset password
export const verifyOTPAndResetPassword = async (req, res) => {
    try {
        const { phoneNumber, otp, newPassword } = req.body;

        // Validate inputs
        if (!phoneNumber || !otp || !newPassword) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        // Validate password strength
        if (newPassword.length < 8) {
            return res.status(400).json({ message: 'Password must be at least 8 characters long' });
        }

        // Verify OTP
        const isValid = await verifyOTP(phoneNumber, otp);
        if (!isValid) {
            return res.status(400).json({ message: 'Invalid or expired OTP' });
        }

        // Hash new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update user's password
        await User.update(
            { 
                password: hashedPassword,
                isTemporaryPassword: false
            },
            { 
                where: { 
                    phone_number: phoneNumber
                } 
            }
        );

        res.status(200).json({ message: 'Password reset successfully' });
    } catch (error) {
        console.error('Error in verifyOTPAndResetPassword:', error);
        res.status(500).json({ 
            message: 'Error resetting password',
            error: error.message 
        });
    }
}; 