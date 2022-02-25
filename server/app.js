const express = require('express')
const {ApolloServer} = require('apollo-server-express')
const mongoose = require('mongoose')
require("dotenv").config()

const typeDefs = require('./schema/schema')
const resolvers = require('./resolver/resolver')

const mongoDataMethods = require('./data/db')

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME_DEV}:${process.env.DB_PASSWORD_DEV}@cluster0.mf51e.mongodb.net/MyDatabase?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('MongoDB connected');
  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }
}

connectDB()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ mongoDataMethods })
})

const app = express()

server.start().then(res => {
  server.applyMiddleware({app});
  const port = process.env.PORT
  app.listen(port, () => {
      console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`);
  })
})