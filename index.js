import express from 'express';     // framework 
import routerUsers from './src/users/user_router.js';
import routerMovies from './src/movies/movies_router.js';
import  connection  from './config/database.js';
import dotenv from 'dotenv';
import swaggerUi from "swagger-ui-express";  //importación de swagger
import swaggerDocument from './config/openapi.js';  //importar el doc para poder documentar
import swDocument from "./config/openapiEjemplo.js";  //importa el doc para documentar el swagger ejemplo 

const app = express();

dotenv.config();

await connection();

app.use(express.json());

app.set("port",process.env.PORT  || 4000);

app.use('/',routerMovies);
app.use('/',routerUsers);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swDocument)); //para ejecutar el documento de swagger



app.listen(app.get("port"),()=>{
    console.log('Servidor levantado en puerto ' + process.env.PORT);
});

//app.listen(8020,()=>console.log('Servidor levantado en puerto 8020'));



