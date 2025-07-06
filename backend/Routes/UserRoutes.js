import express from 'express'
import { LoginUser, registerUser } from '../Controllers/UserController.js'


const userRouter = express.Router()

userRouter.post('/register',registerUser)
userRouter.post('/login',LoginUser)

export default userRouter