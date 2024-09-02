import express from 'express';
import Stripe from 'stripe';
import dotenv from 'dotenv';
import { protect } from '../middleware/authMiddleware.js'; 

dotenv.config();

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post('/create-payment-intent', protect, async (req, res) => {
    const { amount, currency = 'usd' } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount, 
            currency,
        });

        res.status(200).json({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        console.error('Error creating payment intent:', error);
        res.status(500).json({ error: error.message });
    }
});

export default router;