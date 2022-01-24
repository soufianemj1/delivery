const axios = require("axios")
const db = require("../models");
const Mail = require("../helpers/mail.js");
const Delivery = db.delivery;
const Driver = db.driver;
const Prime = db.prime;


// create delivery
exports.create = async (req, res) => {
    const distance = await axios(`https://www.distance24.org/route.json?stops=${req.body.from}%7C${req.body.to}`)
    let price = 0
    
    if(req.body.weight > 3){
        price = 120 + (req.body.weight-3)*5
    }
    //data 
    
    const delivery = new Delivery({
        from: req.body.from,
        to: req.body.to,
        distance:distance.data.distance,
        weight: req.body.weight,
        price: price,
        date: req.body.date,
        Status: "en cours",
    });
    
      // Save delivery in the database
      delivery
      .save(delivery)
      .then(data=>{
          res.send(data)
      })
      .catch(err=>{
          res.status(500).send({message: err.message})
      })
      if (parseInt(delivery.weight) <= 200){
        Driver.find({vehicule: "car"})
        .then(data => {
          data.forEach(element => {
            Mail.sendMail(element.email)
          });

        })
        .catch(err => {
          res.status(500).send({message: err.message});
        });
      }
      if (parseInt(delivery.weight) <= 800){
        Driver.find({vehicule: "truck"})
        .then(data => {
          data.forEach(element => {
            Mail.sendMail(element.email)
          });

        })
        .catch(err => {
          res.status(500).send({message: err.message});
        });
      }
      if (parseInt(delivery.weight) <= 200){
        Driver.find({vehicule: "big truck"})
        .then(data => {
          data.forEach(element => {
            Mail.sendMail(element.email)
          });

        })
        .catch(err => {
          res.status(500).send({message: err.message});
        });
      }
      
      

  
  };

  //get all deliveries
  exports.findAll = (req, res) => {
    
    Delivery.find().populate('driver_id')
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({message: err.message});
      });
    }

    // find delivery by id
    exports.findOne = (req, res) => {
        const id = req.params.id;
      
        Delivery.findById(id)
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

    //   update status
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
        
        driver_id: req.body.driver_id,
        Status: "delivery taken",
      }
      Delivery.findByIdAndUpdate(id, data, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update delivery`
            });
          } else res.send({ message: "delivery was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating dlivery" 
          });
        });
      
      const prime = new Prime({
        driver_id: req.body.driver_id,
        delivery_id: req.params.id,
      })
      prime
      .save(prime)
      .then(data=>{
          res.send(data)
      })
      .catch(err=>{
          res.status(500).send({message: err.message})
      })
    };
    

    // delete driver
    exports.delete = (req, res) => {
        const id = req.params.id;
        
        Delivery.findByIdAndRemove(id)
          .then(data => {
            if (!data) {
              res.status(404).send({
                message: `Cannot delete`
              });
            } else {
              res.send({
                message: "deleted successfully!"
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "error deleting"});
          });
      };

    

      
      