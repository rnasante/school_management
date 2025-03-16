import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const User = sequelize.define('User', {
    user_id: { type: DataTypes.STRING, primaryKey: true, unique: true, allowNull: false, autoIncrement: false },
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    other_names: { type: DataTypes.STRING, allowNull: true },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.ENUM('teacher', 'accountant', 'headteacher', 'superadmin'), allowNull: false },
}, { timestamps: true });

export default User;
