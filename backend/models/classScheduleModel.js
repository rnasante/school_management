import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const ClassSchedule = sequelize.define('ClassSchedule', {
  schedule_id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  class_id: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
        model: 'classes',
        key: "class_id" 
     }
  },
  subject_id: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
       model: 'subjects',
       key: "subject_id" 
    }
  },
  teacher_id: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
        model: 'teachers',
        key: "teacher_id" 
     }
  },
  day: {
    type: DataTypes.ENUM('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'),
    allowNull: false,
  },
  start_time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  end_time: {
    type: DataTypes.TIME,
    allowNull: false,
  }
}, { timestamps: true });

export default ClassSchedule;
