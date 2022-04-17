import express from 'express';     // framework 
import routerUsers from './src/users/user_router.js';
import routerMovies from './src/movies/movies_router.js';
import routerRent from './src/rent/rent_ router.js';
import  connection  from './config/database.js';
import dotenv from 'dotenv';
import cors from 'cors';


const app = express();

dotenv.config();

await connection();

app.use(express.json());
app.use(cors());

app.set("port",process.env.PORT  || 4000);

app.use('/',routerMovies);
app.use('/',routerUsers);
app.use('/',routerRent);



app.listen(app.get("port"),()=>{
    console.log('Servidor levantado en puerto ' + process.env.PORT);
});

//app.listen(8020,()=>console.log('Servidor levantado en puerto 8020'));



