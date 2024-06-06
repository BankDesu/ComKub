import dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST ,
    user: process.env.DB_USER ,
    password: process.env.DB_PASS ,
    database: process.env.DB_NAME ,
    port: process.env.DB_PORT
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('MySQL Connected...');
});

export default db;
