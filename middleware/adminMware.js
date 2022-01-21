const jwt = require('jsonwebtoken');



adminmiddleware = async (req, res, next) => {
    const token = req.cookies.token;

    if (token) {

        jwt.verify(token, `${process.env.JWT_SECRET_KEY}`, (err, decodedToken) => {
            if (decodedToken.role == 'admin') {
                console.log("token verified")
            };
        })
    } else {
        console.log("token not verified")

    }

}
module.exports = adminmiddleware;