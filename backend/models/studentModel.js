import { DataTypes } from 'sequelize';
import sequelize  from '../config/database.js';


const Student = sequelize.define('Student', {
    student_id: {
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
    },


})

export default Student; 