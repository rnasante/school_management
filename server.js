import express from 'express';
import next from 'next';
//const app = express();
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
// const port = 3000;

import studentRoutes from './routes/studentRoutes.js';

app.prepare().then(() => {
    const server = express(); 
// Ensure `server` is declared here


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