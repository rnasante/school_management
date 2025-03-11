import { seedSchoolLevels } from "./schoolLevelSeeder.js";

const seedAll = async () => {
    try {
      await seedSchoolLevels();
    //   await seedClasses();
    //   await seedTeachers();
      console.log('✅ All seeders executed successfully');
      process.exit();
    } catch (error) {
      console.error('❌ Error running seeders:', error);
      process.exit(1);
    }
  };
  
  seedAll();