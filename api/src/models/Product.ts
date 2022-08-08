import mongoose, { Document } from 'mongoose'

export type ProductDocument = Document & {
  title: string
  prices: [number]
  description: string
  size: ['M', 'L'] | ['M'] | ['L']
  image: string
}

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  prices: {
    type: [Number],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  size: {
    type: [String],
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
})

export default mongoose.model<ProductDocument>('Product', productSchema)
