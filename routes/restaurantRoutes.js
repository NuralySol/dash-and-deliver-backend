import express from 'express';
import { createRestaurant } from '../controllers/restaurantController.js';
import { protect } from '../middleware/authMiddleware.js';
import { restaurants } from '../data/dummyData.js';  // Import the dummy data

const router = express.Router();

// GET /restaurants - Return the dummy restaurant data
router.route('/')
    .get((req, res) => {
        res.json(restaurants);  // Respond with the dummy data
    })
    .post(protect, createRestaurant);  // POST request to create a new restaurant, protected route

export default router;