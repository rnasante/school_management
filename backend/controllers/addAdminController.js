import { createAdmin } from '../services/addAdminService.js';

export const addAdmin = async (req, res) => {
    try {
        console.log('Received request body:', req.body);
        const newAdmin = await createAdmin(req.body);

        res.status(201).json({ message: 'Admin created successfully', newAdmin });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
