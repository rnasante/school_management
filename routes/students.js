const express = require('express');
const router = express.Router();
const mysql = require('mysql');

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yournewpassword',
    database: 'yourdatabase'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database.');
});

// Endpoint to get student count
router.get('/student-count', (req, res) => {
    const query = 'SELECT COUNT(*) AS studentCount FROM students'; // Replace 'students' with your actual table name
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err.stack);
            res.status(500).send('Database query failed');
            return;
        }
        const count = results[0].studentCount;
        res.json({ count });
    });
});

module.exports = router;
