const bcrypt = require('bcrypt')
import { getByUsername, add } from './user.service'


export async function onLogin(name: any, password: any) {
    const user:any = await getByUsername(name)
    if (!user) return Promise.reject('Invalid username or password')
    const match=await bcrypt.compare(password, user.password)
    if(!match) return Promise.reject('Invalid username or password')

    return {
        _id:user._id,
        name:user.name,
        email:user.email,
        phone:user.phonec
    }
}

export async function signUp(name: any, password: any, email: any) {
    const saltRounds = 10
    if (!name || !password || !email) return Promise.reject('fullname, username and password are required!')

    const hash = await bcrypt.hash(password, saltRounds)

    return add({
    name, password: hash, email,
    phone: ''
})
}