import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String,
    avatar: String,
    preferences: String,
    points: Number,
});

const users = mongoose.model('users',userSchema);

export default users;