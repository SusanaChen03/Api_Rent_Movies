import express from 'express';
const router = express.Router();
import {postUser, getUser, findById, updateUser, deleteUser, loginUser, verifyToken, authoritation, authoritation_admin, logoutUser } from "./user_controller.js";


router.post('/user', postUser);  //AÑADIR UN NUEVO USUARIO

router.post('/login', loginUser); //LOGIN USUARIO CON EMAIL Y CONTRASEÑA

router.get('/user', authoritation, getUser);     //BUSCAR UN USUARIO POR NOMBRE, SI NO ENCUENTRA SACAR TODA LA LISTA DE USUARIOS

router.get('/user/:id', authoritation_admin, findById);  //BUSCAR UN USUARIO POR ID

router.get('/auth/:token', authoritation_admin, verifyToken);  //DESCODIFICAR UN TOKEN Y VERIFICAR SI ES CORRECTO

router.patch('/user/:id',authoritation_admin, updateUser);  //BUSCAR DATOS DE USUARIO POR QUERY Y EDITAR POR BODY

router.delete('/user/:id', authoritation_admin, deleteUser);     //ELIMINAR UN USUARIO POR ID

router.post('/logout', logoutUser);    //LOGOUT DEL USUARIO POR MAIL Y CONTRASEÑA EN EL BODY


export default router;