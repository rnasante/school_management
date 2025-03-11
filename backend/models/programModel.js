import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Program = sequelize.define('Program', {
    program_id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    program_name: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

export default Program;