import Admin from '../models/adminModel.js';
import bcrypt from 'bcrypt';
import { generateModelID } from '../utilities/idGenerator.js';

export const createAdmin = async (adminData) => {
    const { first_name, last_name, email, password } = adminData;

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ where: { email } });
    if (existingAdmin) throw new Error('Admin already exists');

    const hashedPassword = await bcrypt.hash(password, 10);

    console.log("Creating admin with data:", adminData);

    const newAdmin = await Admin.create({
        admin_id: generateModelID('ADM'),
        first_name,
        last_name,
        email,
        password: hashedPassword,
        role: 'admin'
    }, { hooks: true });

    const safeAdmin = newAdmin;

    console.log("Admin successfully created:", {password, ...safeAdmin});

    return {password, ...safeAdmin};
};
