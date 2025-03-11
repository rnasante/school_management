import Admin from './adminModel.js';
import Teacher from './teacherModel.js';
import Subject from './subjectModel.js';
import SchoolLevel from './schoolLevelModel.js';
import Class from './classModel.js';
import Section from './classSectionModel.js';
import Year from './classYearModel.js';
import Student from './studentModel.js';
// import Subject from './subjectModel.js';
// import Class from './classModel.js';
// import SchoolLevel from './schoolLevelModel.js';
// import Section from './classSectionModel.js';
// import Year from './classYearModel.js';


//State the relationship between database tables models here
const defineAssociation = () => { 

    // Admin - Teacher Relationship
Admin.hasMany(Teacher, { foreignKey: 'admin_id' });
Teacher.belongsTo(Admin, { foreignKey: 'admin_id' });

// Many-to-Many: Student - Subject
Student.belongsToMany(Subject, { through: 'StudentSubjects' });
Subject.belongsToMany(Student, { through: 'StudentSubjects' });

// Many-to-Many: Teacher - Subject
Teacher.belongsToMany(Subject, { through: 'TeacherSubjects' });
Subject.belongsToMany(Teacher, { through: 'TeacherSubjects' });

// One-to-Many: SchoolLevel - Class
SchoolLevel.hasMany(Class, { foreignKey: 'schoollevel_id' });
Class.belongsTo(SchoolLevel, { foreignKey: 'schoollevel_id' });

// One-to-Many: SchoolLevel - Section
SchoolLevel.hasMany(Section, { foreignKey: 'schoollevel_id' });
Section.belongsTo(SchoolLevel, { foreignKey: 'schoollevel_id', allowNull: true });

// One-to-Many: Class - Section (For high schools)
Class.hasMany(Section, { foreignKey: 'class_id' });
Section.belongsTo(Class, { foreignKey: 'class_id', allowNull: true });

// One-to-Many: SchoolLevel - Student
SchoolLevel.hasMany(Student, { foreignKey: 'schoollevel_id' });
Student.belongsTo(SchoolLevel, { foreignKey: 'schoollevel_id' });

// Student - Section Relationship
Student.belongsTo(Section, { foreignKey: 'section_id' });

// Student - Year Relationship
Student.belongsTo(Year, { foreignKey: 'year_id' });

    // Admin.hasMany(Teacher, { foreignKey: 'admin_id' });
    // Teacher.belongsTo(Admin, { foreignKey: 'admin_id' });

    // Student.belongsToMany(Subject, { through: 'StudentSubjects' });
    // Subject.belongsToMany(Student, { through: 'StudentSubjects' });

    // Teacher.belongsToMany(Subject, { through: 'TeacherSubjects' });
    // Subject.belongsToMany(Teacher, { through: 'TeacherSubjects' });

    // SchoolLevel.hasMany(Class, { foreignKey: 'schoollevel_id' });
    // Class.belongsTo(SchoolLevel, { foreignKey: 'schoollevel_id' });

    // SchoolLevel.hasMany(Section, { foreignKey: 'schoollevel_id' }); // Basic school uses this
    // Class.hasMany(Section, { foreignKey: 'class_id' }); // High school uses this
    // Section.belongsTo(SchoolLevel, { foreignKey: 'schoollevel_id', allowNull: true });
    // Section.belongsTo(Class, { foreignKey: 'class_id', allowNull: true });

    // SchoolLevel.hasMany(Student, { foreignKey: 'schoollevel_id' });
    // Student.belongsTo(SchoolLevel, { foreignKey: 'schoollevel_id' }); // Required for both
    // Student.belongsTo(Section, { foreignKey: 'section_id' }); // Section (A, B, C)
    // Student.belongsTo(Year, { foreignKey: 'year_id' }); // Year (1, 2, 3)
}

defineAssociation();


export  {Student, Teacher, Admin, Subject, Class, Section, Year, SchoolLevel};