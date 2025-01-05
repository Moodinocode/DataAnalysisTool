import express from 'express'
import { signup, login } from '../controllers/authControllers.js'

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/profile');

export default router