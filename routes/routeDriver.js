const Router = require("express").Router()
const driver = require("../controllers/driverController")
const morgan = require("morgan")
const drivermiddleware = require("../middleware/driverMware")



Router.post("/create", drivermiddleware, morgan(), driver.create)
Router.get("/findall", drivermiddleware,morgan(), driver.findAll)
Router.put("/update/:id",drivermiddleware,morgan(),driver.update)
Router.delete("/delete/:id",drivermiddleware,morgan(),driver.delete)
Router.post("/login",morgan(),driver.login)


module.exports = Router