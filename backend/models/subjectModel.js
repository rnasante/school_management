import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import { generateModelID } from '../utilities/idGenerator.js';

const Subject = sequelize.define('Subject', {
    subject_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    subject_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    subject_code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    credit_hours: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    department_id: {
        type: DataTypes.STRING,
        allowNull: true
    }
    // created_by: {
    //     type: DataTypes.UUID,
    //     allowNull: false
    // }
}, {
    tableName: 'subjects', // Explicit table name
    timestamps: true // Adds created_at & updated_at
});


// Hook to generate Subject ID before record creation
Subject.beforeCreate(async (subject) => {
    subject.subject_id = generateModelID('SUB');
});

export default Subject;
