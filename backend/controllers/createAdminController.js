import { createAdmin } from '../services/createAdminService.js';

export const addAdmin = async (req, res) => {
    try {
        const newAdmin = await createAdmin(req.body);
        res.status(201).json({ message: 'Admin created successfully', admin: newAdmin });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
