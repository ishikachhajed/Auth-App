import express from 'express';
import { getUserProfile, updateUserProfile, changePassword } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';
import { apiLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

// Apply general API rate limiting to all user routes
router.use(apiLimiter);

// Protect all routes below with auth middleware
router.use(protect);

router.route('/profile')
  .get(getUserProfile)
  .put(updateUserProfile);

router.put('/change-password', changePassword);

export default router;
