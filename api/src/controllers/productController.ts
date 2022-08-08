import { NextFunction, Request, Response } from 'express'
import Product from '../models/Product'
import productService from '../services/productService'

const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await productService.getProducts()
    return res.json(products)
  } catch (err) {
    next(err)
  }
}

const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productId = req.params.id
    const product = await productService.getProductById(productId)
    return res.json(product)
  } catch (err) {
    next(err)
  }
}

const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, description, size, prices, image } = req.body
    const newProduct = new Product({
      title,
      prices,
      description,
      size,
      image,
    })
    const product = await productService.createProduct(newProduct)
    return res.status(201).json(product)
  } catch (err) {
    next(err)
  }
}

const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await productService.updateProduct(req.params.id, req.body)
    return res.status(201).json(product)
  } catch (err) {
    next(err)
  }
}

const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const deletedProduct = await productService.deleteProduct(req.params.id)
    return res.status(204).send('Product deleted')
  } catch (err) {
    next(err)
  }
}

export default {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
}
