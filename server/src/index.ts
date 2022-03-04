require('dotenv').config()
import 'reflect-metadata'
import express from 'express'
import { createConnection } from 'typeorm'
import { User } from './entities/User'
import { Apartment } from './entities/Apartment'
import { ApolloServer } from  'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { HelloResolver } from './resolvers/hello'
import { UserResolver } from './resolvers/user'

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

    const apolloServer = new ApolloServer({
        schema: await buildSchema({resolvers: [HelloResolver, UserResolver], validate: false}),
        plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
    })

    await apolloServer.start()

    apolloServer.applyMiddleware({app, cors: false})

    const port = process.env.PORT||4000
    app.listen(port, () => console.log(`Server started on port ${port}. GraphQL server started on localhost:${port}${apolloServer.graphqlPath }`))
}

main().catch(error => console.log(error))