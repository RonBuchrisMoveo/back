const express = require('express')
import { signup,login } from '../conroller/auth.controller'

export const authRouters = express.Router()

authRouters.post('/login', login)
authRouters.post('/signup', signup)
// authRouters.post('/logout', logout)