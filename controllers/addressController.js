import Address from '../models/Address.js';

export const getAddresses = async (req, res) => {
    try {
        const addresses = await Address.find({ user: req.user._id });
        res.status(200).json(addresses);
    } catch (error) {
        console.error('Failed to fetch addresses:', error.message);
        res.status(500).json({ message: 'Failed to fetch addresses' });
    }
};

export const createAddress = async (req, res) => {
    try {
        const { address_line, city } = req.body;

        const address = new Address({
            user: req.user._id,
            address_line,
            city 
        });

        const createdAddress = await address.save();
        res.status(201).json(createdAddress);
    } catch (error) {
        console.error('Failed to create address:', error.message);
        res.status(500).json({ message: 'Failed to create address' });
    }
};

export const getAddressById = async (req, res) => {
    try {
        const address = await Address.findById(req.params.id);

        if (address && address.user.toString() === req.user._id.toString()) {
            res.status(200).json(address);
        } else {
            res.status(404).json({ message: 'Address not found or not authorized' });
        }
    } catch (error) {
        console.error('Failed to fetch address:', error.message);
        res.status(500).json({ message: 'Failed to fetch address' });
    }
};

export const updateAddress = async (req, res) => {
    try {
        const { address_line, city } = req.body;

        const address = await Address.findById(req.params.id);

        if (address && address.user.toString() === req.user._id.toString()) {
            address.address_line = address_line || address.address_line;
            address.city = city || address.city; 

            const updatedAddress = await address.save();
            res.status(200).json(updatedAddress);
        } else {
            res.status(404).json({ message: 'Address not found or not authorized' });
        }
    } catch (error) {
        console.error('Failed to update address:', error.message);
        res.status(500).json({ message: 'Failed to update address' });
    }
};

export const deleteAddress = async (req, res) => {
    try {
        const address = await Address.findById(req.params.id);

        if (address && address.user.toString() === req.user._id.toString()) {
            await Address.deleteOne({ _id: req.params.id });
            res.status(200).json({ message: 'Address removed' });
        } else {
            res.status(404).json({ message: 'Address not found or not authorized' });
        }
    } catch (error) {
        console.error('Failed to delete address:', error.message);
        res.status(500).json({ message: 'Failed to delete address' });
    }
};