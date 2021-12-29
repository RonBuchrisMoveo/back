import db from 'mongoose'
const jwt = require('jsonwebtoken')


const userSchema = new db.Schema({
    name:String,
    password:String,
    email:String,
    phone:String,
    isAdmin:Boolean
})

module.exports = db.model('User',userSchema)
