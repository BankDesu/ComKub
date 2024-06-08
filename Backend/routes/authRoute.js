import dotenv from 'dotenv';
import express from 'express';
import jwt from 'jsonwebtoken';
import authMiddleware from '../middleware/auth.js';
import { comparePassword, findUser, registerUser } from '../model/auth.js';

const authRoutes = express.Router();
dotenv.config();

authRoutes.all("/" ,async (req,res) => {
    res.sendStatus(200);
});

authRoutes.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).send('Missing username or password');
        }
        const user = await findUser(username);
        if (!user) {
            return res.status(401).send('User not found');
        }
        if (user && !user.password) {
            return res.status(401).send('Password not found');
        }
        if(await comparePassword(password, user.password)) {
            const token = jwt.sign({ username }, process.env.JWT_SECRET);
            res.cookie('token', token);
            res.status(200).send('Login successful');
        } else {
            res.status(401).send('Invalid password');
        }
    } catch (err) {
        console.error('Login failed:', err);
        res.status(500).send('Internal Server Error');
    }
});

authRoutes.post('/register', async (req, res) => {
    const { username, password, email } = req.body;
    try {
      const user = await registerUser(username, password, email);
      res.status(200).send('Registration successful');
    } catch (err) {
      console.error('Registration failed:', err);
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

