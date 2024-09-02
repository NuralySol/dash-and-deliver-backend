import express from 'express';
import { createRestaurant } from '../controllers/restaurantController.js';
import { protect } from '../middleware/authMiddleware.js';
import { restaurants } from '../data/dummyData.js';  

const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.json(restaurants);  
    })
    .post(protect, createRestaurant);  

export default router;