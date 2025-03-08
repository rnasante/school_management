import Admin from '../models/adminModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// Super Admin Login Service
export const loginSuperAdmin = async (email, password) => {
    try {
        const superAdmin = await Admin.findOne({ where: { email, role: 'superadmin' } });

        if (!superAdmin) {
            throw new Error('Super Admin not found');
        }

        const isMatch = await bcrypt.compare(password, superAdmin.password);
        if (!isMatch) {
            throw new Error('Invalid credentials');
        }

        const token = jwt.sign(
            { id: superAdmin.admin_id, email: superAdmin.email, role: superAdmin.role },
            process.env.AUTH_SECRET,
            { expiresIn: '1h' }
        );

        return { token, superAdmin };
    } catch (error) {
        throw error;
    }
};
