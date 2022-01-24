    
    const Router = require("express").Router()
    const admin = require("../controllers/adminController")
    const morgan = require("morgan")
    const adminmiddleware = require("../middleware/AdminMware")
    const fs = require("fs")
    
    
    Router.post("/", morgan(), admin.create)
    Router.post("/login", morgan('common', {stream: fs.createWriteStream('./admin.log', {flags: 'a'})}), admin.login)
  
   





    module.exports = Router






