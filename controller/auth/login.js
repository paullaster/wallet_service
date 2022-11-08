//LOGIN:


//INTERNAL DEPENDENCIES:
const login = ( req, res) => {
    const {phonenumber, pin} = req.body;

    res
    .status (200)
    .json ({phonenumber, pin})
};
//EXPORT LOGIN:
module.exports = login;