import db from 'mongoose'


const carSchema = new db.Schema({
    model:String,
    year:Number,
    cost:Number,
    sale:Boolean
})

module.exports = db.model('Car',carSchema)