
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';
import authRoutes from "./routes/auth.js";

const app = express();

app.use(express.json({ limit: '30mb'}))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use("/api/auth", authRoutes);

const CONNECTION_URL = process.env.MONGO_URI
const PORT = process.env.PORT|| 5000;

const startserver = async () =>{
  try{
    await mongoose.connect(CONNECTION_URL);

    console.log('MongoDB Connected Succesfully');

    app.listen(PORT, '0.0.0.0', ()=>{
      console.log(`Server Running On Port:${PORT}`);
    });
  }catch (error) {
    console.error('Database Connection Error:', error.message);
    process.exit(1);
  }
}
startserver();