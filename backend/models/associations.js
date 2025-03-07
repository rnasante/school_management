import Admin from './adminModel.js';
import Teacher from './teacherModel.js';
import Student from './studentModel.js';
// import Teacher from './teacherModel.js';

import Subject from './subjectModel.js';

//State the relationship between database tables models here
Student.belongsToMany(Subject, { through: 'StudentSubjects' });
Subject.belongsToMany(Student, { through: 'StudentSubjects' });

Teacher.belongsToMany(Subject, { through: 'TeacherSubjects' });
Subject.belongsToMany(Teacher, { through: 'TeacherSubjects' });


Admin.hasMany(Teacher, { foreignKey: 'admin_id' });
Teacher.belongsTo(Admin, { foreignKey: 'admin_id' });


export  {Student, Teacher, Admin, Subject};