import { NextFunction, Request, Response } from 'express'
import Order from '../models/Order'
import orderService from '../services/orderService'

const getOrders = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const orders = await orderService.getOrders()
    return res.json(orders)
  } catch (err) {
    next(err)
  }
}

const getOrderById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const order = await orderService.getOrderById(req.params.id)
    return res.json(order)
  } catch (err) {
    next(err)
  }
}

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { customer, address, total, status } = req.body
    const newOrder = new Order({
      customer,
      address,
      total,
      status,
    })

    const order = await orderService.createOrder(newOrder)
    return res.status(201).json(order)
  } catch (err) {
    next(err)
  }
}

const updateOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const order = await orderService.updateOrder(req.params.id, req.body)
    return res.status(201).json(order)
  } catch (err) {
    next(err)
  }
}

const deleteOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const order = await orderService.deleteOrder(req.params.id)
    return res.status(204).send('Order deleted successfully')
  } catch (err) {
    next(err)
  }
}

export default {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
}
