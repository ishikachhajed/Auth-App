import express from 'express';
import { signupUser, loginUser } from '../controllers/authController.js';
import { signupLimiter, loginLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

// Apply rate limiting middleware to specific routes
router.post('/signup', signupLimiter, signupUser);
router.post('/login', loginLimiter, loginUser);

export default router;
