import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    address_line: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: false,
    }
}, { timestamps: true });

const Address = mongoose.model('Address', addressSchema);

export default Address;