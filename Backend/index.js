const express = require('express');
import userRoutes from './routes/userRoutes';
import userReviewRoutes from './routes/userReviewRoutes';
import notebookRoutes from './routes/notebookRoutes';

const app = express();
const port = 4000;

app.use(express.json());
app.use('/user', userRoutes);
app.use('/review', userReviewRoutes);
app.use('/notebook', notebookRoutes);


app.listen(port, () => {
    console.log(`backend is running on port ${port}`);
});