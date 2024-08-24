import express from 'express';
import authRoutes from './authRoutes.js';
import menuItemRoutes from './menuItemRoutes.js';
import orderRoutes from './orderRoutes.js';
import restaurantRoutes from './restaurantRoutes.js';
import addressRoutes from './addressRoutes.js';
import paymentRoutes from './paymentRoutes.js'; // Import the payment routes
import { protect } from '../middleware/authMiddleware.js'; // Import the protect middleware

const router = express.Router();

// Home route is unprotected
router.get('/', (req, res) => {
    res.send('Welcome to the Food Delivery App API');
});

// Apply the protect middleware to routes that require authentication
router.use('/auth', authRoutes);
router.use('/menu-items', protect, menuItemRoutes);  // Protecting menu item routes
router.use('/orders', protect, orderRoutes);         // Protecting order routes
router.use('/restaurants', restaurantRoutes);        // Restaurant routes can be unprotected or protected based on your use case
router.use('/addresses', protect, addressRoutes);    // Protecting address routes
router.use('/payment', protect, paymentRoutes);      // Protecting payment routes

export default router;