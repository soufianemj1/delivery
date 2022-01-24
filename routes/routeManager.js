    
    const Router = require("express").Router()
    const manager = require("../controllers/managerController")
    const morgan = require("morgan")
    const managermiddleware = require("../middleware/managerMware")
    const fs = require("fs")

    
    
    Router.post("/create",managermiddleware, morgan('common', {stream: fs.createWriteStream('./admin.log', {flags: 'a'})}), manager.create)
    Router.get("/findall",managermiddleware, morgan('common', {stream: fs.createWriteStream('./admin.log', {flags: 'a'})}), manager.findAll)
    Router.get("/findone/:id",managermiddleware, morgan('common', {stream: fs.createWriteStream('./admin.log', {flags: 'a'})}), manager.findOne)
    Router.put("/update/:id",managermiddleware, morgan('common', {stream: fs.createWriteStream('./admin.log', {flags: 'a'})}), manager.update)
    Router.delete("/delete/:id",managermiddleware,morgan('common', {stream: fs.createWriteStream('./admin.log', {flags: 'a'})}), manager.delete)
    Router.post("/login",morgan('common', {stream: fs.createWriteStream('./admin.log', {flags: 'a'})}), manager.login)
    
  
   





    module.exports = Router






