import ApiError from '../helpers/apiError'
import Product from '../models/Product'
import { ProductDocument } from '../models/Product'

const getProducts = async () => {
  return await Product.find()
}

const getProductById = async (productId: string) => {
  return await Product.findById(productId)
}

const createProduct = async (product: ProductDocument) => {
  return await product.save()
}

const updateProduct = async (
  productId: string,
  product: Partial<ProductDocument>
) => {
  const { size, prices } = product
  const existedProduct = await Product.findByIdAndUpdate(productId)
  if (existedProduct) {
    return await Product.findByIdAndUpdate(
      existedProduct._id,
      {
        size: size,
        prices: prices,
      },
      { new: true }
    )
  } else {
    throw new ApiError(404, 'Product does not exist')
  }
}

const deleteProduct = async (productId: string) => {
  const existedProduct = await Product.findById(productId)
  if (!existedProduct) {
    throw new ApiError(404, 'Product does not exist')
  }
  return await Product.findByIdAndDelete(productId)
}

export default {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
}
