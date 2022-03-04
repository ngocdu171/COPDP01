require('dotenv').config()
import 'reflect-metadata'
import express from 'express'
import { createConnection } from 'typeorm'
import { User } from './entities/User'
import { Apartment } from './entities/Apartment'

const main = async () => {
    await createConnection({
        type: 'postgres',
        database: 'copdp01_db',
        username: process.env.DB_USERNAME_DEV,
        password: process.env.DB_PASSWORD_DEV,
        logging: true,
        synchronize: true,
        entities: [User, Apartment]
    })

    const app = express()
    const port = 4000

    app.listen(port, () => console.log(`Server started on port ${port}`))
}

main().catch(error => console.log(error))