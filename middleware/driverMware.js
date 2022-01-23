const jwt = require('jsonwebtoken');



drivermiddleware = async (req, res, next) => {
    const token = req.cookies.token;

    if (token) {

        jwt.verify(token, `${process.env.JWT_SECRET_KEY}`, (err, decodedToken) => {
            if (decodedToken.role == 'driver') {
                console.log("token verified")
                next()
            };
        })
    } else {
        console.log("token not verified")
        
    }

}
module.exports = drivermiddleware;