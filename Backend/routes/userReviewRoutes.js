import express from 'express';
import { deleteReview, displayPrefromanceAvgScore, displayServiceAvgScore, lookupReview, lookupReviewByNotebook, newReview, updateReview } from '../model/userReview.js';

const userReviewRoutes = express.Router();

userReviewRoutes.post('/create', async (req, res) => {
    const { userid,notebook_id,review_title,perfromance_score,service_score } = req.body;
    try {
        const review = await newReview(userid,notebook_id,review_title,perfromance_score,service_score);
        res.status(200).send(review);
    } catch (err) {

        res.status(500).send('Internal Server Error');
    } 
});

userReviewRoutes.post('/edit', async (req, res) => {
    const { reviewid,notebook_id,review_title,perfromance_score,service_score } = req.body;
    try {
        const review = await updateReview(reviewid,notebook_id,review_title,perfromance_score,service_score);
        res.status(200).send(review);
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
});

userReviewRoutes.delete('/delete', async (req, res) => {
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

userReviewRoutes.get('/displayPerformanceAvgScore', async (req, res) => {
    const { notebook_id } = req.query;
    try {
        const review = await displayPrefromanceAvgScore(notebook_id);
        res.send(review);
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
});

userReviewRoutes.get('/displayServiceAvgScore', async (req, res) => {
    const { notebook_id } = req.query;
    try {
        const review = await displayServiceAvgScore(notebook_id);
        res.send(review);
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
});

export default userReviewRoutes;