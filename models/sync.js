//sync the models of your database with your actual database

const { } = require('./models/associations');

const syncModels = async () => {
  try {
    await sequelize.sync({ force: true }); // force: true recreates tables if there are already existing ones
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Error syncing models:', error);
  }
};

syncModels();
