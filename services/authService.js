import Admin from '../models/adminModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// Super Admin Login Service 
// takes email & password as parameters 
// uses the email param to find the row that meets the where clause filter requirements,ie, role='superadmin' and returns an object of that row and its columns, ie, superAdmin
//uses the password param to compare the encrypted password from the returned superAdmin object 
// uses jwt to generate a signed token 
// and returns an object with properties token and superAdmin
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
            { id: superAdmin.admin_id, role: superAdmin.role },
            process.env.AUTH_SECRET,
            { expiresIn: '1h' }
        );

        return { token, superAdmin };
    } catch (error) {
        throw error;
    }
};
