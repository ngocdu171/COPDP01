const { apartments } = require("../data/static")

const resolvers = {
  Query: {
    apartments: () => apartments
  }
}

module.exports = resolvers