const jwt = require("jsonwebtoken");
const db = require("../models");
const Manager = db.manager;
const tokencreate = require("../helpers/tokens");
const { manager } = require("../models");

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
    
    manager.find()
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
  
    manager.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Tutorial with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: err + id });
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
    manager.findByIdAndUpdate(id, data, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update manager`
          });
        } else res.send({ message: "manager was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial" 
        });
      });
  };
  
  //delete manager 
  exports.delete = (req, res) => {
    const id = req.params.id;
    
    manager.findByIdAndRemove(id)
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