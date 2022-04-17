import user from "./user_model.js";
import jwt from "jsonwebtoken";

export {
  postUser,
  getUser,
  findById,
  updateUser,
  deleteUser,
  loginUser,
  logoutUser,
  verifyToken,
  authoritation,
  authoritation_admin
};

const postUser = async (req, res) => {
  try {
    const userCreated = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role: 'client',
      avatar: req.body.avatar,
      preferences: req.body.preferences,
      points: req.body.points,
    };
    const newUser = await user.create(userCreated);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(200).json("wrong");
  }
};

const getUser = async (req, res) => {
  try {
    if (req.query.name) {
      let list = await user.find({
        name: req.query.name,
      });

      if (list.length == 0) {
        list = await user.find({});
        res.json(list);
      } else {
        res.json(list);
      }
    } else {
      const list = await user.find({});
      res.json(list);
    }
  } catch (error) {
    res.json(error + "error");
  }
};

const findById = async (req, res) => {
  try {
    let findId = await user.findById(req.params.id);
    res.json(findId);
  } catch (error) {
    res.json("error" + error);
  }
};

const updateUser = async (req, res) => {
  try {
    await user.updateOne({ _id: req.params.id }, req.body);
    res.status(200).json("User changes");
  } catch (error) {
    res.json("error" + error);
  }
};

const deleteUser = async (req, res) => {
  try {
    await user.deleteOne({ _id: req.params.id });
    res.json("User deleted");
  } catch (error) {
    res.json("error" + error);
  }
};

const loginUser = async (req, res) => {
  try {
    const loggin = await user.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    console.log(req.body);
    if (loggin  != null) {
      const token = jwt.sign({ role: loggin.role, id: loggin.id }, process.env.JWT_SECRET);
      res.json({userToken:token, idUser:loggin.id, role:loggin.role, name:loggin.name});
    } else {
      res.status(401).json("User no founded");
    }
  } catch (error) {
    res.json("error" + error);
  }
};


const verifyToken = (req, res) => {
  try {
    const token = req.params.token;
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      res.status(401).send(error);
    }
    res.json(decoded);
  } catch (error) {
    res.json("error" + error);
  }
};


const authoritation = (req, res, next) => {
  try {
    const decoded = jwt.verify(req.headers.token, process.env.JWT_SECRET);
    if (decoded.role == "client" || decoded.role == "admin") {
      next();
    } else {
      console.log("error " + decoded);
      res.json(403);
    }
  } catch (e) {
    console.log("el error es" + e);
    res.json(401);
  }
};

const authoritation_admin = (req, res, next) => {
  try {
    const decoded = jwt.verify(req.headers.token, process.env.JWT_SECRET);
    if (decoded.role == 'admin') {
      next();
    } else {
      console.log("error else" + decoded);
      res.json(403);
    }
  } catch (e) {
    console.log("el error es" + e);
    res.json(401);
  }
};

const logoutUser = async (req, res) => {
    try{
        const loggout = await user.findOne({
            email: req.body.email,
            password: req.body.password,
        });
        if(loggout != null) {
            res.json("the session is closed")
        } else{
            res.status(401).send("incorrect user")
        }
    } catch (error){
        res.json("error" + error);
    }
};



