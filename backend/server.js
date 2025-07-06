import express from 'express';
import cors from 'cors';
import { connectDB } from './Config/dB.js';
import dotenv from 'dotenv';
import foodRouter from './Routes/FoodRoute.js';
import userRouter from './Routes/UserRoutes.js';

dotenv.config();    

// app config
const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());

// db config    
connectDB();

// api routes

app.use('/api/food', foodRouter)
app.use('/images', express.static('Uploads')) // Serve static files from the 'Uploads' directory
app.use('/api/user', userRouter)

app.get('/', (req, res)=>{
    res.send('api is active!')

})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    
})