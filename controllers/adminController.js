const jwt = require("jsonwebtoken");
const db = require("../models");
const Admin = db.admin;
const tokencreate = require("../helpers/tokens");

// Create and Save a new admin
exports.create = (req, res) => {
  //data 
  const admin = new Admin({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
  });
  
    // Save admin in the database
    admin
    .save(admin)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({message: err.message})
    })

};

// Auth
exports.login = async(req, res) => {
    try{
        const adminData = {
            email: req.body.email,
            password: req.body.password
        }
        // check if exists
         const adminFind = await Admin.findOne({email: adminData.email, password: adminData.password})
         if(adminFind){
            //call token creation
            console.log(adminFind)
              tokencreate.tokenCreation(adminFind, req, res)
              res.status(200).json(AdminToken);
         }
         else{
             res.status(404).json({message: "Admin not found"})
         }
         
    }catch(err){
        res.json({ message: err.message });
    }
    
};


