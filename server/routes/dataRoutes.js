import express from 'express'
import { uploadBusinessData, analyzeData, getDataHistory } from '../controllers/DataProcessing.js'
import { authMiddleware } from '../middleware/auth.js'

const router = express.Router();

// Protect all data routes with authentication
router.use(authMiddleware);

router.post('/upload', uploadBusinessData);
router.post('/analyze/:dataId', analyzeData);
router.get('/history/:userId', getDataHistory);

export default router