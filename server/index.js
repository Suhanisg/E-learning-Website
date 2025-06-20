import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const port =5000;

app.get('/', (req, res) => {
    res.send('Welcome to the server!');
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});