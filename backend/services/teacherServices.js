import Teacher from '../models/teacherModel.js';

export const getTeacherById = async (teacher_id) => {
    const teacher = await Teacher.findByPk(teacher_id);

    if (!teacher) throw new Error('Teacher not found');
    return teacher;
};

export const updateTeacher = async (teacher_id, updateData) => {
    const teacher = await Teacher.findByPk(teacher_id);

    if (!teacher) throw new Error('Teacher not found');

    await teacher.update(updateData);

    return teacher;
};

export const deleteTeacher = async (teacher_id) => {
    const teacher = await Teacher.findByPk(teacher_id);
    if (!teacher) throw new Error('Teacher not found');

    await teacher.update({status: 'inactive'});

    return { message: 'Teacher deleted successfully' };
};
