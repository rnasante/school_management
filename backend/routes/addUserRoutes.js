import express from 'express';
import { addUser, getRoles } from '../controllers/addUserController.js';
import { checkUserCreationPermissions } from '../middleware/checkUserCreationPermissions.js';
import passport from 'passport';

const router = express.Router();

// Get available roles based on user's role
router.get('/available-roles', 
    passport.authenticate('jwt', { session: false }), 
    getRoles
);

// Add user route with authentication and permission checks
router.post('/add-user', 
    passport.authenticate('jwt', { session: false }), 
    checkUserCreationPermissions, 
    addUser
);

export default router;