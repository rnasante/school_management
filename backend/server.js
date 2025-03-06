import express from 'express';
import next from 'next';
// import dotenv from 'dotenv';

// dotenv.config();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
// const port = 3000;
import authRoutes from './routes/superAdminAuthRoutes.js';
import studentRoutes from './routes/studentRoutes.js';
import createAdminRoutes from './routes/createAdminRoutes.js';


// Ensure `server` is declared here
app.prepare().then(() => {
    const server = express(); 

    // parse JSON request bodies
    server.use(express.json());

  //Super Admin authentication route
  server.use('/api/auth', authRoutes)
  console.log('super admin routes loaded under /api');

  //create new admin route
  server.use('/api/admin', createAdminRoutes)
  console.log('add new admin route loaded under /api');

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