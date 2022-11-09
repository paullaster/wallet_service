// GENERATIN RANDOM TRANSACTION ID:

const transactionId = () => {
 const randString =`abcdefghijklmnopqrstuvwxyz`;
 const randNumer = `0123456789`;
 let transID = [];
 for ( let i = 0; transID.length < 12; i++){
    const index = Math.floor ( Math.random () * randString.length);
    transID = [...transID, randString[index]];
 };
 console.log ( transID)
};

//EXPORT
module.exports = transactionId;