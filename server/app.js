const express = require('express')
const {ApolloServer} = require('apollo-server-express')
const mongoose = require('mongoose')

const typeDefs = require('./schema/schema')
const resolvers = require('./resolver/resolver')

const mongoDataMethods = require('./data/db')

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://BrotherD:conmemay7@cluster0.mf51e.mongodb.net/MyDatabase?retryWrites=true&w=majority', {
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
  app.listen({port: 4000}, () => {
      console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
  })
})