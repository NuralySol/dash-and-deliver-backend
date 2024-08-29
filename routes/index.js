import express from 'express';
import authRoutes from './authRoutes.js';
import menuItemRoutes from './menuItemRoutes.js';
import orderRoutes from './orderRoutes.js';
import restaurantRoutes from './restaurantRoutes.js';
import addressRoutes from './addressRoutes.js';
import paymentRoutes from './paymentRoutes.js';
// Import the protect middleware if needed for other routes
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Home route is unprotected
router.get('/', (req, res) => {
    console.log('Home route accessed');
    res.send('Welcome to the Food Delivery App API');
});

// Auth routes, still protected as per your setup
router.use('/auth', (req, res, next) => {
    console.log('Auth route accessed');
    next();
}, authRoutes);

// Menu items route, no protection applied for GET, POST, PUT, DELETE
router.use('/menu-items', (req, res, next) => {
    console.log('Menu Items route accessed');
    next();
}, menuItemRoutes);

// Orders route remains protected
router.use('/orders', protect, (req, res, next) => {
    console.log('Orders route accessed');
    next();
}, orderRoutes);

// Restaurants route, unprotected for GET but protected for POST
router.use('/restaurants', (req, res, next) => {
    console.log('Restaurants route accessed');
    next();
}, restaurantRoutes);

// Addresses route remains protected
router.use('/addresses', protect, (req, res, next) => {
    console.log('Addresses route accessed');
    next();
}, addressRoutes);

// Payment routes remain protected
router.use('/payment', protect, (req, res, next) => {
    console.log('Payment route accessed');
    next();
}, paymentRoutes);

export default router;