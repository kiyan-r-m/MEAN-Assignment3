const express = require('express')
const router = express.Router()
const multer = require('../config/multer')
const {getCategories, getVehicles, createCategory, createVehicle, uploadImage} = require('../controllers/vehicleController')
router.route("/").get(getVehicles).post(multer.single('picture'),createVehicle)
router.route("/category").get(getCategories).post(createCategory)
//router.route("/upload").post(multer.single('picture'),uploadImage)
module.exports=router