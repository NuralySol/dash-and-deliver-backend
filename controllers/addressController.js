import Address from '../models/Address.js';

// Get all addresses for the authenticated user
export const getAddresses = async (req, res) => {
    try {
        const addresses = await Address.find({ user: req.user._id });
        res.status(200).json(addresses);
    } catch (error) {
        console.error('Failed to fetch addresses:', error.message);
        res.status(500).json({ message: 'Failed to fetch addresses' });
    }
};

// Create a new address for the authenticated user
export const createAddress = async (req, res) => {
    try {
        const { address_line, city } = req.body;

        // Create a new address associated with the logged-in user
        const address = new Address({
            user: req.user._id,
            address_line,
            city // Optional field
        });

        const createdAddress = await address.save();
        res.status(201).json(createdAddress);
    } catch (error) {
        console.error('Failed to create address:', error.message);
        res.status(500).json({ message: 'Failed to create address' });
    }
};

// Get a specific address by ID for the authenticated user
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

// Update an existing address for the authenticated user
export const updateAddress = async (req, res) => {
    try {
        const { address_line, city } = req.body;

        const address = await Address.findById(req.params.id);

        if (address && address.user.toString() === req.user._id.toString()) {
            address.address_line = address_line || address.address_line;
            address.city = city || address.city; // City is optional

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

// Delete an address for the authenticated user
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