
import express from 'express';
import { toggleFavoriteRestaurant, getFavoriteRestaurants } from '../controllers/favoriteController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/:userId/favorites')
    .post(protect, toggleFavoriteRestaurant) 
    .get(protect, getFavoriteRestaurants);   

export default router;