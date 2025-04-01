import Teacher from "../models/teacherModel.js";
import Student from "../models/studentModel.js";
import { generateModelID } from "./idGenerator.js";


const roleModels = {
    teacher:{model: Teacher, idField: "teacher_id", prefix: "TCH"},
    student:{model: Student, idField: "student_id", prefix: "STD"}
    // accountant: Accountant
};

export const createRoleSpecificData = async (user, extraData) => {

    console.log("Received user in createRoleSpecificData:", user?.dataValues || user);
    console.log("ExtraData received:", extraData);

    if (!user || !user.role) {
        throw new Error("Invalid user object passed to createRoleSpecificData");
    }

    const roleData = roleModels[user.role];

    if (!roleData) {
        throw new Error(`❌ Role '${user.role}' is not defined in roleModels`);
    }

    const { model, idField, prefix } = roleData;
    const recordData = {
        [idField]: generateModelID(prefix), // Dynamically generate ID
        user_id: user.user_id,
        first_name: user.first_name,
        last_name: user.last_name,
        other_names: user.other_names,
        email: user.email,
        password: extraData.password,
        ...extraData
    }; 

    // await model.create(recordData);
    console.log("Final recordData to be inserted:", recordData);
    await model.create(recordData);

    
};
