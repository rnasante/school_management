import express from 'express';
import next from 'next';
// import dotenv from 'dotenv';

// dotenv.config();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
// const port = 3000;
import superAdminLoginRoutes from './routes/superAdminLoginRoutes.js';
import adminLoginRoutes from './routes/adminLoginRoutes.js';
import studentRoutes from './routes/studentRoutes.js';
import addAdminRoutes from './routes/addAdminRoutes.js';
import addSubjectRoutes from './routes/addSubjectRoutes.js';
import addTeacherRoutes from './routes/addTeacherRoutes.js';
import addClassRoutes from './routes/addClassRoutes.js';



// Ensure `server` is declared here
app.prepare().then(() => {
    const server = express(); 

    // parse JSON request bodies
    server.use(express.json());

    //Super Admin authentication route
    server.use('/api/auth', superAdminLoginRoutes)
    console.log('super admin auth routes loaded under /api');

    //Admin authentication route
    server.use('/api/auth', adminLoginRoutes)
    console.log('admin auth routes loaded under /api');

    //create new admin route
    server.use('/api/admin', addAdminRoutes)
    console.log('add new admin route loaded under /api');

    //create new teacher route
    server.use('/api/teacher', addTeacherRoutes)
    console.log('add new teacher route loaded under /api')

    //create new subject route
    server.use('/api/subject', addSubjectRoutes)
    console.log('add new subject route loaded under /api');

    //create new class related routes
    server.use('/api',  addClassRoutes);
    console.log('Class related routes loaded under /api');

    // Get all student routes
    server.use('/api',  studentRoutes);
    console.log('Student routes loaded under /api');

    // Handling Next.js pages
    server.get('*', (req, res) => {
      return handle(req, res);
    });


    const port = process.env.PORT || 3000;
    server.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
      });
});