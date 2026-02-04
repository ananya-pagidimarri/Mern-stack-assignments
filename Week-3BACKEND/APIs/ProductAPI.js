import exp from 'express'
import { ProductModel } from '../models/ProductModel.js'

export const productApp = exp.Router()


// 1. CREATE PRODUCT
productApp.post('/products', async (req, res) => {
    let newProduct = req.body
    let productDoc = new ProductModel(newProduct)
    await productDoc.save()
    res.status(201).json({ message: "Product created" })
})

// 2. GET ALL PRODUCTS
productApp.get('/products', async (req, res) => {
    let products = await ProductModel.find()
    res.status(200).json({ message: "products data", payload: products })
})

// 3. GET PRODUCT BY PID
productApp.get('/products/:objectId', async (req, res) => {
    let pid = req.params.pid
    let product = await ProductModel.findOne({ pid: pid })
    res.status(200).json({ message: "product", payload: product })
})

// 4. UPDATE PRODUCT BY PID
productApp.put('/products/:objectId', async (req, res) => {
    let pid = req.params.pid
    let modifiedProduct = req.body

    let updatedProduct = await ProductModel.findOneAndUpdate(
        { pid: pid },
        { $set: { ...modifiedProduct } },
        { new: true }
    )

    res.status(200).json({ message: "product updated", payload: updatedProduct })
})
