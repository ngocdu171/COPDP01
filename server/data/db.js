const Apartment = require('../models/Apartment')

const mongoDataMethods = {
    getAllItems: async () => {
        return await Apartment.find()
    },
    createApartment: async args => {
        const newApartment = new Apartment(args)
        return await newApartment.save()
    }
}

module.exports = mongoDataMethods