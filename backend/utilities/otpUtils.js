import admin from '../config/firebase.js';
import redisClient from '../config/redis.js';

// Generate a random 6-digit OTP
const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};

// Send OTP using Firebase
const sendOTP = async (phoneNumber) => {
    try {
        // Generate OTP
        const otp = generateOTP();
        
        // Store OTP in Redis with 10 minutes expiration
        const key = `otp:${phoneNumber}`;
        await redisClient.set(key, otp, {
            EX: 600 // 10 minutes in seconds
        });

        // Send OTP using Firebase Authentication
        const settings = {
            phoneNumber: phoneNumber,
            recaptchaToken: 'recaptcha-token', // This should come from your frontend
            sessionInfo: 'session-info' // This should come from your frontend
        };

        // Note: Firebase Admin SDK doesn't directly send SMS
        // You'll need to use a third-party SMS service or Firebase Cloud Functions
        // For now, we'll just log the OTP for testing
        console.log(`OTP for ${phoneNumber}: ${otp}`);

        return true;
    } catch (error) {
        console.error('Error sending OTP:', error);
        throw error;
    }
};

// Verify OTP
const verifyOTP = async (phoneNumber, otp) => {
    try {
        const key = `otp:${phoneNumber}`;
        const storedOTP = await redisClient.get(key);

        if (!storedOTP || storedOTP !== otp) {
            return false;
        }

        // Delete the OTP after successful verification
        await redisClient.del(key);
        return true;
    } catch (error) {
        console.error('Error verifying OTP:', error);
        throw error;
    }
};

export { sendOTP, verifyOTP }; 