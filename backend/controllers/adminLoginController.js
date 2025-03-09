import { loginAdmin } from '../services/adminLoginService.js';

export const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { token, admin } = await loginAdmin(email, password);

        const{password:_, ...adminData} = admin;

        res.json({ message: 'Login successful', 
            token, 
            adminData 
        });

    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};
