import mongoose, { Document } from 'mongoose'

export type OrderDocument = Document & {
  customer: string
  address: string
  total: number
  status: 0 | 1 | 2 | 3
}

const orderSchema = new mongoose.Schema({
  customer: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  status: {
    type: Number,
    default: 0,
  },
})

export default mongoose.model<OrderDocument>('Order', orderSchema)
