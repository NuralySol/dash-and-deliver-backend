import Order from '../models/Order.js';

export const getOrders = async (req, res) => {
    const orders = await Order.find({ user: req.user._id }).populate('restaurant');
    res.json(orders);
};

export const createOrder = async (req, res) => {
    const { restaurant, total_amount, delivery_fee } = req.body;

    const order = new Order({
        user: req.user._id,
        restaurant,
        total_amount,
        delivery_fee,
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
};