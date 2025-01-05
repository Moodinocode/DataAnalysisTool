import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import dataRoutes from './routes/dataRoutes.js';
import sequelize from './config/database.js';
import './models/associations.js';

dotenv.config();

const app = express();

app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/data', dataRoutes);

// Database sync and server start
const PORT = process.env.PORT;

const startServer = async () => {
    try {
        await sequelize.sync();
        console.log('Database synchronized');
        
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Server startup failed:', error);
    }
};

startServer();