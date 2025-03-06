import { loginAdmin } from '../services/adminAuthService.js';

export const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { token, admin } = await loginAdmin(email, password);

        res.json({ message: 'Login successful', 
            token, 
            admin 
        });

    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};
