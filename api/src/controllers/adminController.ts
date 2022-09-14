import cookie from 'cookie'
import { NextFunction, Request, Response } from 'express'
import User from '../models/User'
import userService from '../services/userService'
import ApiError from '../helpers/apiError'

const getAdmin = async (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json('Admin is logged in')
}

const createNewUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, password } = req.body
    const user = new User({
      username,
      password,
    })
    const newUser = await userService.createUser(user)
    return res.status(201).json(newUser)
  } catch (e) {
    next(e)
  }
}

const login = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body
  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const token: string = process.env.TOKEN as string
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('token', token, {
        maxAge: 60 * 60 * 10000,
        sameSite: 'none',
        secure: true,
        path: '/',
      })
    )
    res.status(200).send('Successful')
  } else {
    throw new ApiError(401, 'Wrong credentials')
  }
}

export default { login, createNewUser, getAdmin }
