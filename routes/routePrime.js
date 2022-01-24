const Router = require("express").Router()
const prime = require("../controllers/primeController")
const morgan = require("morgan")
const fs = require("fs")


Router.get("/findall", morgan('common', {stream: fs.createWriteStream('./admin.log', {flags: 'a'})}), prime.findAll)

module.exports = Router