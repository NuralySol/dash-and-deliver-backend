import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const API_URL = process.env.RESTAURANT_API_URL;

export const getRestaurants = async (req, res) => {
    try {
        const response = await axios.get(`${API_URL}/restaurants`);
        const restaurants = response.data;

        res.status(200).json(restaurants);
    } catch (error) {
        console.error('Error fetching restaurants:', error);
        res.status(500).json({ message: 'Failed to fetch restaurants' });
    }
};

export const createRestaurant = async (req, res) => {
    try {
        const { name, address, phone } = req.body;

        const response = await axios.post(`${API_URL}/restaurants`, {
            name,
            address,
            phone,
        });

        const createdRestaurant = response.data;
        res.status(201).json(createdRestaurant);
    } catch (error) {
        console.error('Error creating restaurant:', error);
        res.status(500).json({ message: 'Failed to create restaurant' });
    }
};