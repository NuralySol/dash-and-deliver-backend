import mongoose from 'mongoose';

// Sample ObjectId for restaurants (in real scenarios, these would be actual ObjectIds from your MongoDB)
const sampleObjectId = () => new mongoose.Types.ObjectId();

export const menuItems = [
    {
        restaurant: sampleObjectId(), // Pizza Palace
        item_name: 'Margherita Pizza',
        price: 12.99,
    },
    {
        restaurant: sampleObjectId(), // Pizza Palace
        item_name: 'Pepperoni Pizza',
        price: 14.99,
    },
    {
        restaurant: sampleObjectId(), // Burger Barn
        item_name: 'Classic Cheeseburger',
        price: 9.99,
    },
    {
        restaurant: sampleObjectId(), // Burger Barn
        item_name: 'Double Bacon Burger',
        price: 11.99,
    },
    {
        restaurant: sampleObjectId(), // Sushi Spot
        item_name: 'California Roll',
        price: 8.99,
    },
    {
        restaurant: sampleObjectId(), // Sushi Spot
        item_name: 'Spicy Tuna Roll',
        price: 10.99,
    },
    {
        restaurant: sampleObjectId(), // Pasta Place
        item_name: 'Spaghetti Carbonara',
        price: 13.99,
    },
    {
        restaurant: sampleObjectId(), // Pasta Place
        item_name: 'Fettuccine Alfredo',
        price: 12.99,
    },
    {
        restaurant: sampleObjectId(), // Taco Town
        item_name: 'Beef Taco',
        price: 4.99,
    },
    {
        restaurant: sampleObjectId(), // Taco Town
        item_name: 'Chicken Quesadilla',
        price: 7.99,
    },
    {
        restaurant: sampleObjectId(), // Curry Corner
        item_name: 'Chicken Tikka Masala',
        price: 15.99,
    },
    {
        restaurant: sampleObjectId(), // Curry Corner
        item_name: 'Lamb Vindaloo',
        price: 17.99,
    },
    {
        restaurant: sampleObjectId(), // Dragon’s Delight
        item_name: 'General Tso’s Chicken',
        price: 12.99,
    },
    {
        restaurant: sampleObjectId(), // Dragon’s Delight
        item_name: 'Kung Pao Shrimp',
        price: 14.99,
    },
    {
        restaurant: sampleObjectId(), // BBQ Haven
        item_name: 'BBQ Ribs',
        price: 19.99,
    },
    {
        restaurant: sampleObjectId(), // BBQ Haven
        item_name: 'Pulled Pork Sandwich',
        price: 11.99,
    },
    {
        restaurant: sampleObjectId(), // Mediterranean Magic
        item_name: 'Gyro Wrap',
        price: 9.99,
    },
    {
        restaurant: sampleObjectId(), // Mediterranean Magic
        item_name: 'Falafel Plate',
        price: 12.99,
    },
    {
        restaurant: sampleObjectId(), // Vegan Vibes
        item_name: 'Vegan Burger',
        price: 11.99,
    },
    {
        restaurant: sampleObjectId(), // Vegan Vibes
        item_name: 'Quinoa Salad',
        price: 9.99,
    },
];