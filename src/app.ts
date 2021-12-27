import express, { Application, Request, Response } from 'express'
const cors = require('cors')
const mongoose = require('mongoose')
import { ConnectionOptions } from 'mongoose'

    // Database Name
    const dbName: string = 'user_db'
    var dbURL: string = 'mongodb://localhost/'

const app: Application = express()
app.use(express.json())
app.use(cors())


const options: ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}

const CONNECTION_URL = process.env.CONNECTION_URL

import {authRouters} from './routes/auth.route'
import {userRouters} from './routes/user.route'
import {router} from './routes/car.route'

app.use('/api/auth',authRouters)
app.use('/api/user', userRouters)
app.use('/api/car', router)

const PORT = process.env.PORT || 3030;
app.listen((PORT),
async () => await mongoose.connect(dbURL+dbName,options))
// console.log(`${dbURL+'/'+dbName}`,` ${dbURL+'/'+dbName}`)
// connect(CONNECTION_URL, options)
//     .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
//     .catch((error: any) => console.log(`${error} did not connect`));
