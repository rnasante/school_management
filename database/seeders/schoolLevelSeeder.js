import { generateModelIdSchLvl } from '../../backend/utilities/idGenerator.js';
import  SchoolLevel from '../../backend/models/schoolLevelModel.js';

export const seedSchoolLevels = async () => {
  await SchoolLevel.bulkCreate([
    { schoollevel_id: generateModelIdSchLvl('BAS'), schoollevel_name: 'Basic School' },
    { schoollevel_id: generateModelIdSchLvl('JHS'), schoollevel_name: 'Junior High School' },
    { schoollevel_id: generateModelIdSchLvl('SHS'), schoollevel_name: 'Senior High School' }
  ]);
};

seedSchoolLevels()
  .then(() => {
    console.log('School levels seeded successfully');
    process.exit();
  })
  .catch((err) => {
    console.error('Error seeding school levels:', err);
    process.exit(1);
  });
