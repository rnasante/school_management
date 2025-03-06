import { loginSuperAdmin } from '../services/authSuperAdminService.js';

export const superAdminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { token, superAdmin } = await loginSuperAdmin(email, password);
        
        res.json({ 
            message: 'Login successful', 
            token, 
            superAdmin: { id: superAdmin.admin_id, email: superAdmin.email } 
        });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};
