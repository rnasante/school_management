import { AccessControl } from "accesscontrol";

const ac = new AccessControl();

ac.grant('teacher')
    .readOwn('profile')
    .updateOwn('profile');

ac.grant('accountant')
    .extend('teacher')  // Accountant can also do what a teacher can
    .readAny('reports');

ac.grant('admin')
    .extend('accountant') // Admin can do what accountant & teacher can
    .createAny('reports')
    .updateAny('reports')
    .deleteAny('reports');

ac.grant('superadmin')
    .extend('admin') // Superadmin has full access
    .deleteAny('user');

export default ac;