import { ICar } from "src/interface/car.interface"
const ObjectId = require('mongodb').ObjectId
const Car = require('../models/car')
const User = require('../models/user')


export async function query():Promise<any> {
    const cars :any = await User.find({})
    return cars
}

export async function add(car:ICar):Promise<ICar> {
    try {
        const newCar = await Car.create(car)
        return newCar
    } catch (err) {
        throw err
    }
}

export async function remove(carId:string):Promise<ICar[]> {
    try {
       await Car.deleteOne({ '_id': ObjectId(carId) })
       const currCars:ICar[] = await query()
        return currCars
    } catch (err) {
        throw err
    }
}

export async function update(car:ICar):Promise<ICar> {
    var id:string = ObjectId(car._id)
    delete car._id
    try {
        await Car.update({ "_id": id }, { $set: { ...car } })
        car._id = id
        return car
    } catch (err) {
        throw err
    }
}