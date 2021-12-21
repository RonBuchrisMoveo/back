import { Request, Response } from 'express'
import { ICar } from '../interface/car.interface'
import { query, add, remove, update } from '../services/car.service'


//GET LIST
export async function getCars(req: Request, res: Response): Promise<void> {
    try {
        const cars: ICar[] = await query()
        console.log(`cars`, cars)
        res.json(cars);
    } catch (err) {
        res.status(500).send({ err: 'Failed to get car' })
    }
}

// POST (add car)
export async function addCar(req:Request, res:Response) {
    try {
      const car:ICar = req.body;
      const addedCar = await add(car)
      res.json(addedCar)
    } catch (err) {
      res.status(500).send({ err: 'Failed to add car' })
    }
  }

