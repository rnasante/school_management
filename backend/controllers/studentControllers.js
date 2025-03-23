import {  getStudentById, updateStudent, deleteStudent } from '../services/studentServices.js';

// export const addStudent = async (req, res) => {
//   try {
//     const result = await registerStudent(req.body);
//     res.status(201).json({message: 'Student registered successfully', data: result});

//   } catch (error) {
//     console.error('Error in addStudent controller:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Error registering student',
//       error: error.message
//     });
//   }
// };

export const getStudent = async (req, res) => {
  try {
    const result = await getStudentById(req.params.student_id);
    res.status(200).json({message: 'Student details fetched successfully', data: result});

  } catch (error) {
    console.error('Error in getStudent controller:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching student details',
      error: error.message
    });
  }
};

export const updateStudentDetails = async (req, res) => {
  try {
    const result = await updateStudent(req.params.student_id, req.body);
    res.status(200).json({message: 'Student details updated successfully', data: result});

  } catch (error) {
    console.error('Error in updateStudentDetails controller:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating student details',
      error: error.message
    });
  }
};

export const removeStudent = async (req, res) => {
  try {
    const result = await deleteStudent(req.params.student_id);
    res.status(200).json({message: 'Student deleted successfully', data: result});

  } catch (error) {
    console.error('Error in removeStudent controller:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting student',
      error: error.message
    });
  }
}; 