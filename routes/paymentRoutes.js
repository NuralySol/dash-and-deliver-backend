// routes/paymentRoutes.js
import express from 'express';
import { createPaymentIntent } from '../controllers/paymentController.js';
import { protect } from '../middleware/authMiddleware.js'; // Import protect middleware

const router = express.Router();

// Route to create a payment intent (protected)
router.post('/create-payment-intent', protect, createPaymentIntent);

export default router;