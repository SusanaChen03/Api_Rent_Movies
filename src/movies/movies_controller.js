
//const movies = require('./movies_model');
import Movie from './movies_model.js';

export {postMovies, getMovies, getById, updateMovies, deleteMovies };


//Añadir un objeto nuevo
const postMovies = async (req,res)=>{

    const movie = new Movie(req.body);
    await movie.save();
    res.json(movie);
};

export const getMovie = async (req, res) => {
    const movieToFind = {}
    if (req.query.id) movieToFind._id = req.query.id;
    if (req.query.name) movieToFind.name = req.query.name;
    if (req.query.genre) movieToFind.genre = req.query.genre;
    if (req.query.actors) movieToFind.actors = req.query.actors;
    res.json(await Movie.find(movieToFind));
}

//Búsqueda por query params, nombre de película, genero y actor
const getMovies = async (req,res)=>{

    if(req.query.name || req.query.genre || req.query.actor){
        const list = await Movie.find({
            $or: [
                {name: req.query.name},
                {genre: req.query.genre},
                {actors: req.query.actors},
            ]
        });
        res.json(list);
    }else{
        const listAll = await Movie.find({});
        res.json(listAll);
    }
}

// Búsqueda por id
const getById = async (req,res)=>{

    let findId = await Movie.findById(req.params.id);
    res.json (findId);
};


//Actualización de nombre de película
const updateMovies = async (req,res)=>{

    await Movie.updateOne({_id:req.params.id}, {name:req.body.name, genre:req.query.genre, actor:req.query.actor }) //},req.body);
    res.status(200).json('film name changes correctly')
};

//Borrar objeto por nombre
const deleteMovies = async (req,res)=>{

    await Movie.deleteOne({_id:req.params.id});
    res.json("Movie deleted");

};




























