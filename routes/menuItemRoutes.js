import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { menuItems } from '../data/dummyMenuItems.js';
import { getMenuItems, createMenuItem } from '../controllers/menuItemController.js';

const router = express.Router();

// Route to get dummy menu items
router.get('/', (req, res) => {
    try {
        res.json(menuItems);
    } catch (error) {
        res.status(500).json({ message: 'Failed to load menu items' });
    }
});

// Keeping the POST route the same with protect middleware
router.post('/', protect, (req, res) => {
    // If you want to allow creating menu items dynamically later, you can keep this route.
    // Currently, it just sends a placeholder response since we're using dummy data for now.
    res.status(403).json({ message: 'POST operation not supported on this endpoint' });
});

export default router;


