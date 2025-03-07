import { DataTypes } from 'sequelize';
import sequelize  from '../config/database.js';
import { generateModelID } from '../utilities/idGenerator.js';


const Student = sequelize.define('Student', {
    student_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    school_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    other_names: {
        type: DataTypes.STRING,
        allowNull: true
    },
    form_level: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date_of_birth: {
        type: DataTypes.DATE,
        allowNull: false
    },
    guardian_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    }

});

// Hook to generate Student ID before record creation
Student.beforeCreate(async (student) => {
    student.student_id = generateModelID('STU');
})

export default Student; 