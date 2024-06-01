import express from 'express';
import logger from '../config/logger';
import { deleteUser, lookupUser, newUser, updateUser } from '../model/user';

const router = express.Router();

userRoutes.post('/create', async (req, res) => {
    const { username,password,birthday,gender,email } = req.body;
    try {
        const user = await newUser(username,password,birthday,gender,email );
        res.status(200).send(user);
    } catch (err) {
        logger.error(err);
        res.status(500).send('Internal Server Error');
    } 
});

userRoutes.post('/edit', async (req, res) => {
    const { userid,username,password,email } = req.body;
    try {
        const user = await updateUser(userid,username,password,email);
        res.status(200).send(user);
    } catch (err) {
        logger.error(err);
        res.status(500).send('Internal Server Error');
    }
});

userRoutes.delete('/delete', async (req, res) => {
    const { userid } = req.body;
    try {
        const user = await deleteUser(userid);
        res.status(200).send(user);
    } catch (err) {
        logger.error(err);
        res.status(500).send('Internal Server Error');
    }
});


userRoutes.get('/displayUser', async (req, res) => {
    const { userid } = req.query;
    try {
        const user = await lookupUser(userid);
        res.send(user);
    } catch (err) {
        logger.error(err);
        res.status(500).send('Internal Server Error');
    }
});

export default router;