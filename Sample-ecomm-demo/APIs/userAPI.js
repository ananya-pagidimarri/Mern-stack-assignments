import exp from "express";
import { UserModel } from "../Models/UserModel.js";
import { hash } from "bcryptjs";

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

    // hash password
    let hashedPassword = await hash(newUser.password, 6);

    // replace password
    newUser.password = hashedPassword;

    // create document
    let newUserDoc = new UserModel(newUser);
    await newUserDoc.save();

    res.status(201).json({ message: "User created" });
  } catch (err) {
    res.status(500).json({ message: "Error creating user", error: err.message });
  }
});

userRoute.put("/user-cart/userid/:uid/product/:pid", async (req, res) => {
  let { uid, pid } = req.params;

  let updatedUser = await UserModel.findByIdAndUpdate(
    uid,
    { $push: { cart: { product: pid } } },
    { new: true }
  );

  res.status(200).json({ message: "Product added to cart", payload: updatedUser });
});
