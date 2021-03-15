# 2fa-api
This rest API checks its data when it checks the entered body. To create a 2-FA key you need to have your own secret key by using Google Authenticator or somewhat.

## Starting the server
Make sure you set the necessary environment variables. You can take a look at `.env.example` file for the variables.
  
After that, you can start the server like below:

    npm start

For the development mode:
    
    npm run dev

## Making Requests:

To create an account, the header and body should be like below

    POST http://localhost:3000/api/users/register
    Content-Type: application/json

    {
      "username": "Cayan",
      "email": "cayan@gmail.com",
      "password": "cayan123",
      "secretKey": "XDQXYCP5AC6FA32FQXDGJSPBIDYNKK5W"
    }

To login:

    POST http://localhost:3000/api/users/login
    Content-Type: application/json

    {
    "email": "cayan@gmail.com",
    "password": "cayan123",
    "secretKey": "294016"
    }
    
It generates a number as 6 digits after entering the secret key in your Google Authenticator application or anything.

Feel free to contact me through the pull requests section, if you have any questions/issues.
