const {Category, Vehicle} = require('../models/vehicle')

const getCategories = async(req, res)=>{
    const data = await Category.find({});
    res.status(200).json(data)
}

const getVehicles = async(req, res)=>{
    const data = await Vehicle.find({});
    res.status(200).json(data)
}

const createVehicle = async(req, res)=>{
    console.log
    if(!req.file){
        return res.status(404).json({data:{result: [], error: "Image not found", src:""}})
    }
    const data = await Vehicle.create({...req.body, picture:`uploads/${req.file.filename}`});
    res.status(200).json({data:{result: data, error: "", src:`uploads/${req.file.filename}`}});
}

const createCategory = async(req, res)=>{
    console.log(req.body)
    const data = await Category.create(req.body);
    res.status(201).json(data);
}

const uploadImage = async(req, res)=>{
    req.status(200).json({data:{src:`uploads/${req.file.filename}`, err:""}})
}

module.exports = {getCategories, getVehicles, createCategory, createVehicle, uploadImage}