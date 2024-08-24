import Address from '../models/Address.js';

// Get all addresses for the authenticated user
export const getAddresses = async (req, res) => {
    try {
        const addresses = await Address.find({ user: req.user._id }); // Fetch addresses associated with the logged-in user
        res.status(200).json(addresses); // Return the list of addresses
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch addresses' }); // Handle errors
    }
};

// Create a new address for the authenticated user
export const createAddress = async (req, res) => {
    try {
        const { unit_number, street_number, address_line_1, address_line_2, city } = req.body;

        // Create a new address associated with the logged-in user
        const address = new Address({
            user: req.user._id, // Assign the user ID from the token
            unit_number,
            street_number,
            address_line_1,
            address_line_2,
            city,
        });

        // Save the address to the database
        const createdAddress = await address.save();
        res.status(201).json(createdAddress); // Return the newly created address
    } catch (error) {
        res.status(500).json({ message: 'Failed to create address' }); // Handle errors
    }
};

// Get a specific address by ID for the authenticated user
export const getAddressById = async (req, res) => {
    try {
        const address = await Address.findById(req.params.id);

        // Check if the address belongs to the authenticated user
        if (address && address.user.toString() === req.user._id.toString()) {
            res.status(200).json(address);
        } else {
            res.status(404).json({ message: 'Address not found or not authorized' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch address' }); // Handle errors
    }
};

// Update an existing address for the authenticated user
export const updateAddress = async (req, res) => {
    try {
        const { unit_number, street_number, address_line_1, address_line_2, city } = req.body;

        const address = await Address.findById(req.params.id);

        // Check if the address belongs to the authenticated user
        if (address && address.user.toString() === req.user._id.toString()) {
            address.unit_number = unit_number || address.unit_number;
            address.street_number = street_number || address.street_number;
            address.address_line_1 = address_line_1 || address.address_line_1;
            address.address_line_2 = address_line_2 || address.address_line_2;
            address.city = city || address.city;

            const updatedAddress = await address.save(); // Save the updated address
            res.status(200).json(updatedAddress); // Return the updated address
        } else {
            res.status(404).json({ message: 'Address not found or not authorized' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to update address' }); // Handle errors
    }
};

// Delete an address for the authenticated user
export const deleteAddress = async (req, res) => {
    try {
        const address = await Address.findById(req.params.id);

        // Check if the address belongs to the authenticated user
        if (address && address.user.toString() === req.user._id.toString()) {
            await address.remove(); // Remove the address from the database
            res.status(200).json({ message: 'Address removed' }); // Confirm deletion
        } else {
            res.status(404).json({ message: 'Address not found or not authorized' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete address' }); // Handle errors
    }
};