import { addUser, getUsers, removeUser, updateUser } from '../conroller/user.controller'
import express from 'express'

export const userRouters = express.Router()

userRouters.get('/', getUsers)
userRouters.post('/', addUser)
userRouters.put('/:id', updateUser)
userRouters.delete('/:id', removeUser)