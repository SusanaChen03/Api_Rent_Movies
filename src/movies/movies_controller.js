import Movie from "./movies_model.js";

export { postMovies, getMovies, getById, updateMovies, deleteMovies };
// creacion de una pelicula nueva
const postMovies = async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.json(movie);
  } catch (e) {
    res.json("error" + e);
  }
};

const getMovies = async (req, res) => {
  try {
    let filterMovies = [];
    if (req.query.name) {
      //filterMovies.push({ name: req.query.name });
      filterMovies.push({ name:  { "$regex": req.query.name, "$options": "i" } });
    }
    if (req.query.actors) {
      filterMovies.push({ actors: { "$regex": req.query.actors, "$options": "i" }   });
    }
    if (req.query.genre) {
      filterMovies.push({ genre: { "$regex": req.query.genre, "$options": "i" }});
    }
    if (req.query.name || req.query.actor || req.query.genre) {
      const list = await Movie.find({
        $or: filterMovies,
      });
      res.json(list);
    } else {
      const listAll = await Movie.find({});
      res.json(listAll);
    }
  } catch (e) {
    res.json("error" + e);
  }
};


// Búsqueda por id
const getById = async (req, res) => {
  try {    
    const idMovieo =  req.params.id;
    let findId = await Movie.findById(idMovieo);
    res.json(findId);
  } catch (e) {
    res.json("error" + e);
  }
};

//Actualización de nombre de película
const updateMovies = async (req, res) => {
  try {
    await Movie.updateOne({ _id: req.params.id }, req.body);
    res.status(200).json("film changes correctly");
  } catch (e) {
    res.json("error" + e);
  }
};
//Borrar pelicula por id
const deleteMovies = async (req, res) => {
  try {
    await Movie.deleteOne({ _id: req.params.id });
    res.json("Movie deleted");
  } catch (e) {
    res.json("error" + e);
  }
};
