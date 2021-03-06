const jwt = require("jsonwebtoken");
const db = require("../models");
const Manager = db.manager;
const tokencreate = require("../helpers/tokens");

//create and save a new manager
exports.create = (req, res) => {
    //data 
    const manager = new Manager({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
    });
    
      // Save manager in the database
      manager
      .save(manager)
      .then(data=>{
          res.send(data)
      })
      .catch(err=>{
          res.status(500).send({message: err.message})
      })
  
  };

  //find all managers
  exports.findAll = (req, res) => {
    
    Manager.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({message: err.message});
      });
  };

  //find a manager by id
  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Manager.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found"});
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: err });
      });
  };

  //update a manager
  exports.update = (req, res) => {
      //data verification
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
    // set data
    const id = req.params.id;
    const data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    Manager.findByIdAndUpdate(id, data, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update manager`
          });
        } else res.send({ message: "manager was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating manager" 
        });
      });
  };
  
  //delete manager 
  exports.delete = (req, res) => {
    const id = req.params.id;
    
    Manager.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete manager`
          });
        } else {
          res.send({
            message: "manager was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "error deleting"});
      });
  };
  // authentification
  exports.login = async(req, res) => {
    try{
        const managerData = {
            email: req.body.email,
            password: req.body.password
        }
        // check if exists
         const managerFind = await Manager.findOne({email: managerData.email, password: managerData.password})
         if(managerFind){
            //call token creation
            console.log(managerFind)
              tokencreate.tokenCreation(managerFind, req, res)
              res.status(200).json((managerFind));
         }
         else{
             res.status(404).json({message: "Manager not found"})
         }
         
    }catch(err){
        res.json({ message: err.message });
    }
    
};