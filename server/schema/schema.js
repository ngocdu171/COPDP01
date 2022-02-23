const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Apartment {
    id: ID
    name: String
    price: Float
    address: String
    floor: String
    vacant: Boolean
    elevator: Boolean
    rooms: String
    year: Int
    square: Float
    water: Float
    balcony: String
    park: Int
  }

  type Query {
    apartments: [Apartment]
    apartment (id: ID!): Apartment
  }

  type Mutation {
      createApartment(id: ID!, name: String, price: Float, address: String, floor: String,
        vacant: Boolean, elevator: Boolean, rooms: String, year: Int, square: Float,
        water: Float, balcony: String, park: Int): Apartment
  }
`

module.exports = typeDefs;
