import express from 'express';
const router = express.Router();

import {createRent, getAllRents, updateRent, deleteRent, getRentsUser, getRentActive} from './rent_controller.js';




router.post('/rent',createRent);      //CREAR UN NUEVO ALQUILER
router.get('/rentAdmin', getAllRents);   //VER TODOS LOS ALQUILERES  (admin)
router.get('/rentUser/:id', getRentsUser);      //VER ALQUILER DE USUARIO POR ID 
router.get ('/rentActive/:id', getRentActive);      //VER ALQUIELR EN CURSO
router.patch('/rent/:id', updateRent); 
router.delete('/rent/:id', deleteRent);




export default router;



//admin utiliza el getRents