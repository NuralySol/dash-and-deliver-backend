import mongoose from 'mongoose';

const AddressSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    unit_number: String,
    street_number: String,
    address_line_1: {
        type: String,
        required: true,
    },
    address_line_2: String,
    city: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Address = mongoose.model('Address', AddressSchema);

export default Address;