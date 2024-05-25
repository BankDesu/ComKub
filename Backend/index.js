const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

app.use (bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => 
{
    res.json({ message: 'Welcome to the backend!' });
});

app.listen(port, () => {
    console.log(`backend is running on port ${port}`);
})