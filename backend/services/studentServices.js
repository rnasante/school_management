import { generateModelID } from '../utilities/idGenerator.js';
import User from '../models/userModel.js';
import Student from '../models/studentModel.js';
import SchoolLevel from '../models/schoolLevelModel.js';
import Year from '../models/classYearModel.js';
import Class from '../models/classModel.js';



export const getStudentById = async (student_id) => {
  const student = await Student.findByPk(student_id,
  {include: [{
      model: User,
      as: 'user',
      attributes: [ 'user_id']
    }]
  }
);
  if (!student) throw new Error('Student not found');
  return student;
};

export const getAllStudents = async () => {
  const allStudents = await Student.findAll({
    include: [
      {model: SchoolLevel, as: 'schoolLevel', attributes: ['schoollevel_name']},
      {model: Year, as: 'year', attributes: ['year_name']},
      {model: Class, as: 'classInfo' , attributes: ['class_name']}
     ],
   });


  if(!allStudents) throw new Error('Students not found');

  return allStudents;
}

export const updateStudent = async (student_id, updateData) => {
  const student = await Student.findByPk(student_id);
  if (!student) throw new Error('Student not found');

  // // Get the list of fields (attributes) for each model
  // const studentAttrs = Object.keys(Student.getAttributes);
  // const userAttrs = Object.keys(User.getAttributes);

  // // Separate the update data for each model
  // const studentUpdateData = {};
  // const userUpdateData = {};

  // // For each key in updateData, if it exists in the respective model, add it.
  // for (const key in updateData) {
  //   if (studentAttrs.includes(key)) {
  //     studentUpdateData[key] = updateData[key];
  //   }
  //   if (userAttrs.includes(key)) {
  //     userUpdateData[key] = updateData[key];
  //   }
  // }

  // // Update the Student record with its own fields
  // await student.update(studentUpdateData);

  // // If there's data for the User model, update the associated User record
  // if (Object.keys(userUpdateData).length > 0) {
  //   const user = await User.findOne({ where: { user_id: student.user_id } });
  //   if (user) {
  //     await user.update(userUpdateData);
  //   }
  // }

  await student.update(updateData);
  return student;
};

export const deleteStudent = async (student_id) => {

  const student = await Student.findByPk(student_id);

  if (!student) throw new Error('Student not found');
  
  await student.update({ status: 'inactive' });
};

export const getTotalStudentCount = async () => {
  try {
    const count = await Student.count();
    return count;
  } catch (error) {
    console.error('Error getting total student count:', error);
    throw new Error('Failed to get total student count');
  }
};