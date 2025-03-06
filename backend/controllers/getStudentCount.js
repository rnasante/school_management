import Student from '../models/studentModel.js'; 

const getStudentCount = async (req, res) => {
  try {
    const studentCount = await Student.count({});
    res.json({ studentCount });
  } catch (error) {
    console.error('Error fetching student count:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default getStudentCount;