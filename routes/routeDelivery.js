const Router = require("express").Router()
const delivery = require("../controllers/deliveryController")
const morgan = require("morgan")

Router.post("/create", morgan('combined'), delivery.create)
Router.get("/findall",morgan('combined'), delivery.findAll)
Router.put("/update/:id",morgan('combined'),delivery.update)
Router.delete("/delete/:id",morgan('combined'),delivery.delete)

module.exports = Router