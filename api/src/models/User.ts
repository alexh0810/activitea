import mongoose, { Document } from 'mongoose'
import passportLocalMongoose from 'passport-local-mongoose'

export type UserDocument = Document & {
  username: string
  password: string
}

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

export default mongoose.model<UserDocument>('User', userSchema)
