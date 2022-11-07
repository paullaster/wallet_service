//ACCOUNT CREATION FILE:
//DEPENDENCIES:
const bcrypt = require ( 'bcrypt' );
const createAccount = ( req, res) => {
  const {phonenumber, pin} = req.body;
  bcrypt.hash (pin, 12)
  .then ( (hash) => {
    res.json ({
        message: phonenumber, hash
      })
  })
  
  

};

//EXPORT CREATE ACCOUNT CONTROL FUNCTION:
module.exports = createAccount;