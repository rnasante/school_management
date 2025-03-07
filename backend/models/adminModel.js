import { DataTypes } from 'sequelize';
import sequelize  from '../config/database.js';
import { generateModelID } from '../utilities/idGenerator.js';

const Admin = sequelize.define('Admin', {
    admin_id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
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
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: 'admin'
    },
 
});

// Hook to generate Admin ID before record creation
console.log("Admin model loaded!");
Admin.beforeCreate((admin) => {
    console.log("BeforeCreate hook triggered");
    if (!admin.admin_id) {
        admin.admin_id = generateModelID('ADM');
    }
    console.log("Generated Admin ID:", admin.admin_id);
});

export default Admin;