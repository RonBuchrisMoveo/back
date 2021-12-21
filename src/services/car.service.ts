import { ICar } from "../interface/car.interface"
const ObjectId = require('mongodb').ObjectId
const Car = require('../models/car')


export async function query():Promise<ICar[]> {
    const cars :ICar[] = await Car.find({})
    console.log(`cars`, cars)
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

export async function remove(carId:string):Promise<string> {
    try {
        await Car.remove({ '_id': ObjectId(carId) })
        return carId
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