import { response } from 'express';
import {  getStudentById, getAllStudents, updateStudent, deleteStudent, getTotalStudentCount } from '../services/studentServices.js';


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

export const allStudents = async (req, res) => {
  try {
    const students = await getAllStudents();

    res.status(200).json({
      success: true,
      message: 'All student records fetched successfully!',
      students
    });

  } catch(error) {
    console.log('Error in allStudents controller: ', error);

    res.status(500).json({
      success: false,
      message: 'Error fetching all students\' details',
      error: error.message
    });
  }
}

export const totalStudentsCount = async (req, res) => {
  try {
    const totalStudentsNumber = await getTotalStudentCount();

    res.status(200).json({
      success: true,
      message: 'Total students count fetched successfully',
      count: totalStudentsNumber
    });
  } catch (error) {
    console.error('Error in totalStudentsCount controller:', error);

    res.status(500).json({
      success: false,
      message: 'Error fetching total students count',
      error: error.message
    });
  }
}

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

export const getTotalStudents = async (req, res) => {
  try {
    const count = await getTotalStudentCount();
    res.status(200).json({
      success: true,
      count: count
    });
  } catch (error) {
    console.error('Error in getTotalStudents controller:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching total student count',
      error: error.message
    });
  }
}; 