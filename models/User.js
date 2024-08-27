import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Define a simplified User schema with only name and password fields
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true }); // maybe remove the timestamp

// Middleware to hash the password before saving the user document
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next(); // Skip hashing if password hasn't changed
    }
    try {
        const salt = await bcrypt.genSalt(10); // Generate a salt
        this.password = await bcrypt.hash(this.password, salt); // Hash the password
        next();
    } catch (err) {
        return next(err); // Pass any errors to the next middleware
    }
});

// Method to compare entered password with the hashed password in the database
UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// Create and export the User model
const User = mongoose.model('User', UserSchema);

export default User;