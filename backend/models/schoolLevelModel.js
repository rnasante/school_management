import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const SchoolLevel =  sequelize.define('SchoolLevel', {
    schoollevel_id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    schoollevel_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
})

export default SchoolLevel;