import express from 'express';
const router = express.Router();

import {postMovies, getMovies, getById, updateMovies, deleteMovies} from './movies_controller.js';




router.post('/movies', postMovies);  //INSERTAR PELÍCULA NUEVA, BODY.

router.get('/movies', getMovies);   // BUSCAR PELÍCULAS POR NOMBRE, GÉNERO, ACTORES, QUERY PARAMS.

router.get('/movies/:id', getById);  //BUSCAR PRLÍCULAS POR SU ID, PARAMS.

router.patch('/movies', updateMovies);  //BUSCAR UNA PELÍCULA POR NOMBRE POR QUERY Y ACTUALIZARLA POR EL BODY.

router.delete('/movies', deleteMovies);  // BORRAR UNA PELÍCULA POR NOMBRE, QUERY.

export default router;