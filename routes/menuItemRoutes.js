import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { menuItems } from '../data/dummyMenuItems.js';
import { getMenuItems, createMenuItem } from '../controllers/menuItemController.js';

const router = express.Router();

router.get('/', (req, res) => {
    try {
        res.json(menuItems);
    } catch (error) {
        res.status(500).json({ message: 'Failed to load menu items' });
    }
});

router.post('/', protect, (req, res) => {
    res.status(403).json({ message: 'POST operation not supported on this endpoint' });
});

export default router;


