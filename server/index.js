import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const port = Number(process.env.PORT) || 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the server!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
