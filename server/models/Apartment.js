const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ApartmentSchema = new Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    address: {
        type: String
    },
    floor: {
        type: String
    },
    vacant: {
        type: Boolean
    },
    elevator: {
        type: Boolean
    },
    rooms: {
        type: String
    },
    year: {
        type: Number
    },
    square: {
        type: Number
    },
    water: {
        type: Number
    },
    balcony: {
        type: String
    },
    park: {
        type: Number
    }
})

module.exports = mongoose.model('apartment', ApartmentSchema)