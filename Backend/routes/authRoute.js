import dotenv from 'dotenv';
import express from 'express';
import jwt from 'jsonwebtoken';
import authMiddleware from '../middleware/auth.js';
import { comparePassword, findUser, registerUser } from '../model/auth.js';

const authRoutes = express.Router();
dotenv.config();

authRoutes.all("/" ,async (req,res,next) => {
    res.sendStatus(200);
});

authRoutes.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await findUser(username);
        if (!user) {
            return res.status(401).send('Invalid username or password');
        }
        const passwordMatch = await comparePassword(password, user.password);
        if (!passwordMatch) {
            return res.status(401).send('Invalid username or password');
        }
        const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET);
        res.cookie('token', token, { httpOnly: true });
        res.send('Login successful');
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
});

authRoutes.post('/register', async (req, res) => {
    const { username, password, email } = req.body;
    try {
        const user = await registerUser(username, password, email);
        res.status(200).send(user);
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
});
authRoutes.get('/logout', authMiddleware, (req, res) => {
    res.clearCookie('token');
    res.send('Logout successful');
});

authRoutes.get('/check', async (req, res) => {
    try {
        res.sendStatus(200);
    } catch (err) {
        res.sendStatus(500);
    }
});


export default authRoutes;

