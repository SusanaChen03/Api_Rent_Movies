import user from './user_model.js';
import jwt from 'jsonwebtoken';

export {postUser, getUser, findById, updateUser, deleteUser, loginUser, verifyToken, authoritation, authoritation_admin }


const postUser = async (req,res)=>{

    const userCreated = {name:req.body.name, email:req.body.email, password:req.body.password, role:req.body.role};  //schema nuevo

    const newUser = await user.create(userCreated);
    res.status(200).json(newUser);
}



const getUser = async (req,res)=>{

    if (req.query.name) {
        let list = await user.find({
            name:req.query.name
        });

        if(list.length == 0){
            list = await user.find({});
            res.json(list);
        }else{
            res.json(list);
        }

    }else {
        const list = await user.find({});
        res.json(list);
    };
};


const findById = async (req,res)=>{

    let findId = await user.findById(req.params.id);
    res.json (findId);
};


const updateUser = async (req,res)=>{

    await user.updateOne({_id: req.query.id},req.body);
    res.status(200).json('User name changes');
};


const deleteUser = async (req,res)=>{

    await user.deleteOne({_id:req.params.id});
    res.json("User deleted");
};

const loginUser = async (req,res)=>{

    const findLog = await user.findOne({
        email: req.body.email,
        password: req.body.password,
    });
    if(findLog){

        const token = jwt.sign(findLog.role, process.env.JWT_SECRET);
        res.json(token);
    }else {
        res.status(401).json('');
    };
};


const verifyToken =  (req,res) =>{
    const token =  req.params.token;
        let decoded;
        try {
            decoded = jwt.verify(token, process.env.JWT_SECRET);
          } catch(err) {
            res.status(401).send(error);
          }
    res.json(decoded);
};



const authoritation = (req, res, next) => {

	try{
        const decoded = jwt.verify(req.headers.token, process.env.JWT_SECRET);
		if(decoded == 'client' || decoded =='admin'){
		    next();
		}else{
            console.log('error else'+ decoded);
		res.json (403);
		}
	}catch(e){
        console.log("el error es" + e)
	res.json (401);
	}
};



const authoritation_admin = (req, res, next) => {

	try{
        const decoded = jwt.verify(req.headers.token, process.env.JWT_SECRET);
		if( decoded =='admin'){
		    next();
		}else{
            console.log('error else'+ decoded);
		res.json(403);
		}
	}catch(e){
        console.log("el error es" + e)
        res.json(401);
	}
};


