const Apartment = require('../models/Apartment')

const mongoDataMethods = {
    getAllItems: async () => {
        return await Apartment.find()
    }
}

module.exports = mongoDataMethods