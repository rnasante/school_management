import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('sms', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });
  
  export default sequelize ;