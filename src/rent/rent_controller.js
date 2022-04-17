import Rent from "./rent_model.js";
import Movie from "../movies/movies_model.js";
import mongoose from 'mongoose';


export { createRent, getAllRents, updateRent, deleteRent, getRentsUser, getRentActive };

const createRent = async (req, res) => {
  try {
   //  datos que entran por parametros: idUser: String, idMovie: String, 
    
    const idmovie=req.body.idMovie;
    let oMovie = await Movie.findById(idmovie);    //sacar el objeto entero a traves de find

    const rent = new Rent();            // crear una instancia vacia para rellenarlo con los campos que queramos
    rent.idUser = req.body.idUser;
    rent.idMovie = req.body.idMovie;
    rent.rentDay = Date();
    rent.expiryDay = Date();
    console.log(oMovie.rentTime);
    rent.expiryDay.setHours(rent.rentDay.getHours() + oMovie.rentTime);

    await rent.save();
    res.json(rent);
  } catch (e) {
    res.json("error");
  }
};

// para admin, sacar todas los alquileres
const getAllRents = async (req, res) => {
  try {
    let allRentsAdmin = await Rent.find({}).populate([ "idUser","idMovie"]);
    res.json(allRentsAdmin);
  } catch (e) {
    res.json(e + "error");
  }
};


// filtro de alquileres activos 
const getRentActive  = async (req,res)=>{
  try{
    let allRentsUser = await Rent.find( {$and:[{idUser:mongoose.Types.ObjectId(req.params.id)}]}).populate(["idMovie"]);
 
    res.json(allRentsUser)
  } catch (e){
    res.json(e + "error");
  }
};

// get de alquileres del mismo usuario
const getRentsUser = async (req,res)=>{
  try{
    console.log(req.params.id);
    let allRentsUser = await Rent.find({idUser:mongoose.Types.ObjectId(req.params.id)}).populate(["idMovie"]);
    res.json(allRentsUser)
  } catch (e){
    res.json(e + "error");
  }
};

const updateRent = async(req,res)=>{
    try {
        await Rent.updateOne({_id: req.params.id}, req.body);
        res.status(200).json("Update Rent :" + req.params.id); 
    } catch (e) {
        res.json("error" + e);
    }
};


const deleteRent = async (req,res) =>{
    try {
        await Rent.deleteOne({_id: req.params.id});
        res.json("Rent deleted");
    } catch (e) {
        res.json("error" + e )
    }
};