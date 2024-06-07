import bcrypt from 'bcrypt';
import env from 'dotenv';
import db from "../config/dbConnection.js";

env.config();

const findUser = async (username) => {
    const result = await db.promise().query(`SELECT username,password FROM users WHERE username = ?`,
        [username]
    );
    return result.rows[0];
}

const registerUser = async (username, password, email) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await db.promise().query(
        'INSERT INTO users (username,password,email) VALUES (?,?,?) RETURNING *',
        [username, hashedPassword, email]
    );
    return result.rows[0];
}

const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};

export {
    comparePassword, findUser,
    registerUser
};
