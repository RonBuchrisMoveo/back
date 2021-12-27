import { Request, Response } from 'express'
import { signUp,onLogin } from '../services/auth.service'


export async function login(req:any, res:Response) {
    const { name, password } = req.body
    try {
        const user = await onLogin(name, password)
        req.session.user = user
        res.json(user)
    } catch (err) {
        res.status(401).send({ err: 'Failed to Login' })
    }
}

export async function signup(req:any, res:Response) {
    try {
        const { name, password, email } = req.body
        const account = await signUp(name, password, email)
        const user = await onLogin(account.name, account.password)
        req.session.user = user
        res.json(user)
    } catch (err) {
        res.status(500).send({ err: 'Failed to signup' })
    }
}