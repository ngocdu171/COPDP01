require('dotenv').config()
import 'reflect-metadata'
import express from 'express'
import { ApolloServer } from  'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { UserResolver } from './resolvers/user'
import mongoose from 'mongoose'
import MongoStore from 'connect-mongo'
import session from 'express-session'
import { COOKIE_NAME, __prod__ } from './constants'
import { Context } from './type/Context'
import { ApartmentResolver } from './resolvers/apartment'
import { Tb_user } from './entities/Users'
import { Apartment } from './entities/Apartments'
import { createConnection } from 'typeorm'
import cors from 'cors'

const main = async () => {
    await createConnection({
        type: 'postgres',
        database: 'copdp01_db',
        username: process.env.DB_USERNAME_DEV,
        password: process.env.DB_PASSWORD_DEV,
        logging: true,
        synchronize: true,
        entities: [Tb_user, Apartment]
    })

    // await sendEmail("user01@gmail.com", "Hello user01 asdasdasd")

    const app = express()
    app.use(cors({
        origin: 'http://localhost:3000',
        credentials: true
    }))

    //Session/Cookie store
    const mongoUrl = `mongodb+srv://${process.env.SESSION_DB_USERNAME_DEV_PROD}:${process.env.SESSION_DB_PASSWORD_DEV_PROD}@cluster0.bhiaf.mongodb.net/sessionsDB?retryWrites=true&w=majority`
    await mongoose.connect(mongoUrl,{
        // useCreateIndex: true,
        // useFindAndModify: false, 
        // useNewUrlParser: true,
        // useUnifiedTopology: true
     })
    
    console.log('MongoDB connected');

    app.use(session({
        name: COOKIE_NAME,
        store: MongoStore.create({ mongoUrl }),
        cookie: {
            maxAge: 1000 * 60 * 60, // 1 hour
            httpOnly: true,         // JS front end cannot access the cookie
            secure: __prod__,       // cookie only work in https
            sameSite: 'lax',        // protection against CSRF
        },
        secret: process.env.SESSION_SECRET_DEV_PROD as string,
        saveUninitialized: false,   //don't save empty sessions, right from the start
        resave: false
      }));

    const apolloServer = new ApolloServer({
        schema: await buildSchema({resolvers: [UserResolver, ApartmentResolver], validate: false}),
        context: ({req, res}): Context => ({req, res}),
        plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
    })

    await apolloServer.start()

    apolloServer.applyMiddleware({app, cors: false})

    const port = process.env.PORT||4000
    app.listen(port, () => console.log(`Server started on port ${port}. GraphQL server started on localhost:${port}${apolloServer.graphqlPath}`))
}

main().catch(error => console.log(error))