import bcrypt from 'bcrypt';
import env from 'dotenv';
import db from "../config/dbConnection.js";

env.config();

const findUser = async (username) => {
    const [rows] = await db.promise().query(
        `SELECT username, password,userid FROM user WHERE username = ?`,
        [username]
    );
    if (rows.length === 0) {
        return null;
    }
    return rows[0];
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

const deleteUser = async (userid) => {
    const [result] = await db.promise().query("DELETE FROM user WHERE userid = ?", [userid]);
    return result.affectedRows > 0;
}

export {
    comparePassword,
    findUser,
    registerUser,
    deleteUser
};

