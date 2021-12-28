const express = require('express')
import { signup,login,validateToken } from '../conroller/auth.controller'
import extractJWT from '../middleware/extractJWT'



export const authRouters = express.Router()

authRouters.get('/validate', extractJWT, validateToken);
authRouters.post('/login', login)
authRouters.post('/signup', signup)
// authRouters.post('/logout', logout)