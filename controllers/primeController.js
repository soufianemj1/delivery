const jwt = require("jsonwebtoken");
const db = require("../models");
const Prime = db.prime;

exports.findAll = (req, res) => {
  const id = req.body.id;
    
    Prime.find({driver_id : id}).populate('driver_id').populate('delivery_id')
      .then(data => {
          var distance = 0;
          data.forEach(element => {
              distance += parseInt(element.delivery_id.distance)
              
          });
          console.log(distance);   
          
         
   

        res.send(data);
      })
      .catch(err => {
        res.status(500).send({message: err.message});
      });
    }