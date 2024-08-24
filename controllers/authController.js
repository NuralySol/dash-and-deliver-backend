import User from '../models/User.js';
import generateToken from '../utils/generateToken.js';

// Controller function to handle user registration
export const registerUser = async (req, res) => {
    const { name, password } = req.body;

    const userExists = await User.findOne({ name });

    if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    const user = await User.create({
        name,
        password,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            token: generateToken(user._id),
        });
    } else {
        res.status(400).json({ message: 'Invalid user data' });
    }
};

// Controller function to handle user login
export const loginUser = async (req, res) => {
    const { name, password } = req.body;

    const user = await User.findOne({ name });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            token: generateToken(user._id),
        });
    } else {
        res.status(401).json({ message: 'Invalid name or password' });
    }
};