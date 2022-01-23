    
    const Router = require("express").Router()
    const manager = require("../controllers/managerController")
    const morgan = require("morgan")
    const managermiddleware = require("../middleware/managerMware")

    
    
    Router.post("/create",managermiddleware, morgan(), manager.create)
    Router.get("/findall",managermiddleware, morgan(), manager.findAll)
    Router.get("/findone/:id",managermiddleware, morgan(), manager.findOne)
    Router.put("/update/:id",managermiddleware, morgan(), manager.update)
    Router.delete("/delete/:id",managermiddleware,morgan(), manager.delete)
    Router.post("/login",morgan(), manager.login)
    
  
   





    module.exports = Router






