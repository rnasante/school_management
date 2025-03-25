import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const User = sequelize.define('User', {
    user_id: { type: DataTypes.STRING, primaryKey: true, unique: true, allowNull: false, autoIncrement: false },
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    other_names: { type: DataTypes.STRING, allowNull: true },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    phone_number: { type: DataTypes.STRING, unique: true, allowNull: true },
    password: { type: DataTypes.STRING, allowNull: false },
    isTemporaryPassword: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    role: { type: DataTypes.ENUM('teacher', 'accountant', 'headteacher', 'superadmin', 'student'), allowNull: false },
    status: { type: DataTypes.ENUM('pending', 'active', 'inactive'), allowNull: true },
}, { timestamps: true, return: true });

export default User;
