import User from './models/userModel.js';
import bcrypt from 'bcrypt';
import { generateModelID } from './utilities/idGenerator.js';

export const createSuperAdmin = async () => {
    try {
        const existingSuperAdmin = await User.findOne({ where: { role: 'superadmin' } });

        if (!existingSuperAdmin) {
            const hashedPassword = await bcrypt.hash('SuperSecurePassword123', 10);

            await User.create({
                user_id: generateModelID('SUP'),
                first_name: 'Super',
                last_name: 'Admin',
                email: 'superadmin@example.com',
                password: hashedPassword,
                role: 'superadmin'
            });
            console.log('Super Admin created successfully.');
        } else {
            console.log('Super Admin already exists.');
        }
    } catch (error) {
        console.error('Error creating Super Admin:', error);
    }
};

