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
    console.log('Home route accessed');
    res.send('Welcome to the Food Delivery App API');
});

// Apply the protect middleware to routes that require authentication
router.use('/auth', (req, res, next) => {
    console.log('Auth route accessed');
    next();
}, authRoutes);

router.use('/menu-items', protect, (req, res, next) => {
    console.log('Menu Items route accessed');
    next();
}, menuItemRoutes);

router.use('/orders', protect, (req, res, next) => {
    console.log('Orders route accessed');
    next();
}, orderRoutes);

router.use('/restaurants', (req, res, next) => {
    console.log('Restaurants route accessed');
    next();
}, restaurantRoutes);

router.use('/addresses', protect, (req, res, next) => {
    console.log('Addresses route accessed');
    next();
}, addressRoutes);

router.use('/payment', protect, (req, res, next) => {
    console.log('Payment route accessed');
    next();
}, paymentRoutes);

export default router;