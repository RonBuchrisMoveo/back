import { addUser, getUsers, removeUser, updateUser } from '../conroller/user.controller'
import express from 'express'
import extractJWT from '../middleware/extractJWT'
import { validateToken } from '../conroller/auth.controller'

export const userRouters = express.Router()

userRouters.get('/', getUsers)
// userRouters.post('/', addUser)
// userRouters.put('/:id', updateUser)
userRouters.delete('/:id',extractJWT,validateToken, removeUser)
// userRouters.delete('/:id',removeUser)