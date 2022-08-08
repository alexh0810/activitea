import { Router } from 'express'
import { verifyAdmin } from '../middlewares/verifyAdmin'
import adminController from '../controllers/adminController'

const admin = Router()

admin.post('/login', adminController.login)

export default admin
