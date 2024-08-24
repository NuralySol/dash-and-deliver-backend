import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Define the User schema with fields for name, password, and role
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
}, { timestamps: true });

// Middleware to hash the password before saving the user document
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10); // Generate a salt with a cost factor of 10
    this.password = await bcrypt.hash(this.password, salt); // Hash the password with the generated salt
});

// Method to compare entered password with the hashed password in the database
UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', UserSchema);

export default User;