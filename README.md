# Wallet Service
This is a wallet services API in NodeJs.
Throug the wallet services API, the following services are available:

### Account creation
A user provides a 12 digit phonenumber which well be used as account number 
and a 4 digit pin to create an account. The account creation details or records
are stored or recorded in the database.

http://paullaster-lendsqr-be-test.citclubmmu.co.ke/api/auth/register

### Authorization
A user must be logged in to perform any transaction:
A user login with a phonenumber and pin.

http://paullaster-lendsqr-be-test.citclubmmu.co.ke/api/auth/login

### Funding Account
An authorized user can fund their accounts, deposit,.
A user enters the amount they wish to deposit and that's the scope of this MVP.
Users can not make a deposit of Zero and below.

http://paullaster-lendsqr-be-test.citclubmmu.co.ke/api/services/fund/deposit

### Funds Transfer
An authorized user can transfer funds from their accounts to an exisiting account.
Users can not transfer funds to their same account.
A user can not transfer funds less than one.
A user can not transfer more than their current balance
A transfer transaction affects two tables automatically.

http://paullaster-lendsqr-be-test.citclubmmu.co.ke/api/services/fund/transfer

### Withdraw Funds
An authorized user can withdraw funds from their accounts,
Users can not withdraw amounts less than 1
Users can not withdraw amount greater than their current balance

http://paullaster-lendsqr-be-test.citclubmmu.co.ke/api/services/fund/withdraw

## E-R Diagram
<img src="./public/assets/ERD.png">

Account details are recorded in the accounts table of the wallet database.
When a user perform any transaction, withdraw funds, transfer funds, deposit funds,
the changes are recorded in the account table of the wallet database and the transaction
details are recorded in the transaction details table of the wallet database.

After user creates a new account successfully, they may decide to update their accounts 
with their details including  thier name, when this is the case, this information will be 
recorded in the users table of the wallet database.


## Postman Collection
This is a postman collection to the wallet service APIs, includes;

`account creation api`

`login to account api`

`fund account, deposit, api`

`transfer funds api`

`withdraw funds api`


<a href="https://www.postman.com/paullaster-haurweengs/workspace/team-workspace/collection/12642333-f04f782e-4996-440c-8a50-bccd48eb4455?action=share&creator=12642333" target=_blank > Postman collection </a>


Getting this application on your server:
Clone this repository using the following command;

```git clone https://github.com/paullaster/wallet_service.git```

After cloning the wallet service APIs application, you will need to run the following command;

``` npm install ```

This command will install all the npm packages listed as dependencies and deveDependencies in the ```package.json``` file.

After installing all the npm dependencies, you will need to create a configuration file,
```.env ``` with same name as in the  ```.env.examples``` file with your own values.

## Running the application
To run this application, run the following command;

### Start the application in development environment
`npm run dev`

### Run the application in production environment
`npm start`

### Run test scripts in development environment
`npm test`

## Live application link:

http://paullaster-lendsqr-be-test.citclubmmu.co.ke/
