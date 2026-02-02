import exp from "express";
import {ProductModel} from '../Models/ProductModel.js'
export const productRoute = exp.Router();

// test route
productRoute.get('/product', async (req, res) => {
    let products = await ProductModel.find()
    res.status(200).json({ message: "products data", payload: products })
    });

// example POST route
productRoute.post("/add", async (req, res) => {
    let newProduct = req.body
    let productDoc = new ProductModel(newProduct)
    await productDoc.save()
    res.status(201).json({ message: "Product created" })
});
