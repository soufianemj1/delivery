const Router = require("express").Router()
const driver = require("../controllers/driverController")
const morgan = require("morgan")
const drivermiddleware = require("../middleware/driverMware")
const fs = require("fs")



Router.post("/create", drivermiddleware,morgan('common', {stream: fs.createWriteStream('./admin.log', {flags: 'a'})}), driver.create)
Router.get("/findall",drivermiddleware,morgan('common', {stream: fs.createWriteStream('./admin.log', {flags: 'a'})}), driver.findAll)
Router.put("/update/:id",drivermiddleware,morgan('common', {stream: fs.createWriteStream('./admin.log', {flags: 'a'})}),driver.update)
Router.delete("/delete/:id",drivermiddleware,morgan('common', {stream: fs.createWriteStream('./admin.log', {flags: 'a'})}),driver.delete)
Router.post("/login",morgan('common', {stream: fs.createWriteStream('./admin.log', {flags: 'a'})}),driver.login)


module.exports = Router