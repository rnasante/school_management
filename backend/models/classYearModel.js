import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Year = sequelize.define("Year", {
  year_id: { type: DataTypes.STRING,  primaryKey: true },
  year_name: { type: DataTypes.STRING, allowNull: false, unique: true }, // "Year 1", "Year 2", "Year 3"
});

export default Year;
