import Subject from '../models/subjectModel.js';
import { generateModelID5 } from '../utilities/idGenerator.js';

export const createSubject = async (subjectData) => {
    const{subject_name, subject_code, department_name} = subjectData;

    const existingSubject = await Subject.findOne({ where: { subject_name } });
    if (existingSubject) {
        throw new Error('Subject already exists');
    }

    const newSubject = await Subject.create({
        subject_id: generateModelID5('SUB'),
        subject_name,
        subject_code,
        department_name
    })

    return newSubject;
};

