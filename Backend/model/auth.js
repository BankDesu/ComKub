import bcrypt from 'bcrypt';
import env from 'dotenv';
import db from "../config/dbConnection.js";

env.config();

const findUser = async (username) => {
    const result = await db.promise().query(`SELECT username,password FROM user WHERE username = ?`,
        [username]
    );
    console.log(result);
    return result;
}

const registerUser = async (username, password, email) => {
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await db.promise().query(
        'INSERT INTO user (username,password,email) VALUES (?,?,?) ',
        [username, hashedPassword, email]
    );
    return result;
}

const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};

export {
    comparePassword,
    findUser,
    registerUser
};

