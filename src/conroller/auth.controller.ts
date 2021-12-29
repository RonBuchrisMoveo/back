import { NextFunction, Request, Response } from 'express'
import { signUp, onLogin } from '../services/auth.service'
import signJWT from '../function/signJWT'


export async function login(req: any, res: Response, next: NextFunction) {
    const { name, password } = req.body
    try {
        const user: any = await onLogin(name, password)
        signJWT(user, (_error, token) => {
            if (_error) {
                return res.status(401).json({
                    message: 'Unauthorized',
                    error: _error
                })
            } else if (token) {
                return res.status(200).json({
                    message: 'Auth Successful',
                    token,
                    user: user
                })
            }

        })
        // res.json(user)
    } catch (err) {
        res.status(401).send({ err: 'Failed to Login' })
    }
}

export async function signup(req: any, res: Response) {
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