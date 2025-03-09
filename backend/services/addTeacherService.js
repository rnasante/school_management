import Teacher from "../models/teacherModel.js";
import {genTempPass} from '../utilities/generateTempPass.js'
import { hashPassword } from "../utilities/hashPassword.js";
import { generateModelID } from "../utilities/idGenerator.js";

export const createTeacher = async (teacherData) => {
    const {first_name,  last_name, email} = teacherData;

    const existingTeacher = await Teacher.findOne({where: {email}});
    console.log('Existing teacher:', existingTeacher);
    if(existingTeacher) throw new Error('Teacher already exists');

    const tempPassword = genTempPass();
    console.log("Temporary Password:", tempPassword);
    console.log("Password Type:", typeof tempPassword);

    const hashTempPass = await hashPassword(tempPassword);
    console.log("Hashed Password:", hashTempPass);

    const newTeacher = await Teacher.create({
        teacher_id: generateModelID('TCH'),
        first_name,
        last_name,
        email,
        password: hashTempPass,
        isTemporaryPassword: true
    });

    // const safeTeacher = newTeacher;

    // return {...safeTeacher, tempPassword};

    // Directly return the object with tempPassword included
    return { ...newTeacher.toJSON(), tempPassword };
}

// createTeacher({email: 'kay@gym.com', })