const Router = require("express").Router()
const delivery = require("../controllers/deliveryController")
const morgan = require("morgan")

Router.post("/create", morgan(), delivery.create)
Router.get("/findall",morgan(), delivery.findAll)
Router.put("/update/:id",morgan(),delivery.update)
Router.delete("/delete/:id",morgan(),delivery.delete)

module.exports = Router