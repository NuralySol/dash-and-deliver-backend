import express from 'express';
import authRoutes from './authRoutes.js';
import menuItemRoutes from './menuItemRoutes.js';
import orderRoutes from './orderRoutes.js';
import restaurantRoutes from './restaurantRoutes.js';
import addressRoutes from './addressRoutes.js';
import paymentRoutes from './paymentRoutes.js'; 
import { protect } from '../middleware/authMiddleware.js'; 

const router = express.Router();

// Home route is unprotected
router.get('/', (req, res) => {
    res.send('Welcome to the Food Delivery App API');
});

// Apply the protect middleware to routes that require authentication
router.use('/auth', authRoutes);
router.use('/menu-items', protect, menuItemRoutes);  
router.use('/orders', protect, orderRoutes);        
router.use('/restaurants', restaurantRoutes);       
router.use('/addresses', protect, addressRoutes);    
router.use('/payment', protect, paymentRoutes);      

export default router;