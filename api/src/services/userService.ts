import User from '../models/User'
import { UserDocument } from '../models/User'
import ApiError, { NotFoundError } from '../helpers/apiError'

const getUsers = async () => {
  return await User.find()
}

const getUserById = async (userId: string) => {
  const existedUser = await User.findById(userId)
  if (!existedUser) {
    throw new ApiError(404, 'User does not exist')
  }
  return existedUser
}

const createUser = async (user: UserDocument) => {
  return await user.save()
}

export default { createUser, getUserById, getUsers }
