import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
// import Class from "./classModel.js";
// import SchoolLevel from "./schoolLevelModel.js";

const Section = sequelize.define("Section", {
  section_id: { type: DataTypes.STRING,  primaryKey: true },
  section_name: { type: DataTypes.STRING, allowNull: true }, // "A", "B", "C", etc.
});

// SchoolLevel.hasMany(Section, { foreignKey: "schoolLevelId" }); // Basic school uses this
// Class.hasMany(Section, { foreignKey: "classId" }); // High school uses this
// Section.belongsTo(SchoolLevel, { foreignKey: "schoolLevelId", allowNull: true });
// Section.belongsTo(Class, { foreignKey: "classId", allowNull: true });

export default Section;
