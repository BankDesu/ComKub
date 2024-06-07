import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';

import authRoutes from './routes/authroute.js';
import notebookRoutes from './routes/notebookRoutes.js';
import userReviewRoutes from './routes/userReviewRoutes.js';
import userRoutes from './routes/userRoutes.js';

import authMiddleware from './middleware/auth.js';

const app = express();
const port = 4000;

const corsOptions = {
    origin: [
        'http://localhost',
        'http://localhost:4000',
        'http://localhost:5173',

    ],
    credentials: true,
    optionSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


app.all("/", (req, res) => {
    res.sendStatus(200)
});

app.use('/auth', authRoutes);
app.use('/user', authMiddleware, userRoutes);
app.use('/review', authMiddleware, userReviewRoutes);
app.use('/notebook', notebookRoutes);


app.listen(port, () => {
    console.log(`backend is running on port ${port}`);
});