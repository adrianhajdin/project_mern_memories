
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import dotenv from "dotenv"
dotenv.config();

import postRoutes from './routes/posts.js';

import connectDB from './db/db.js';

const app = express();

connectDB();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);

const PORT = process.env.PORT|| 5000;

app.listen(PORT,() => {
  console.log(`Server Running on Port: http://localhost:${PORT}`);
})