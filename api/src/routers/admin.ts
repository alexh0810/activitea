import { Router } from 'express'
import { verifyAdmin } from '../middlewares/verifyAdmin'
import adminController from '../controllers/adminController'

const admin = Router()

admin.post('/login', adminController.login)
admin.post('/signup', adminController.createNewUser)
admin.get('/admin', verifyAdmin, adminController.getAdmin)

export default admin
