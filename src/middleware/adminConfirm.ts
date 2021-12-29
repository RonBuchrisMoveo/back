import { NextFunction, Request, Response } from "express"
import { IUser } from "src/interface/user.interface"

export async function requireAdmin(req: Request, res: Response, next: NextFunction) {
    const user:IUser = req.body
    if (!user.isAdmin) {
      res.status(403).end('Unauthorized Enough..')
      return
    }
    next()
  }