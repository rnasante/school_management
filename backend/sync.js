import sequelize from './config/database.js';
// import {Admin, Teacher, Student, Subject, Class, Section, Year, SchoolLevel} from './models/associations.js'; 
import './models/associations.js'
import {createSuperAdmin} from './createSuperAdmin.js';


const syncModels = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('All models were synchronized successfully.');
    
    // Call createSuperAdmin AFTER syncing models
    await createSuperAdmin();
  } catch (error) {
    console.error('Error syncing models:', error);
  }
};

syncModels();
