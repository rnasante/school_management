const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = 3001;

app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sms'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database.');
});

// Serve static files from the frontend
app.use(express.static('public'));

// Example route
app.get('/api', (req, res) => {
    res.send('API is working!');
});

// Test database connection
app.get('/api/testdb', (req, res) => {
    db.query('SELECT * FROM grades', (err, results) => {
        if (err) {
            res.status(500).send('Database query failed');
            return;
        }
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
