import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get the token from the authorization header
            token = req.headers.authorization.split(' ')[1];
            
            // Decode the token to get the user's ID
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Find the user by ID and exclude the password from the result
            req.user = await User.findById(decoded.id).select('-password');

            // Check if the user was found
            if (!req.user) {
                return res.status(401).json({ message: 'User not found' });
            }

            // If everything is okay, proceed to the next middleware or route handler
            next();
        } catch (error) {
            console.error('Token verification failed:', error.message);
            res.status(401).json({ message: 'Not authorized, token failed' });
        }
    } else {
        res.status(401).json({ message: 'Not authorized, no token' });
    }
};