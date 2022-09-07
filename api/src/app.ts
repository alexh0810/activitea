import express from 'express'
// import lusca from 'lusca' will be used later
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import productRouter from './routers/product'
import orderRouter from './routers/order'
import adminRouter from './routers/admin'
import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'

dotenv.config({ path: '.env' })
const app = express()

// Express configuration
app.set('port', process.env.PORT || 5000)

// Global middleware
app.use(
  cors({
    credentials: true,
    origin: ['https://activitea.netlify.app', 'http://localhost:3000'],
  })
)
app.use(apiContentType)
app.use(express.json())
app.use(cookieParser())

// Set up routers
app.use('/api/v1/products', productRouter)
app.use('/api/v1/orders', orderRouter)
app.use('/api/v1/admin', adminRouter)
// Custom API error handler
app.use(apiErrorHandler)

export default app
