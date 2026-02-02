import exp from 'express'
import {UserModel} from '../models/UserModel.js'
import {hash,compare} from 'bcryptjs'
import jwt from 'jsonwebtoken';
export const userApp=exp.Router()
//create user
userApp.post('/users', async (req, res) => {
  let newUser = req.body;

  // hash password
  let hashedPassword = await bcrypt.hash(newUser.password, 6);

  // create document
  let newUserDoc = new UserModel(newUser);

  // assign hashed password
  newUserDoc.password = hashedPassword;

  await newUserDoc.save();

  res.status(201).json({ message: "User created" });
});

userApp.post('/auth', async (req, res) => {
    let {username,password}=req.body;
    let userOfDB=await UserModel.findOne({username:userCred.username})
    if(userOfDB===null){
        return res.status(404).json({message:"Invalid username"})
    }
    let status=await compare(userCred.password,userOfDB.password)
    if(userOfDB===false){
        return res.status(404).json({message:"Invalid password"})
    }
    //create signed token
    let signedToken=jwt.sign({username:userCred.username},"abcdef",{expiresIn:30})
    return res.status(404).json({message:"login Successful"})
});
//Read User
userApp.get('/users', async (req, res) => {
    let users = await UserModel.find()
    res.status(200).json({message:"users data",payload:users})
});
// READ user by ID
userApp.get('/users/:id', async (req, res) => {
    let objId = req.params.id;
    let userObj = await UserModel.findById(objId)
    res.status(200).json({ message: "user", payload: userObj })
})
//update user
userApp.put("/users/:id",async(req,res)=>{
    //get obectId from url params
    let objId=req.params.id;
    //get modified user from req
    let modifiedUser=req.body
    //make update
    let latestUser=await UserModel.findByIdAndUpdate(objId,
        {$set:{ ...modifiedUser}},
        {new:true,runValidators:true});
        //send res
        res.status(200).json({message:"user modified",payload: latestUser });

});
userApp.delete("/users/:id",async(req,res)=>{
    //get obectId from url params
    let objId=req.params.id;
    //delete user by id
    await UserModel.findByIdAndDelete(objId)
    res.status(200).json({message:"user removed"});
});