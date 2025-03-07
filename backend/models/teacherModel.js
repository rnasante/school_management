import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Admin from './adminModel.js';
import { generateModelID } from '../utilities/idGenerator.js';


const Teacher = sequelize.define('Teacher', {
    teacher_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    admin_id: {  // Foreign key column
        type: DataTypes.STRING,
        allowNull: true, // A teacher might not be linked to an admin
        references: { 
            key: 'admin_id' // Points to admin_id in Admin table
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL' // If admin is deleted, set admin_id to NULL
    },
    school_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    first_name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    other_names: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    subject_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    residential_address: {
        type: DataTypes.STRING(225),
        allowNull: false
    },
    teacher_contact_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    tableName: 'Teachers',
    timestamps: false
});

// Hook to generate Teacher ID before record creation
Teacher.beforeCreate(async (teacher) => {
    teacher.teacher_id = generateModelID('TCH');
});

export default Teacher;
