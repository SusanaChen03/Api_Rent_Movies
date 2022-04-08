

import mongoose from 'mongoose';


const connection = async ()=>{
    try{
        await mongoose.connect('mongodb+srv://susana:susana@cluster0.lekzf.mongodb.net/newproyect00?retryWrites=true&w=majority')
        { useNewUrlParser: true;
        useUnifiedTopology: true;
        console.log("Servidor de mongo remoto escuchando👌")};
    } catch (error) {
        console.log(error)
    };
};
export default connection;






// await mongoose.connect('mongodb://localhost:27017/videoclub')


/*mongoose.connect('mongodb://localhost:27017/videoclub',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log("Servidor de mongo escuchando")).catch((error)=>{console.log(error)});*/