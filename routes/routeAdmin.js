    
    const Router = require("express").Router()
    const admin = require("../controllers/adminController")
    const morgan = require("morgan")
    const adminmiddleware = require("../middleware/AdminMware")
    
    
    Router.post("/", morgan(), admin.create)
    Router.post("/login", morgan(), admin.login)
  
   





    module.exports = Router






