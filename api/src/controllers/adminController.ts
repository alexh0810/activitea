import cookie from 'cookie'
import { NextFunction, Request, Response } from 'express'
import ApiError from '../helpers/apiError'

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
        maxAge: 60 * 60,
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

export default { login }
