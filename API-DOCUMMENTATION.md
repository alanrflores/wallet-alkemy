
-I'm gonna add some docummentation for easy acces to really know what're the endpoints doing



USER:

    -get(id)    -> returns user AND account
    -getByEmail(userEmail) -> returns ONLY user by his email
    -post       -> returns a created user AND created account
    -delete(userID)     -> returns string "deleted" if deleted or boom error if already don't exists.

ROLE: 

    -post       -> returns role created if created or boom error with some description of the values of role(1 admin 2 client 3 intermediary)

    ** if we do the seeder then no need for this endpoint to exist.

AUTH: 

    -post(email, password)       ->  returns JWT acces token

ACCOUNT:

    -put(accountID, ammount)  -> NO NEED OF THE ENDPOINT
                                - controllers/account-> update function charges the transactions to the account
                                -returns account if money of the account is 0 or more
                                -returns boom.unauthorized if account is blocked
                                -returns boom.conflict if no money to update 
                                - all of this makes sense in the initialization from transactions
    
    -post(userID)           -> NO NEED OF THE ENDPOINT
                            - controllers/user -> post function call for post controller of account to create and link an account to a new user
                            -returns the created account
    
    -get(id)               -> returns account or boom.notfound if not found (super rare if this happens)

    -get/userId(by user id)      -> returns  account while providing a userId linked to the account or boom.notFound if userId don't have an account (super rare if this happens)

TRANSACTIONS:

    -get(id)        -->  returns   transtaction ticket AND account AND user

    -get            --> returns ALL transactions

    -post           --> create new transaction (WARNING: check the use cases of what transaction do based on accountsID, roleId and toAccountId)

                    - returns the transaction or error if not money
                    - if the account who mades the transaction is invalid returns boom.notfound
                    - if the TOACCOUNTid is invalid returns constrains error (error not handle yet)

    -put(id)        -->   returns the edited transaction (only can edit concept)
                         

    -delete(id)     -->  returns string "deleted" if succes or boom.conflict if transactions doesn't exists