import { NextFunction, Request, Response } from 'express'
import ApiError from '../helpers/apiError'

export const verifyAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const adminToken = req.cookies.token
  if (!adminToken) {
    res.redirect('/admin/login')
  }
  next()
}
