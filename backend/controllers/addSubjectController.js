import { createSubject } from '../services/addSubjectService.js';

export const addSubject = async (req, res) => {
    try {
        const subject = req.body;
        const newsubject = await createSubject(subject);
        res.status(201).json({ message: 'Subject added successfully', newsubject });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// export const addSubject = async (req, res) => {
//     try {
//         console.log("Request SuperAdmin Data:", req.superAdmin); // Debug log

//         if (!req.superAdmin || !req.superAdmin.email) {
//             return res.status(403).json({ error: "Unauthorized: Email missing" });
//         }

//         const subject = req.body;
//         const newsubject = await createSubject(subject);
//         res.status(201).json({ message: 'Subject added successfully', newsubject });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };
