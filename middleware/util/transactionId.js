// GENERATIN RANDOM TRANSACTION ID:

const transactionId = (req, res) => {
 const randString =`abcdefghijklmnopqrstuvwxyz`;
 const randNumber = `0123456789`;
 let transID = [];
 let stringID = [];
 let numberID = [];
 for ( let i = 0; stringID.length < 12; i++){
    const index = Math.floor ( Math.random () * randString.length);
    stringID = [...stringID, randString[index]];
 };

 for ( let j = 0; numberID.length < 12; j++ ){
    const index = Math.floor ( Math.random () * randNumber.length);
    numberID = [...numberID, randNumber[index]];
 };

 for (let k = 0; transID.length <12; k++) {
    const numGenerator = Math.floor ( Math.random () * numberID.length);
    const strGenerator = Math.floor ( Math.random () * stringID.length);
    transID = [...transID, numberID[numGenerator], stringID[strGenerator]];
 };

 const transactionID = transID.join ('').toUpperCase(); 
 return transactionID;
};

//EXPORT
module.exports = transactionId;