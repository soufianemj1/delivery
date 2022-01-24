const Router = require("express").Router()
const prime = require("../controllers/primeController")
const morgan = require("morgan")


Router.get("/findall", morgan(), prime.findAll)

module.exports = Router