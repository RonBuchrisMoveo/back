import { getUsers } from "../conroller/user.controller"
import { IUser } from "src/interface/user.interface"
const ObjectId = require('mongodb').ObjectId
const User = require('../models/user')


export async function query():Promise<any> {
    const users :any = await User.find({})
    return users
}

export async function add(user:any) {
    try {
        const newUser = await User.create(user)
        return newUser
    } catch (err) {
        throw err
    }
}

export async function remove(userId:string):Promise<IUser[]> {
    try {
       await User.deleteOne({ '_id': ObjectId(userId) })
       const currUsers:IUser[] = await query()
        return currUsers
    } catch (err) {
        throw err
    }
}

export async function update(user:IUser):Promise<IUser> {
    var id:string = ObjectId(user._id)
    delete user._id
    try {
        await User.update({ "_id": id }, { $set: { ...user } })
        user._id = id
        return user
    } catch (err) {
        throw err
    }
}

export async function getByUsername(name: any) {
    try {
        const user = await User.findOne({ name })
        return user
    } catch (err) {
        throw err
    }
}