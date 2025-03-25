import express from 'express';
import redisClient from './config/redis.js';
import passwordResetRoutes from './routes/passwordResetRoutes.js';
import passport from './config/passport.js';
import superAdminLoginRoutes from './routes/superAdminLoginRoutes.js';
import addUserRoutes from './routes/addUserRoutes.js';
import userLoginRoutes from './routes/userLoginRoutes.js';
import teacherRoutes from './routes/teacherRoutes.js';
import studentRoutes from './routes/studentRoutes.js';
import addSubjectRoutes from './routes/addSubjectRoutes.js';
import addClassRoutes from './routes/addClassRoutes.js';
// import studentRegistrationRoutes from './routes/studentRoutes.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

console.log('Starting API server initialization...');

// Create Express server
const server = express();

// Initialize server
async function startServer() {
    try {
        // Enable CORS for frontend
        server.use(cors({
            origin: 'http://localhost:3000', // Your Next.js frontend URL
            credentials: true
        }));
        console.log('CORS middleware initialized');

        // Connect to Redis if not already connected
        console.log('Connecting to Redis...');
        if (!redisClient.isOpen) {
            await redisClient.connect();
            console.log('Connected to Redis successfully');
        }

        // parse JSON request bodies
        server.use(express.json());
        console.log('JSON middleware initialized');

        // Initialize Passport middleware - must be before any routes that use it
        server.use(passport.initialize());
        console.log('Passport middleware initialized');

        //user related routes
        server.use('/api', userLoginRoutes);
        server.use('/api', addUserRoutes);
        console.log('User related routes loaded under /api');

        //teacher related routes
        server.use('/api', teacherRoutes );
        console.log('Teacher  routes loaded under /api');

        //Super Admin authentication route
        server.use('/api/auth', superAdminLoginRoutes);
        console.log('Super admin auth routes loaded under /api');

        //create new subject route
        server.use('/api/subject', addSubjectRoutes);
        console.log('Subject routes loaded under /api');

        //create new class related routes
        server.use('/api', addClassRoutes);
        console.log('Class related routes loaded under /api');

        // Get all student routes
        server.use('/api', studentRoutes);
        console.log('Student routes loaded under /api');

        // Student registration routes
        // server.use('/api', studentRegistrationRoutes);
        // console.log('Student registration routes loaded under /api');

        // Password reset routes
        server.use('/api/password-reset', passwordResetRoutes);
        console.log('Password reset routes loaded under /api/password-reset');

        const port = process.env.API_PORT || 5000; // Changed to 5000 to avoid conflict with Next.js
        server.listen(port, () => {
            console.log(`API Server is running on http://localhost:${port}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
}

// Start the server
startServer();