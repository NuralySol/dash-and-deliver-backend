import express from 'express';
import { getMenuItems, createMenuItem } from '../controllers/menuItemController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getMenuItems).post(protect, createMenuItem);

export default router;