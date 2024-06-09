import express from 'express';
import authMiddleware from '../middleware/auth.js';
import { deleteReview, lookupReview, lookupReviewByNotebook, newReview, updateReview } from '../model/userReview.js';

const userReviewRoutes = express.Router();

userReviewRoutes.post('/create', authMiddleware, async (req, res) => {
    const { review_title, performance_score, service_score, notebook_id } = req.body;
    const { user_id } = req.user; // Fetch user_id from the authenticated user

    try {
        const result = await createReview(user_id, notebook_id, review_title, performance_score, service_score);
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
});


userReviewRoutes.post('/edit', authMiddleware, async (req, res) => {
    const { reviewid, notebook_id, review_title, performance_score, service_score } = req.body;
    try {
        const review = await updateReview(reviewid, notebook_id, review_title, performance_score, service_score);
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
