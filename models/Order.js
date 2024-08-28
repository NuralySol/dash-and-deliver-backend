import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true,
    },
    total_amount: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

const Order = mongoose.model('Order', OrderSchema);

export default Order;