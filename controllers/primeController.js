const jwt = require("jsonwebtoken");
const db = require("../models");
const Prime = db.prime;

exports.findAll = (req, res) => {
  const id = req.body.id;
  let distancedeprime = 0;
  let prime = 0;
  
  
    Prime.find({driver_id : id}).populate('driver_id').populate('delivery_id')
      .then(data => {
          data.forEach(element => {
            distancedeprime += parseInt(element.delivery_id.distance);
          });
          
          data.forEach(element2 => {
            prime += parseInt(element2.delivery_id.price);
          })
          if(distancedeprime = 1000 && distancedeprime <2000){
            prime = prime*0.15
          }else if(distancedeprime = 2000 && distancedeprime <2500){
            prime = prime*0.22
          }else if (distancedeprime >= 2500){
            prime = prime*0.3
          }else{
            prime = 0
          }

          console.log(prime);
          
          
// returning prime
          res.send({
            prime: prime
          });
        // res.send(data);
      })
      .catch(err => {
        res.status(500).send({message: err.message});
      });
    }