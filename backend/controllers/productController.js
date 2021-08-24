import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
})

const getProductsById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        res.json(product)
    } else {
        res.status(404).json({ message: 'Produit introuvable'})
    }
})

// @desc    Delete a product
// @route   DELETE /api/products/:id

const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        await product.remove()
        res.json({ message: 'Produit supprimé' })
    } else {
        res.status(404)
        throw new Error('Produit introuvable')
    }
})

export { getProducts, getProductsById, deleteProduct }