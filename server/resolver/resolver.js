const { apartments } = require("../data/static")

const resolvers = {
  Query: {
    apartments: () => apartments,
    apartment: (parent, args) => apartments.find(apartment => apartment.id.toString() === args.id)
  },

  Mutation: {
      createApartment: (parent, args) => args
  }
}

module.exports = resolvers