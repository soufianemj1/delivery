const db = require("../models");
const Driver = db.driver;
const tokencreate = require("../helpers/tokens");
// create drivers
exports.create = (req, res) => {
    //data 
    const driver = new Driver({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          vehicule: req.body.vehicule
    });
    
      // Save Driver in the database
      driver
      .save(driver)
      .then(data=>{
          res.send(data)
      })
      .catch(err=>{
          res.status(500).send({message: err.message})
      })
  
  };

  //get all drivers
  exports.findAll = (req, res) => {
    
    Driver.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({message: err.message});
      });
    }

    // find driver by id
    exports.findOne = (req, res) => {
        const id = req.params.id;
      
        Manager.findById(id)
          .then(data => {
            if (!data)
              res.status(404).send({ message: "Not found" });
            else res.send(data);
          })
          .catch(err => {
            res
              .status(500)
              .send({ message: err });
          });
      };

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
          password: req.body.password,
          vehicule: req.body.vehicule
      }
      Driver.findByIdAndUpdate(id, data, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update driver`
            });
          } else res.send({ message: "driver was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating driver" 
          });
        });
    };
    

    // delete driver
    exports.delete = (req, res) => {
        const id = req.params.id;
        
        Driver.findByIdAndRemove(id)
          .then(data => {
            if (!data) {
              res.status(404).send({
                message: `Cannot delete driver`
              });
            } else {
              res.send({
                message: "driver was deleted successfully!"
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "error deleting"});
          });
      };

    //   auth driver
      exports.login = async(req, res) => {
        try{
            const driverData = {
                email: req.body.email,
                password: req.body.password
            }
            // check if exists
             const driverFind = await Driver.findOne({email: driverData.email, password: driverData.password})
             if(driverFind){
                //call token creation
                  tokencreate.tokenCreation(driverFind, req, res)
                  res.status(200).json((driverFind));
             }
             else{
                 res.status(404).json({message: "driver not found"})
             }
             
        }catch(err){
            res.json({ message: err.message });
        }
        
    };

      
      