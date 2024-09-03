import express from 'express';
import authRoutes from './authRoutes.js';
import menuItemRoutes from './menuItemRoutes.js';
import orderRoutes from './orderRoutes.js';
import restaurantRoutes from './restaurantRoutes.js';
import addressRoutes from './addressRoutes.js';
import paymentRoutes from './paymentRoutes.js';
import favoriteRoutes from './favoriteRoutes.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the Food Delivery App API');
});

router.use('/auth', (req, res, next) => {
    next();
}, authRoutes);

router.use('/menu-items', (req, res, next) => {
    next();
}, menuItemRoutes);

router.use('/orders', protect, (req, res, next) => {
    next();
}, orderRoutes);

router.use('/restaurants', (req, res, next) => {
    next();
}, restaurantRoutes);

router.use('/addresses', protect, (req, res, next) => {
    next();
}, addressRoutes);

router.use('/payment', protect, (req, res, next) => {
    next();
}, paymentRoutes);

router.use('/favorites', favoriteRoutes);

export default router;