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
      createApartment: async (parent, args) => {
        const newApartment = new Apartment(args)
        return await newApartment.save()
      }
  }
}

module.exports = resolvers