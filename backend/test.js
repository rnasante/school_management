import Admin from './backend/models/adminModel.js';
import sequelize from './config/database.js';

(async () => {
    await sequelize.authenticate(); // Ensure DB connection

    const testAdmin = { first_name: "Test", last_name: "User", email: "test@example.com" };
    await Admin.runHooks('beforeCreate', testAdmin);
    console.log("Test admin ID:", testAdmin.admin_id); // Should log generated ID

    await sequelize.close(); // Close DB connection
})();
