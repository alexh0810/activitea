import mongoose, { Document } from 'mongoose'
import passportLocalMongoose from 'passport-local-mongoose'
import bcrypt from 'bcrypt'

export type UserDocument = Document & {
  username: string
  password: string
  comparePassword(password: string): Promise<boolean>
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

// hash user's password before saving it to DB
userSchema.pre<UserDocument>(
  'save',
  { document: true, query: false },
  async function (next) {
    if (this.isModified('password') || this.isNew) {
      try {
        this.password = await bcrypt.hash(this.password, 10)
        return next()
      } catch (e: any) {
        return next(e)
      }
    }
  }
)

// Function to compare input password with user's password in DB
userSchema.methods.comparePassword = async function (password: string) {
  return await bcrypt.compare(password, this.password)
}

userSchema.plugin(passportLocalMongoose)
export default mongoose.model<UserDocument>('User', userSchema)
