import express from 'express';
import Stripe from 'stripe';
import dotenv from 'dotenv';
import { protect } from '../middleware/authMiddleware.js'; // Import protect middleware

dotenv.config();

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Route to create a payment intent (protected)
router.post('/create-payment-intent', protect, async (req, res) => {
    const { amount, currency = 'usd' } = req.body;

    try {
        // Create a PaymentIntent with the specified amount and currency
        const paymentIntent = await stripe.paymentIntents.create({
            amount, // The amount to charge in the smallest currency unit (e.g., cents)
            currency,
        });

        // Respond with the client secret from the payment intent
        res.status(200).json({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        console.error('Error creating payment intent:', error);
        res.status(500).json({ error: error.message });
    }
});

export default router;