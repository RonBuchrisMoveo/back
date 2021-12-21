import { addCar, getCars, removeCar, updateCar } from '../conroller/car.controller'
import express from 'express'

export const router = express.Router()

router.get('/', getCars)
router.post('/', addCar)
router.put('/:id', updateCar)
router.delete('/:id', removeCar)

// module.exports = router