import Admin from '../models/adminModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const loginAdmin = async (email, password) => {
    const admin = await Admin.findOne({ where: { email } });

    if (!admin) throw new Error('Admin not found');
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) throw new Error('Invalid password');

    const token = jwt.sign(
        { id: admin.id, role: admin.role },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    );

    return { token, admin };
};
