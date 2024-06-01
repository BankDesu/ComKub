import express from 'express';
import notebookRoutes from './routes/notebookRoutes.js';
import userReviewRoutes from './routes/userReviewRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
const port = 4000;

app.use(express.json());
app.use('/user', userRoutes);
app.use('/review', userReviewRoutes);
app.use('/notebook', notebookRoutes);


app.listen(port, () => {
    console.log(`backend is running on port ${port}`);
});