import Admin from '../models/adminModel.js';
import bcrypt from 'bcrypt';

export const createAdmin = async (adminData) => {
    const { first_name, last_name, email, password } = adminData;

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ where: { email } });
    if (existingAdmin) throw new Error('Admin already exists');

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = await Admin.create({
        first_name,
        last_name,
        email,
        password: hashedPassword,
        role: 'admin'
    });

    return newAdmin;
};
