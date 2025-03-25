import { getTeacherById, updateTeacher, deleteTeacher } from "../services/teacherServices.js";

export const getTeacher = async (req, res) => {
    try{
        const teacher = await getTeacherById(req.params.teacher_id);

        res.status(200).json({message: 'Teacher fetched successfully: ', teacher});

    } catch(error) {
        console.error('Error in getTeacher controller:', error);

        res.status(500).json({
        success: false,
        message: 'Error fetching teacher details',
        error: error.message
        });
    }
}

export const updateTeacherDetails = async (req, res) => {
    try {
        const teacher = await updateTeacher(req.params.teacher_id, req.body);

        res.status(200).json({message: 'Teacher updated successfully', teacher})
    } catch(error) {
        console.error('Error in updateTeacherDetails controller:', error);

        res.status(500).json({
            success: false,
            message: 'Error updating teacher details',
            error: error.message
        })
    }
}

export const removeTeacher = async (req, res) => {
    try {
      const teacher = await deleteTeacher(req.params.teacher_id);
      res.status(200).json({message: 'Teacher deleted successfully', teacher});
  
    } catch (error) {
      console.error('Error in removeTeacher controller:', error);
      res.status(500).json({
        success: false,
        message: 'Error deleting teacher',
        error: error.message
      });
    }
}