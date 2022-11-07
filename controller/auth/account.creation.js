//ACCOUNT CREATION FILE:
//DEPENDENCIES:
const bcrypt = require ( 'bcrypt' );


//INTERNAL DEPENDENCIES:
const knex = require ( '../../helper/database.connection');
const apiError = require ( '../../middleware/errors/errorHandler');

const createAccount = ( req, res, next) => {
  const {phonenumber, pin} = req.body;

  //CHECKING IF ACCOUNT ALREADY EXISTS:
  knex('accounts')
  .where ( {
    accountID: phonenumber,
  })
  .then ( (rows) => {
    if (rows.length > 0) {
        return (
            res
            .status (400)
            .json ( {message: 'account already exists'})
        );
    };
    
    res
    .status(200)
    .json (rows);
  })
  .catch ( (err) => {
    res.json (err.message)
  })
//   let account = [
//     {
//         accountID: phonenumber,
//         balance: 1,
//         userID: 343489
    
//     }
//   ];
//   knex('accounts').insert ( account).then ( (result) => {
//     console.log ( 'account created successfully');
//     res.json ( result);
// })

//   bcrypt.hash ( pin, 12)
//   .then ( (hash) => {
//     res
//     .status(200)
//     .json ({
//         message: phonenumber, hash
//       });
//   })
//   .catch ( (err) => {
//     next (err)
//   });
};

//EXPORT CREATE ACCOUNT CONTROL FUNCTION:
module.exports = createAccount;