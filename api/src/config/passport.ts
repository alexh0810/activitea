import passport from 'passport'
import { Strategy as LocalStategy, Strategy } from 'passport-local'

import User, { UserDocument } from '../models/User'

passport.use(
  new LocalStategy(function (username, password, done) {
    User.findOne(
      { username: username },
      function (err: any, user: UserDocument) {
        if (err) {
          console.log('test', err.statusCode)
          return done(err)
        }
        if (!user) {
          return done(null, false)
        }
        if (!user.comparePassword(password)) {
          return done(null, false)
        }
        return done(null, user)
      }
    )
  })
)
