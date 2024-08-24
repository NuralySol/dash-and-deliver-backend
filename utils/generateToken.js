import jwt from 'jsonwebtoken';

// Function to generate a JWT token with a specified user ID
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d', // Token expiration time
    });
};

export default generateToken;