import {createTeacher} from '../services/addTeacherService.js';
import { tempPassResetEmail } from '../utilities/sendPassResetEmail.js';

export const addTeacher = async (req, res) => {
    try{
        const teacher = req.body;
        const newTeacher = await createTeacher(teacher);
        console.log("New Teacher Data:", newTeacher);

        // const { newTeacheremail, tempPassword: generatedTempPass } = newTeacher;
        console.log("Sending email to:", newTeacher.email);
        
        if (!newTeacher.email) {
            throw new Error("Teacher email is missing");
        }

        // console.log("Sending email to:", newTeacher.email);
        // if (!newTeacher.email) {
        //     throw new Error("Teacher email is missing");
        // }


        await tempPassResetEmail(newTeacher.email, newTeacher.tempPassword);


        // Filter out sensitive data (both password and tempPassword) from the response
        const { password, ...safeTeacher } = newTeacher;

        res.status(201).json({ message: 'Teacher added successfully', newTeacher: safeTeacher })
    } catch(error){
        res.status(400).json({ error: error.message });
    }
}