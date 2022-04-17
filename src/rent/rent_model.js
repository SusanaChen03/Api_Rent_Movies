
import mongoose from 'mongoose';


const rentSchema = new mongoose.Schema({
    idUser: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
    idMovie: { type: mongoose.Schema.Types.ObjectId, ref:"movies", required: true },
    rentDay: Date,   //una fecha
    expiryDay: Date, //una fecha 
});


const rent = mongoose.model('rent', rentSchema);

export default rent;