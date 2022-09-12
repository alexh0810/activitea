import express from 'express'
import passport from 'passport'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import bodyParser from 'body-parser'

import productRouter from './routers/product'
import orderRouter from './routers/order'
import adminRouter from './routers/admin'
import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'
import path from 'path'

dotenv.config({ path: '.env' })
const app = express()
// Express configuration"
app.set('port', process.env.PORT || 5000)
app.use(apiContentType)
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:5000', 'https://activitea-be.herokuapp.com/'],
  })
)

// Set up routers
app.use('/api/v1/products', productRouter)
app.use('/api/v1/orders', orderRouter)
app.use('/api/v1/admin', adminRouter)

const publicPath = path.resolve(__dirname, '../public')
app.use(express.static(publicPath))
app.use('/*', (_req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'))
})

// Custom API error handler
app.use(apiErrorHandler)

export default app
