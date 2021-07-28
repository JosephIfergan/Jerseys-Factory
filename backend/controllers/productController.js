import Product from "../models/productModel.js";
import expressAsyncHandler from "express-async-handler";

const getProducts = expressAsyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
})

const getProductsById = expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        res.json(product)
    } else {
        res.status(404).json({ message: 'Produit introuvable'})
    }
})

export { getProducts, getProductsById }