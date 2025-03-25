import sequelize from './config/database.js';
import {Student, User} from './models/associations.js'
import './models/associations.js'
import {createSuperAdmin} from './createSuperAdmin.js';

console.log("Student associations:", Student.associations);
console.log("User associations:", User.associations);

const syncModels = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log('All models were synchronized successfully.');
    
    // Call createSuperAdmin AFTER syncing models
    await createSuperAdmin();
  } catch (error) {
    console.error('Error syncing models:', error);
  }
};

syncModels();
