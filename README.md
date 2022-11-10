# Wallet Service
This is a wallet services API in NodeJs.
Throug the wallet services API, the following services are available:

### Account creation
A user provides a 12 digit phonenumber which well be used as account number 
and a 4 digit pin to create an account. The account creation details or records
are stored or recorded in the database.

### Authorization
A user must be logged in to perform any transaction:
A user login with a phonenumber and pin.

### Funding Account
An authorized user can fund their accounts, deposit,.
A user enters the amount they wish to deposit and that's the scope of this MVP.
Users can not make a deposit of Zero and below

### Funds Transfer
An authorized user can transfer funds from their accounts to an exisiting account.
Users can not transfer funds to their same account.
A user can not transfer funds less than one.
A user can not transfer more than their current balance
A transfer transaction affects two tables automatically.

### Withdraw Funds
An authorized user can withdraw funds from their accounts,
Users can not withdraw amounts less than 1
Users can not withdraw amount greater than their current balance


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
This is a postman collection to the wallet service APIs, includes, 
`account creation api`.
`login to account api`.
`fund account, deposit, api`.
`transfer funds api`.
`withdraw funds api`.
<a href="https://web.postman.co/workspace/My-Workspace~e801e857-de9e-4c42-8191-af1848cd4384/collection/12642333-f04f782e-4996-440c-8a50-bccd48eb4455?action=share&creator=12642333" target=_blank > Postman collection </a>