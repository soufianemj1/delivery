const jwt = require("jsonwebtoken");
const db = require("../models");
const Prime = db.prime;

exports.findAll = (req, res) => {
    
    Prime.find().populate('driver_id').populate('delivery_id')
      .then(data => {
          var distance = []
          data.forEach(element => {
              distance.push(parseInt(element.delivery_id.distance))
              let distanceprime = 0
              for(let i = 0; i<distance.length; i++){
                distanceprime += distance[i]
                    
              }
              
             
          });
         
   

        res.send(data);
      })
      .catch(err => {
        res.status(500).send({message: err.message});
      });
    }