const { apartments } = require("../data/static")
const Apartment = require("../models/Apartment")

const resolvers = {
  Query: {
    apartments: async (parent, args, context) => {
      return await context.mongoDataMethods.getAllItems()
    },
    apartment: (parent, args) => apartments.find(apartment => apartment.id.toString() === args.id)
  },

  Mutation: {
      createApartment: async (parent, args, {mongoDataMethods}) => {
        return await mongoDataMethods.createApartment(args)
      }
  }
}

module.exports = resolvers