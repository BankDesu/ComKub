import express from 'express';
import authMiddleware from '../middleware/auth.js';
import { deleteReview, lookupReview, lookupReviewByNotebook, newReview, updateReview } from '../model/userReview.js';

const userReviewRoutes = express.Router();

userReviewRoutes.post('/create', async (req, res) => {
    const { userid, notebook_id, performance_score, service_score } = req.body;
    console.log(req.body);
    try {
        const result = await newReview(userid, notebook_id, performance_score, service_score);
        res.status(201).json(result);
        console.log(result);
    } catch (error) {
        console.error('Error creating review:', error); // Add detailed logging
        res.status(500).json({ error: 'Error creating review' });
    }
});

userReviewRoutes.post('/edit', authMiddleware, async (req, res) => {
    const { reviewid, notebook_id, performance_score, service_score } = req.body;
    try {
        const review = await updateReview(reviewid, notebook_id, performance_score, service_score);
        res.status(200).send(review);
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
});

userReviewRoutes.delete('/delete', authMiddleware, async (req, res) => {
    const { reviewid } = req.body;
    try {
        const review = await deleteReview(reviewid);
        res.status(200).send(review);
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
});

userReviewRoutes.get('/displayReview', async (req, res) => {
    const { reviewid } = req.query;
    try {
        const review = await lookupReview(reviewid);
        res.send(review);
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
});

userReviewRoutes.get('/displayReviewByNotebook', async (req, res) => {
    const { notebook_id } = req.query;
    try {
        const review = await lookupReviewByNotebook(notebook_id);
        res.send(review);
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
});

export default userReviewRoutes;
