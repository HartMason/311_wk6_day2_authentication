const jwksRsa = require('jwks-rsa');
const jwt = require('jsonwebtoken');

const logger = () => {}

const checkJwt = (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(401).json("you are not authorized inside of a string")
  } 
  let bearer = req.headers.authorization.split(" ") 
  console.log(bearer)
  let token = bearer[1]
  jwt.verify(token, "secret", (err,decoded) => {
    if (err) {
      res.status(401).json("you are not authorized")
    }  
    console.log(decoded)
    next()
  } )

}

module.exports = {
  logger,
  checkJwt
}