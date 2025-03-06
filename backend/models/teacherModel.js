import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Teacher = sequelize.define('Teacher', {
    teacher_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
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

export default Teacher;
