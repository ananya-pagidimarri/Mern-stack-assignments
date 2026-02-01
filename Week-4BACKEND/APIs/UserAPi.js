import exp from 'express'
import {UserModel} from '../models/UserModel.js'
export const userApp=exp.Router()
//create user
userApp.post('/users', async (req, res) => {
    let newUser=req.body;
    let newUserDoc= new UserModel(newUser)
    await newUserDoc.save()
    res.status(201).json({message:"User created"})
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