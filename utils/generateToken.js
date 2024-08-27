import jwt from 'jsonwebtoken';

// Function to generate a JWT token with a specified user ID and username
const generateToken = (id, username) => {
    return jwt.sign({ id, username }, process.env.JWT_SECRET, {
        expiresIn: '30d', // Token expiration time
    });
};

export default generateToken;