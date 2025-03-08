import jwt from 'jsonwebtoken';
import Admin from '../models/adminModel.js';
import dotenv from 'dotenv';

dotenv.config();

export const authenticateAdmin = async (req, res, next) => {
    try {
        const token = req.header('Authorization')?.split(' ')[1]; // Extract token
        if (!token) return res.status(401).json({ error: 'Access denied. No token provided' });

        const decoded = jwt.verify(token, process.env.AUTH_SECRET);
        req.admin = await Admin.findByPk(decoded.id);
        const admin = req.admin;
        if (!admin) return res.status(404).json({ error: 'Admin not found' });

        console.log('Decoded token:', admin);
        console.log("Superadmin access granted");

        next();
    } catch (error) {
        res.status(403).json({ error: 'Invalid or expired token' });
    }
};
