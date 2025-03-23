import { generateModelID } from '../utilities/idGenerator.js';
import User from '../models/userModel.js';
import Student from '../models/studentModel.js';


// export const registerStudent = async (studentData) => {

//   const { student_id, first_name, last_name, other_names, email, role } = studentData;
  
//   const existingStudent = await Student.findOne({ where: { student_id} });
//   if (existingStudent) {
//     throw new Error('Student with this student ID already exists');
//   }

//   // Check if user already exists
//   const existingUser = await User.findOne({ where: { email: studentData.email } });
//   if (existingUser) {
//     throw new Error('User with this email already exists');
//   }

  

//   const user = await User.create({
//     id: generateModelID('USR'),
//     first_name,
//     last_name,
//     other_names,
//     role: 'student',
//     email,
//     status: 'pending' // Students can't log in yet
//   });

//   const student = await Student.create({
//     ...studentData,
//     user_id: user.user_id,
//     student_id: generateModelID('STD'),
//     admission_date: new Date()
//   });

//   return { student, user };
// };

export const getStudentById = async (student_id) => {
  const student = await Student.findByPk(student_id, {
    include: [{
      model: User,
      attributes: [ 'email', 'phone_number', 'status']
    }]
  });
  if (!student) throw new Error('Student not found');
  return student;
};

export const updateStudent = async (student_id, updateData) => {
  const student = await Student.findByPk(student_id);
  if (!student) throw new Error('Student not found');
  await student.update(updateData);
  return student;
};

export const deleteStudent = async (student_id) => {
  const student = await Student.findByPk(student_id);
  if (!student) throw new Error('Student not found');
  await student.update({ status: 'inactive' });
};