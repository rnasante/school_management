import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
// import SchoolLevel from "./schoolLevelModel.js";

const Class = sequelize.define("Class", {
  class_id: { type: DataTypes.STRING,  primaryKey: true },
  class_name: { type: DataTypes.STRING, allowNull: true }, // Science, Arts, Business (NULL for Basic)
});

// SchoolLevel.hasMany(Class, { foreignKey: "schoolLevelId" });
// Class.belongsTo(SchoolLevel, { foreignKey: "schoolLevelId" });

export default Class;
