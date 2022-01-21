const jwt = require("jsonwebtoken");



// token creation
exports.tokenCreation =async(data,req, res) => {
    const Token =  jwt.sign(
        { role: data.role,  },
        `${process.env.JWT_SECRET_KEY}`,
        {
          expiresIn: "2h",
        }
      );
      res.cookie("token", Token )
      res.status(200).json(Token);
}


