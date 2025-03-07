import { createSubject } from '../services/addSubjectService.js';

export const addSubject = async (req, res) => {
    try {
        const newSubject = req.body;
        const subject = await createSubject(newSubject);
        res.status(201).json({ message: 'Subject added successfully', subject });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
