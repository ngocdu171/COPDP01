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
      // deleteApartment: (parent, args) => {
      //   Apartment.findByIdAndRemove({ _id: args.id})
      //   return true
      // }
      updateVacant: async (parent, {id, park}, {mongoDataMethods}) => {
        return await mongoDataMethods.updateVacant(id, park)
      }
  }
}

module.exports = resolvers