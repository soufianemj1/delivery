    
    const Router = require("express").Router()
    const manager = require("../controllers/managerController")
    const morgan = require("morgan")

    
    
    Router.post("/create", morgan(), manager.create)
    Router.get("/findall", morgan(), manager.findAll)
    Router.get("/findone/:id", morgan(), manager.findOne)
    Router.put("/update/:id", morgan(), manager.update)
    Router.delete("/delete/:id",morgan(), manager.delete)
    
  
   





    module.exports = Router






