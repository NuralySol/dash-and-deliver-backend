
import User from '../models/userModel.js';

export const toggleFavoriteRestaurant = async (req, res) => {
    const { userId } = req.params;
    const { restaurantId } = req.body;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isFavorite = user.favorites.includes(restaurantId);

        if (isFavorite) {
            user.favorites.pull(restaurantId);
        } else {
            user.favorites.push(restaurantId);
        }

        await user.save();
        res.json(user.favorites);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

export const getFavoriteRestaurants = async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await User.findById(userId).populate('favorites');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user.favorites);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};