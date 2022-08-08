import { Router } from 'express'
import ProductController from '../controllers/productController'
import { verifyAdmin } from '../middlewares/verifyAdmin'

const product = Router()
product.get('', ProductController.getProducts)
product.get('/:id', ProductController.getProductById)
product.put('/:id', verifyAdmin, ProductController.updateProduct)
product.post('', verifyAdmin, ProductController.createProduct)
product.delete('/:id', verifyAdmin, ProductController.deleteProduct)

export default product
