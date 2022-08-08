import { Router } from 'express'
import orderController from '../controllers/orderController'
import { verifyAdmin } from '../middlewares/verifyAdmin'

const order = Router()

order.get('', verifyAdmin, orderController.getOrders)
order.get('/:id', orderController.getOrderById)
order.post('', orderController.createOrder)
order.put('/:id', verifyAdmin, orderController.updateOrder)
order.delete('/:id', verifyAdmin, orderController.deleteOrder)

export default order
