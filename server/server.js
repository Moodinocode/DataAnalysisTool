import express from 'express';
import authRoutes from './routes/authRoutes';
import dataRoutes from './routes/dataRoutes';

const app = express();

app.use(express.json());





//Routes
app.use('/auth',authRoutes);
app.use('/data',dataRoutes);




app.listen(process.env.PORT, ()=>{
  console.log(`Server is running on port ${process.env.PORT}`);
})