import mongoose from 'mongoose';

const moviesSchema = new mongoose.Schema({
    name: String,
    year: Number,
    genre: String,
    actor: String,
    price: Number,
    rentTime: Number,
    points: Number, 
    state: String,
    image: String
});


const movies = mongoose.model('movies', moviesSchema);

export default movies;