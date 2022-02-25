const { apartments } = require("../data/static")
const Apartment = require("../models/Apartment")

const resolvers = {
  Query: {
    apartments: async (parent, args, context) => {
      return await context.mongoDataMethods.getAllItems()
    },
    apartment: async (parent, args, {mongoDataMethods}) => {
      return await mongoDataMethods.getItemById(args)
    }
  },

  Mutation: {
      createApartment: async (parent, args, {mongoDataMethods}) => {
        return await mongoDataMethods.createApartment(args)
      },
      updateVacant: async (parent, {id, vacant}, {mongoDataMethods}) => {
        return await mongoDataMethods.updateVacant(id, vacant)
      },
      deleteApartment: async (parent, args, {mongoDataMethods}) => {
        return await mongoDataMethods.deleteApartment(args)
      }
  }
}

module.exports = resolvers