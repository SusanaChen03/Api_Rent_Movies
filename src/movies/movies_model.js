
import mongoose from 'mongoose';

const moviesSchema = new mongoose.Schema({
    name: String,
    year: Number,
    genre: String,
    actor: String,
});


const movies = mongoose.model('movies', moviesSchema);

export default movies;