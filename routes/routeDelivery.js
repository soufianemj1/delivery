const Router = require("express").Router()
const delivery = require("../controllers/deliveryController")
const morgan = require("morgan")
const fs = require("fs")

Router.post("/create", morgan('common', {stream: fs.createWriteStream('./admin.log', {flags: 'a'})}), delivery.create)
Router.get("/findall",morgan('common', {stream: fs.createWriteStream('./admin.log', {flags: 'a'})}), delivery.findAll)
Router.put("/update/:id",morgan('common', {stream: fs.createWriteStream('./admin.log', {flags: 'a'})}),delivery.update)
Router.delete("/delete/:id",morgan('common', {stream: fs.createWriteStream('./admin.log', {flags: 'a'})}),delivery.delete)

module.exports = Router