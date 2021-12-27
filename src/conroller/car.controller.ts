import { Request, Response } from 'express'
import { ICar } from '../interface/car.interface'
import { IUser } from '../interface/user.interface'
import { query, add, remove, update } from '../services/car.service'

//GET LIST
export async function getCars(req: Request, res: Response): Promise<void> {
    try {
        const cars: any = await query()
        res.json(cars);
    } catch (err) {
        res.status(500).send({ err: 'Failed to get item' })
    }
}

// POST (add car)
export async function addCar(req:Request, res:Response) {
    try {
      const car:ICar = req.body;
      const addedCar = await add(car)
      res.json(addedCar)
    } catch (err) {
      res.status(500).send({ err: 'Failed to add Car' })
    }
  }

//DELETE(Remove car)
export async function removeCar(req: Request, res: Response): Promise<void> {
    try {
        const carId: string = req.params.id;
        const currCars: ICar[] = await remove(carId)
        res.send(currCars)
    } catch (err) {
        res.status(500).send({ err: 'Failed to remove Car' })
    }
}

// PUT (Update car)
export async function updateCar(req:Request, res:Response): Promise<void> {
    try {
      const car = req.body;
      const updatedCar = await update(car)
      res.json(updatedCar)
    } catch (err) {
      res.status(500).send({ err: 'Failed to update Car' })
  
    }
  }