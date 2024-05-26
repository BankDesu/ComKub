const express = require('express');
const db = require('./db/dbConnection'); // Import the db connection

const app = express();
const port = 4000;

app.get('', (req, res) => {
    db.query('SELECT * FROM users', (err, rows) => {
        if (err) {
            res.status(500).send('Internal Server Error');
            return;
        }
        res.send(rows);
    });
})
app.listen(port, () => {
    console.log(`backend is running on port ${port}`);
});