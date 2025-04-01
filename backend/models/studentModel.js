import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import { generateModelID } from '../utilities/idGenerator.js';

const Student = sequelize.define('Student', {
  student_id: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: () => generateModelID('STD')
  },
  user_id: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'user_id'
    }
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
  date_of_birth: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  gender: {
    type: DataTypes.ENUM('male', 'female', 'other'),
    allowNull: true
  },
  blood_group: {
    type: DataTypes.STRING,
    allowNull: true
  },
  street_address: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true
  },
  state: {
    type: DataTypes.STRING,
    allowNull: true
  },
  country: {
    type: DataTypes.STRING,
    allowNull: true
  },
  postal_code: {
    type: DataTypes.STRING,
    allowNull: true
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isEmail: true
    }
  },
  class_id: {
    type: DataTypes.STRING,
    allowNull: true,
    references: {
      model: 'Classes',
      key: 'class_id'
    }
  },
  section_id: {
    type: DataTypes.STRING,
    allowNull: true,
    references: {
      model: 'Sections',
      key: 'section_id'
    }
  },
  admission_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  parent_name: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  parent_phone: {
    type: DataTypes.STRING,
    allowNull: true
  },
  parent_email: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isEmail: true
    }
  },
  emergency_contact: {
    type: DataTypes.STRING,
    allowNull: true
  },
  emergency_contact_name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  previous_school: {
    type: DataTypes.STRING,
    allowNull: true
  },
  previous_grade: {
    type: DataTypes.STRING,
    allowNull: true
  },
  documents: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: {}
  },
  status: {
    type: DataTypes.ENUM('active', 'inactive', 'graduated', 'transferred'),
  }
}, {
  timestamps: true,
  tableName: 'students'
});

export default Student;
