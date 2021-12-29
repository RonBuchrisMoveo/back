import { addUser, getUsers, removeUser, updateUser } from '../conroller/user.controller'
import express from 'express'
import extractJWT from '../middleware/extractJWT'
// import { requireAdmin } from '../middleware/adminConfirm'

export const userRouters = express.Router()

userRouters.get('/', getUsers)
// userRouters.post('/', addUser)
userRouters.put('/:id',extractJWT, updateUser)
userRouters.delete('/:id',extractJWT, removeUser)
// userRouters.delete('/:id',removeUser)