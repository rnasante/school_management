import Subject from '../models/subjectModel.js';

export const createSubject = async (subjectData) => {
    const{subject_name, subject_code, department_name} = subjectData;

    const existingSubject = await Subject.findOne({ where: { subject_name } });
    if (existingSubject) {
        throw new Error('Subject already exists');
    }

    const newSubject = await subjectData.create({
        subject_name,
        subject_code,
        department_name
    })

    return newSubject;
};
