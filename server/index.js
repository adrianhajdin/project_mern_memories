import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/post.js';
import * as dotenv from 'dotenv'
const app = express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
// setup the starting path for all routes inside the post.js (from router file)
app.use('/posts', postRoutes);
app.get('/', (request, response) =>{
  response.send('Hello to memoreis API');
})

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));

