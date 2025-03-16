import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import { generateModelID } from '../utilities/idGenerator.js';


const Teacher = sequelize.define('Teacher', {
    teacher_id: {
        type: DataTypes.STRING,
        allowNull: false,  
        primaryKey: true
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
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isTemporaryPassword: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    school_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    // department_id: {
    //     // type: DataTypes.INTEGER,
    //     // allowNull: true,
    //     // references: {
    //     //     key: department_id
    //     // },
    // },
    subject_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    user_id: {  // Foreign key column
        type: DataTypes.STRING,
        allowNull: true, // A teacher might not be linked to an admin
        references: { 
            key: 'user_id' // Points to admin_id in Admin table
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL' // If admin is deleted, set admin_id to NULL
    },
    residential_address: {
        type: DataTypes.STRING(225),
        allowNull: true
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
