const mongoose = require('mongoose')
const categorySchema= new mongoose.Schema({
    categoryName: {
        type: String,
        required: true
    }
})

const vehicleSchema = new mongoose.Schema({
    brand: {
        type:String
    },
    categoryName: {
        type:String
    },
    picture: {
        type:String
    },

    price: {
        type:Number
    },

    age:{
        type:Number
    },

    depreciation: {
        type:Number
    },

    totalPrice: {
        type: Number
    }
})

const Category = mongoose.model("Categories", categorySchema);
const Vehicle = mongoose.model("Vehicles", vehicleSchema);

module.exports = {Category, Vehicle};