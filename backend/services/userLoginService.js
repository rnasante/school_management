import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const loginUser = async (email, password) => {
    const user = await User.findOne({ where: { email } });

    if (!user) throw new Error('User not found');
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid password');

    const token = jwt.sign(
        { id: user.user_id, role: user.role },
        process.env.AUTH_SECRET,
        { expiresIn: '7d' }
    );


    return { token, user };
};
