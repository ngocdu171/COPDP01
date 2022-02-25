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
    updateVacant: async (id, vacant) => await Apartment.findOneAndUpdate(
        {
            _id: id
        },
        {
            $set: {
                vacant
            }
        },
        {
            new: true
        }
    ),
    deleteApartment: async (args) => {
        const deleteItem = await Apartment.findByIdAndRemove({ _id: args.id})
        return deleteItem
    }
}

module.exports = mongoDataMethods