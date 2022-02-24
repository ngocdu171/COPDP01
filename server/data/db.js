const Apartment = require('../models/Apartment')

const mongoDataMethods = {
    getAllItems: async () => {
        return await Apartment.find()
    },
    getItemById: async (args) => await Apartment.findById(args.id),
    createApartment: async args => {
        const newApartment = new Apartment(args)
        return await newApartment.save()
    },
    updateVacant: async (id, park) => await Apartment.findOneAndUpdate(
        {
            _id: id
        },
        {
            $set: {
                park
            }
        },
        {
            new: true
        }
    )
}

module.exports = mongoDataMethods