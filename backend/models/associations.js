import User from './userModel.js';
// import Admin from './adminModel.js';
import Teacher from './teacherModel.js';
import Subject from './subjectModel.js';
import SchoolLevel from './schoolLevelModel.js';
import Program from './programModel.js';
import Section from './classSectionModel.js';
import Year from './classYearModel.js';
import Student from './studentModel.js';
import Class from './classModel.js';
import ClassSchedule from './classScheduleModel.js';



//State the relationship between database tables models here
const defineAssociation = () => { 

// user - teacher  relationship
User.hasMany(Teacher, {foreignKey: 'user_id', as: 'teacher'});
Teacher.belongsTo(User, {foreignKey: 'user_id', as: 'user'})

// user - student  relationship
User.hasOne(Student, {foreignKey: 'user_id', as: 'student'});
Student.belongsTo(User, {foreignKey: 'user_id', as: 'user'})

// Many-to-Many: Student - Subject
Student.belongsToMany(Subject, { through: 'StudentSubjects', foreignKey: 'student_id', as: 'subject' });
Subject.belongsToMany(Student, { through: 'StudentSubjects', foreignKey: 'subjectid', as: 'student' });

// Many-to-Many: Teacher - Subject
Teacher.belongsToMany(Subject, {through: 'TeacherSubject', foreignKey: 'teacher_id', as: 'subject' });
Subject.belongsToMany(Teacher, {through: 'TeacherSubject', foreignKey: 'subject_id', as: 'teacher' });

// One-to-Many: SchoolLevel - Program
SchoolLevel.hasMany(Program, { foreignKey: 'schoollevel_id', as: 'program' });
Program.belongsTo(SchoolLevel, { foreignKey: 'schoollevel_id', as: 'schoolLevel' });

// One-to-Many: SchoolLevel - Class
SchoolLevel.hasMany(Class, {foreignKey: 'schoollevel_id', as: 'classInfo'});
Class.belongsTo(SchoolLevel, {foreignKey: 'schoollevel_id', as: 'schoolLevel'});

// Link ClassSchedule to Class
ClassSchedule.belongsTo(Class, { foreignKey: 'class_id', as: 'classInfo' });
Class.hasMany(ClassSchedule, { foreignKey: 'class_id', as: 'classSchedule' });

// Link ClassSchedule to Teacher
ClassSchedule.belongsTo(Teacher, { foreignKey: 'teacher_id', as: 'teacher' });
Teacher.hasMany(ClassSchedule, { foreignKey: 'teacher_id', as: 'classSchedule' });

// Link ClassSchedule to Subject
ClassSchedule.belongsTo(Subject, { foreignKey: 'subject_id', as: 'subject' });
Subject.hasMany(ClassSchedule, { foreignKey: 'subject_id', as: 'classSchedule' });

// One-to-Many: - Program - Class 
Program.hasMany(Class, {foreignKey: 'program_id', as: 'classInfo'});
Class.belongsTo(Program, {foreignKey:'program_id', allowNull: true, as: 'program'});

// One-to-Many: SchoolLevel - Section
SchoolLevel.hasMany(Section, { foreignKey: 'schoollevel_id', as: 'section' });
Section.belongsTo(SchoolLevel, { foreignKey: 'schoollevel_id', allowNull: true , as: 'schoolLevel'});

// One-to-Many: Class - Section
Class.hasMany(Section, {foreignKey: 'class_id', as: 'section'});
Section.belongsTo(Class, {foreignKey: 'class_id', allowNull: true, as: 'classInfo'});

// One-to-Many: Program - Section (For high schools)
Program.hasMany(Section, { foreignKey: 'program_id', as: 'section' });
Section.belongsTo(Program, { foreignKey: 'program_id', allowNull: true, as: 'program' });

// One-to-Many: SchoolLevel - Student
SchoolLevel.hasMany(Student, { foreignKey: 'schoollevel_id', as: 'student' });
Student.belongsTo(SchoolLevel, { foreignKey: 'schoollevel_id', as: 'schoolLevel' });

//One-to-Many: Class - student
Class.hasMany(Student, {foreignKey: 'class_id', as: 'student'});
Student.belongsTo(Class, {foreignKey: 'class_id', as: 'classInfo'});

//One-to-Many: Program - student
Program.hasMany(Student, {foreignKey: 'program_id', as: 'student'});
Student.belongsTo(Program, {foreignKey: 'program_id', allowNull: true, as: 'program'});

//One-to-Many: Student - Section Relationship
Section.hasMany(Student, {foreignKey: 'section_id', as: 'student'});
Student.belongsTo(Section, { foreignKey: 'section_id', allowNull: true, as: 'section' });


// Student - Year Relationship
Year.hasMany(Student, {foreignKey: 'year_id', as: 'student'});
Student.belongsTo(Year, { foreignKey: 'year_id', as: 'year' });

    
}

defineAssociation();


export  {Student, Teacher, User, Subject, Program, Section, Year, SchoolLevel};