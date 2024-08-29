import mongoose from 'mongoose';

const RestaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
    
}, { timestamps: true });

const Restaurant = mongoose.model('restaurants', RestaurantSchema);

export default Restaurant;