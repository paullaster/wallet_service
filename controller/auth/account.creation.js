//ACCOUNT CREATION FILE:
//DEPENDENCIES:
const bcrypt = require ( 'bcrypt' );
const createAccount = ( req, res, next) => {
  const {phonenumber, pin} = req.body;
  bcrypt.hash ( 12)
  .then ( (hash) => {
    res
    .status(200)
    .json ({
        message: phonenumber, hash
      });
  })
  .catch ( (err) => {
    next (err)
  });
  
  

};

//EXPORT CREATE ACCOUNT CONTROL FUNCTION:
module.exports = createAccount;