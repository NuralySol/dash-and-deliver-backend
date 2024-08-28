import mongoose from 'mongoose';

const AddressSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    address_line: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Address = mongoose.model('Address', AddressSchema);

export default Address;