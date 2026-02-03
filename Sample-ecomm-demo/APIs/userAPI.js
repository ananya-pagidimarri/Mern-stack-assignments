import exp from "express";
import { UserModel } from "../Models/UserModel.js";
import { hash } from "bcryptjs";
import {ProductModel} from "../Models/ProductModel.js"
import { Types } from "mongoose";
export const userRoute = exp.Router();

// test route
//Read User
userRoute.get('/users', async (req, res) => {
    let users = await UserModel.find()
    res.status(200).json({message:"users data",payload:users})
});
// READ user by ID
userRoute.get('/users/:id', async (req, res) => {
    let objId = req.params.id;
    let userObj = await UserModel.findById(objId)
    res.status(200).json({ message: "user", payload: userObj })
})

userRoute.post('/register', async (req, res) => {
  try {
    let newUser = req.body;
    //run validator
    await new UserModel(newUser).validate();
  

    // hash password
    let hashedPassword = await hash(newUser.password, 6);

    // replace password
    newUser.password = hashedPassword;

    // create document
    let newUserDoc = new UserModel(newUser);
    await newUserDoc.save({validateBeforeSave:false});

    res.status(201).json({ message: "User created" });
  } catch (err) {
    res.status(500).json({ message: "Error creating user", error: err.message });
  }
});

userRoute.put("/user-cart/userid/:uid/product/:pid", async (req, res) => {
  let { uid, pid } = req.params;
  console.log("uid:",uid)

  let user = await UserModel.findById(uid)
    if(!user){
    return res.status(401).json({message:"Product not found"})
    }

  //check product
  let product=await ProductModel.findById(pid)
  console.log("product",product)
  if(!product){
    return res.status(401).json({message:"Product not found"})
  }
  //perform Update
  let modifiedUser=await UserModel.findByIdAndUpdate(
    uid,
      { $push: { cart: { product: pid } } },
      { new: true }.populate("cart.product")
  );

  res.status(200).json({ message: "Product added to cart", payload: modifiedUser });
});
//Assignment
userRoute.put("/user-cart/:uid/:pid", async (req, res) => {
  try {
    const { uid, pid } = req.params;

    const user = await UserModel.findById(uid);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const product = await ProductModel.findById(pid);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const index = user.cart.findIndex(
      item => item.product.toString() === pid
    );

    if (index !== -1) {
      user.cart[index].quantity += 1;
    } else {
      user.cart.push({ product: pid, quantity: 1 });
    }

    await user.save();

    const updatedUser = await UserModel.findById(uid)
      .populate("cart.product", "productName price");

    res.status(200).json({
      message: "Product added to cart",
      payload: updatedUser
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Read user by id
userRoute.get("/users/:uid", async (req, res) => {
  let {uid}=req.params;
  //find user
  let userObj=await UserModel.findById(uid).populate("cart.product","productName price")
  res.status(200).json({message:"user",payload: userObj});
})
userRoute.get("/compare/:pid",async(req,res)=>{
  //get products
  let productId=new Types.ObjectId(req.params.pid);
  let prObj = await UserModel.findById(objId)
  //compareids
  if(productId==prod._id){
    console.log("Equal")
    }else{
      console.log("Not equal")
    }
    //if(prod._id.equals(productId)){
      //console.log("eq")
    //}else{
      //console.log("nq")

    //}
});